package com.AboutClasses

interface MyInterface {
    fun bar()
    fun foo() {
        // corpo opcional
    }

    val prop: Int // abstrato

    val propriedadeComImplementacao: String
        get() = "foo"

}

class Child(override val prop: Int) : MyInterface {
    // override val prop: Int = 29

    override fun bar() {
        // corpo
    }
}