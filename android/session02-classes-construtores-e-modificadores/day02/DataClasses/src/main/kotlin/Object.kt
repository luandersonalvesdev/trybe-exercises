object Configuracao {
    val idioma = "Português"
    val tema = "Escuro"
}

interface Auditable {
    fun auditar()
}

object Auditoria : Auditable {
    override fun auditar() {
        println("Auditar evento...")
    }
}

fun main() {
    println(Configuracao.idioma)  // Saída: Português
}