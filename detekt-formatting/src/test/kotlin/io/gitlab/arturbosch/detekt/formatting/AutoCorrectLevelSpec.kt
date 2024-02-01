package io.gitlab.arturbosch.detekt.formatting

import io.gitlab.arturbosch.detekt.api.Config
import io.gitlab.arturbosch.detekt.api.Finding
import io.gitlab.arturbosch.detekt.api.RuleSet
import io.gitlab.arturbosch.detekt.api.RuleSetProvider
import io.gitlab.arturbosch.detekt.test.assertThat
import io.gitlab.arturbosch.detekt.test.yamlConfigFromContent
import org.assertj.core.api.Assertions.assertThat
import org.jetbrains.kotlin.psi.KtFile
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.CsvSource

class AutoCorrectLevelSpec {

    @ParameterizedTest
    @CsvSource(
        "Undefined, Undefined, false",
        "Undefined, True,      true",
        "Undefined, False,     false",
        "True,      Undefined, true",
        "True,      True,      true",
        "True,      False,     false",
        "False,     Undefined, false",
        "False,     True,      true",
        "False,     False,     false",
    )
    fun autoCorrect(
        ruleSet: AutoCorrectConfig,
        rule: AutoCorrectConfig,
        wasFormatted: Boolean
    ) {
        val config = yamlConfigFromContent(createConfig(ruleSet, rule))

        val (file, findings) = runRule(config)

        assertThat(findings).isNotEmpty()
        if (wasFormatted) {
            assertThat(wasFormatted(file)).isTrue()
        } else {
            assertThat(wasFormatted(file)).isFalse()
        }
    }
}

enum class AutoCorrectConfig {
    True,
    False,
    Undefined;

    override fun toString(): String {
        return when (this) {
            True -> "true"
            False -> "false"
            Undefined -> "Undefined"
        }
    }
}

private fun createConfig(ruleSet: AutoCorrectConfig, rule: AutoCorrectConfig): String {
    return buildString {
        appendLine("formatting:")
        appendLine("  active: true")
        if (ruleSet != AutoCorrectConfig.Undefined) {
            appendLine("  autoCorrect: $ruleSet")
        }
        appendLine("  ChainWrapping:")
        appendLine("    active: true")
        if (rule != AutoCorrectConfig.Undefined) {
            appendLine("    autoCorrect: $rule")
        }
    }
}

private fun runRule(config: Config): Pair<KtFile, List<Finding>> {
    val testFile = loadFile("configTests/fixed.kt")
    val ruleSet = loadRuleSet<FormattingProvider>()
    val rules = ruleSet.rules
        .map { (ruleId, provider) -> provider(config.subConfig(ruleSet.id.value).subConfig(ruleId.value)) }
        .filter { it.config.valueOrDefault("active", false) }
    return testFile to rules.flatMap { it.visitFile(testFile) }
}

private fun wasFormatted(file: KtFile) = file.text == contentAfterChainWrapping

private inline fun <reified T : RuleSetProvider> loadRuleSet(): RuleSet {
    val provider = T::class.java.constructors[0].newInstance() as? T
        ?: error("Could not load RuleSet for '${T::class.java}'")
    return provider.instance()
}
