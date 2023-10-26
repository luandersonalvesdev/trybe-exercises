package com.AboutClasses

import kotlin.time.times

class Person(val name: String, var birthDay: Int = 0, var color: String) {
    var age: Int
        get() = 2023 - birthDay
        set(value) {
            this.age = value
        }

}

// Tanto o cabeçalho quanto o corpo são opcionais
class Empty

class InitOrderDemo(name: String) {
    val firstProperty = "First property: $name".also(::println)

    init {
        println("First initializer block that prints $name")
    }

    val secondProperty = "Second property: ${name.length}".also(::println)

    init {
        println("Second initializer block that prints ${name.length}")
    }
}

abstract class Polygon {
    abstract fun draw()
}

class Rectangle(val width: Int, val height: Int) : Polygon() {

    override fun draw() {
        // draw the rectangle
    }

    val area: Int
        get() = this.width * this.height
}
