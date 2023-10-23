package com.app

fun main() {
    print("Digite o primeiro número: ")
    val num1 = readln().toInt()

    print("Digite o segundo número: ")
    val num2 = readln().toInt()

    val bigger = if (num1 > num2) num1 else num2

    println("O maior número digitado é $bigger")
}