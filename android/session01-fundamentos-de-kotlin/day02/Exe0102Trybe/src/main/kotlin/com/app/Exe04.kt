package com.app

fun main() {
    print("Digite a primeira nota: ")
    val nota01 = readln().toDouble()

    print("Digite a segunda nota: ")
    val nota02 = readln().toDouble()

    print("Digite a terceira nota: ")
    val nota03 = readln().toDouble()

    val average = calcAverage(nota01, nota02, nota03)
    
    if (average >= 0.0 && average < 3.0) {
        println("REPROVADO")
    } else if (average > 3.0 && average < 7.0) {
        println("EXAME")
    } else {
        println("APROVADO")
    }
}

fun calcAverage(a: Double, b: Double, c: Double): Double = (a + b + c) / 3