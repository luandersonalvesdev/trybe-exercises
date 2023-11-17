package br.com.listadenomes

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class MainActivity : AppCompatActivity(), NameItemListener {

    private val mNameList: RecyclerView by lazy { findViewById(R.id.main_rv_name) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val namesList = NameDB.names

        val adapter = NameAdapter(namesList)

        adapter.setItemListener(this)

        mNameList.layoutManager = LinearLayoutManager(baseContext)
        mNameList.adapter = adapter
    }

    override fun onItemListener(view: View, position: Int) {
        val it = Intent(baseContext, NameActivity::class.java)
        it.putExtra("index", position)
        startActivity(it)
    }
}