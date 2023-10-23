package com.app

fun main() {
    print("Digite seu salário: ")
    val salary = readln().toDouble()

    val newSalary = incressSalary(salary)

    println("Seu novo salário é: $newSalary")
}

fun incressSalary(salary: Double, percent: Double = 0.25): Double = salary + (salary * percent)