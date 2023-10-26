package com.AboutClasses

fun main() {
    val person1 = Person("Luao", 1996, "black")

    println(person1.name)

    println(person1.age)

    println(person1.color)

    person1.color = "white"

    println(person1.color)

    person1.birthDay = 1997

    println(person1.age)
}