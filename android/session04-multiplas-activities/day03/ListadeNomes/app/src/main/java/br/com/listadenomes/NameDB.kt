package br.com.listadenomes

object NameDB {
    val names = listOf(
        Name("Gustavo"),
        Name("Sophia"),
        Name("Lucas"),
        Name("Emma"),
        Name("Mateus"),
        Name("Isabella"),
        Name("Luis"),
        Name("Olivia"),
        Name("Pedro"),
        Name("Maria"),
        Name("João"),
        Name("Alice"),
        Name("Gabriel"),
        Name("Laura"),
        Name("Miguel"),
        Name("Valentina"),
        Name("Enzo"),
        Name("Helena"),
        Name("Rafael"),
        Name("Beatriz"),
        Name("Daniel"),
        Name("Manuela"),
        Name("Samuel"),
        Name("Julia"),
        Name("Arthur"),
        Name("Lara"),
        Name("Heitor"),
        Name("Lorena"),
        Name("Eduardo"),
        Name("Isadora")
    )

    fun getByIndex(index: Int) = names[index]

}