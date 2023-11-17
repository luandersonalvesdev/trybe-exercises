package br.com.fragmentexample

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView
import androidx.fragment.app.Fragment
import com.google.android.material.bottomnavigation.BottomNavigationView

class MainActivity : AppCompatActivity(), View.OnClickListener {

    private val btnFirstFrag: Button by lazy { findViewById(R.id.main_btn_frag1) }
    private val btnSecondFrag: Button by lazy { findViewById(R.id.main_btn_frag2) }
    private val navigationBottom: BottomNavigationView by lazy { findViewById(R.id.bottom_navigation) }

    private val firstFrag = FirstFragment()
    private val secondFrag = SecondFragment()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        btnFirstFrag.setOnClickListener(this)
        btnSecondFrag.setOnClickListener(this)

        navigationBottom.setOnItemSelectedListener {
            when(it.itemId) {
                R.id.item_1 -> {
                    this.replaceFragment(firstFrag)
                    true
                }
                R.id.item_2 -> {
                    this.replaceFragment(secondFrag)
                    true
                }
                else -> false
            }
        }
    }

    override fun onClick(v: View?) {
        when (v?.id) {

            R.id.main_btn_frag1 -> {
                this.replaceFragment(firstFrag)
            }

            R.id.main_btn_frag2 -> {
                this.replaceFragment(secondFrag)
            }
        }
    }

    private fun replaceFragment(frag: Fragment) {
        supportFragmentManager.beginTransaction()
            .replace(R.id.main_cv, frag)
            .commit()
    }

}