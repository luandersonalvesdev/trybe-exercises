enum class Direction {
    NORTH, SOUTH, WEST, EAST
}

enum class RGB(val rgb: Int) {
    RED(0xFF0000),
    GREEN(0x00FF00),
    BLUE(0x0000FF)
}

fun main() {
    for (color in RGB.values()) println(color.toString()) // imprime RED, GREEN, BLUE
    println("A primeira cor é: ${RGB.valueOf("RED")}") // imprime "A primeira cor é: RED"

    for (color in RGB.entries) println(color.toString())
    // imprime RED, GREEN, BLUE
}