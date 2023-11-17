package br.com.fragmentexample

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import androidx.fragment.app.Fragment
import com.google.android.material.textfield.TextInputLayout

class FirstFragment: Fragment() {

    private lateinit var btnEnter: Button
    private lateinit var textInputName: TextInputLayout
    private lateinit var textViewName: TextView

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_first, container, false)

        btnEnter = view.findViewById(R.id.frag1_btn_enter)
        textInputName = view.findViewById(R.id.frag1_ti_name)
        textViewName = view.findViewById(R.id.frag1_tv_name)

        btnEnter.setOnClickListener {
            textViewName.text = textInputName.editText?.text.toString()
            textInputName.editText?.setText("")
        }

        return view
    }

}