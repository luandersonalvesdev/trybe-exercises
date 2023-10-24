package com.app

fun main() {
    val numbers1 = arrayOf(1, 2, 3)
    val numbers2 = Array(5) { i -> i * 2 }

    for (i in 0 until numbers1.size) {
        println(numbers1[i])
    }

    println("##############")

    numbers2.forEach { number ->
        println(number)
    }

    numbers2.forEach {
        println(it)
    }
}

/*
size: Propriedade que retorna o tamanho da lista.
isEmpty(): Função que verifica se a lista está vazia.
isNotEmpty(): Função que verifica se a lista não está vazia.
sorted(): Função que retorna uma nova lista com os elementos classificados.*/
