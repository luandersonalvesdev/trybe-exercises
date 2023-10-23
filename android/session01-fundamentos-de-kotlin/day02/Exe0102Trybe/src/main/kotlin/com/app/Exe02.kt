package com.app

fun main() {
    print("Digite qual a altura do degrau: ")
    val stairStepHeight = readln().toDouble()

    print("Digite a altura que você deseja alcançar: ")
    val goalHeight = readln().toDouble()

    val stairStep = calcStairStep(stairStepHeight, goalHeight)

    println("Você deverá subir $stairStep degraus.")
}

fun calcStairStep(stair: Double, goal: Double): Double = goal / stair