function TodoItem({

todo,
deleteTask,
startEdit,
saveEdit,
editingId,
editText,
setEditText,
toggleComplete

}){


return(

<div>


<input

type="checkbox"

checked={todo.completed}

onChange={()=>toggleComplete(todo.id)}

/>



{

editingId === todo.id ?

(

<>

<input

value={editText}

onChange={(e)=>setEditText(e.target.value)}

/>


<button onClick={saveEdit}>
Save
</button>


</>

)

:

(

<>

<h3>

{
todo.completed ? "Completed: " : "Pending: "
}

{todo.text}

</h3>


<button

onClick={()=>startEdit(todo)}

>
Edit
</button>

</>

)

}



<button

onClick={()=>deleteTask(todo.id)}

>
Delete
</button>


</div>

)

}


export default TodoItem;