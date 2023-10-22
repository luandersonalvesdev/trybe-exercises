package com.app

fun main() {
    print("Digite seu nome: ")
    val name: String = readln()

    println("Bem vindo $name! Ou devemos te chamar de ${name.uppercase()}?")
}