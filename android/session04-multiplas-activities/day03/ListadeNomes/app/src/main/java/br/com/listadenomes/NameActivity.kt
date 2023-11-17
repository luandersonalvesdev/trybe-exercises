package br.com.listadenomes

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView

class NameActivity : AppCompatActivity() {

    private val nName: TextView by lazy { findViewById(R.id.name_tv_name) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_name)

        val index = intent.getIntExtra("index", 0)

        val name = NameDB.getByIndex(index)

        nName.text = name.name
    }
}