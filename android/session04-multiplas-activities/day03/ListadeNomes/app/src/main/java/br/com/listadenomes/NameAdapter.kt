package br.com.listadenomes

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView.Adapter
import androidx.recyclerview.widget.RecyclerView.ViewHolder

class NameAdapter(private val namesList: List<Name>) : Adapter<NameAdapter.NameViewHolder>() {

    private var itemListener: NameItemListener? = null

    fun setItemListener(listener: NameItemListener?) {
        itemListener = listener
    }

    class NameViewHolder(view: View, listener: NameItemListener?) : ViewHolder(view) {
        val itemName: TextView = view.findViewById(R.id.item_tv_name)

        init {
            view.setOnClickListener {
                listener?.onItemListener(view, adapterPosition)
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): NameViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_name, parent, false)
        return NameViewHolder(view, itemListener)
    }

    override fun getItemCount() = namesList.size

    override fun onBindViewHolder(holder: NameViewHolder, position: Int) {

        val name = namesList[position]

        holder.itemName.text = name.name
    }

}
