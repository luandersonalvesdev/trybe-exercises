package com.app

fun main() {
    val list = listOf(2, 1, 3)
    //list.add(3)

    val list2 = mutableListOf(1, 2, 3)
    list2.add(4)
    list2.remove(1)

    println(list)
    println(list2)
}