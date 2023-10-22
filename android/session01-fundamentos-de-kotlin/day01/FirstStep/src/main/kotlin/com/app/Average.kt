package com.app

fun main() {
    println("Iremos calcular a média dos números digitados.")

    print("Digite o primeiro número: ")
    val num1: Int = readln().toInt()

    print("Digite o segundo número: ")
    val num2: Int = readln().toInt()

    print("Digite o terceiro número: ")
    val num3: Int = readln().toInt()

    val total: Int = calcAverage(num1, num2, num3)

    println("A média é: $total")
}

fun calcAverage(num1: Int, num2: Int, num3: Int): Int = (num1 + num2 + num3) / 3