package com.app

fun main() {
    val set = mutableSetOf(1, 2, 3, 3, 3, 3)
    val set2 = setOf(1, 2, 3, 3, 3, 3)

    set.forEach { num -> println(num) }

    println(3 in set2)
    println(4 in set2)
}