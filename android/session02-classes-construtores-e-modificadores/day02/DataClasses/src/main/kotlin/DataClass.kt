data class User(val name: String, val age: Int)

fun main() {
    val user1 = User("Luao", 27)
    val (user2Name, user2age) = User("Jorel", 18)

    println(user1)
    println(user2Name)
    println(user2age)
}