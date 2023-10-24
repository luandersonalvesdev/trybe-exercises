package com.app

fun main() {
    val map = mapOf("a" to 1, "b" to 2)
    // map.add("c" to 3)

    val map2 = mutableMapOf("a" to 1, "b" to 2)
    map2["c"] = 3

    println(map)
    println(map2["c"])

    for ((key, value) in map) {
        print(key)
        println(value)
    }
}