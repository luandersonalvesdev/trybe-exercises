package com.app

fun main() {
    val numeros = listOf(1, 2, 3, 4, 5)

    val aoQuadrado = numeros.map { it * it } // Resultado: [1, 4, 9, 16, 25]

    val pares = numeros.filter { it % 2 == 0 } // Resultado: [2, 4]

    val somaTotal = numeros.reduce { acc, numero -> acc + numero } // Resultado: 15

    numeros.forEach { numero ->
        println(numero)
    }

    val todosPares = numeros.all { it % 2 == 0 } // Resultado: false

    println(aoQuadrado)
    println(pares)
    println(somaTotal)
    println(todosPares)

    numeros
        .filter { it > 3 }
        .forEach { println("Número filtrado: $it") }


    // FUNÇÃO ANONIMA:
    val somar = { num1: Int, num2: Int -> num1 + num2 }
    println(somar(1, 2))

    val resultado = operacaoBinaria(5, 7, ::soma) // Passando a função "soma" como argumento
    println(resultado)
}

fun soma(a: Int, b: Int): Int {
    return a + b
}

fun operacaoBinaria(a: Int, b: Int, operacao: (Int, Int) -> Int): Int {
    return operacao(a, b)
}