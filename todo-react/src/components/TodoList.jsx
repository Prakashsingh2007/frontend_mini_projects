import TodoItem from "./TodoItem";


function TodoList({

todos,
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

{
todos.map((todo)=>(

<TodoItem

key={todo.id}

todo={todo}

deleteTask={deleteTask}

startEdit={startEdit}

saveEdit={saveEdit}

editingId={editingId}

editText={editText}

setEditText={setEditText}

toggleComplete={toggleComplete}

/>

))

}

</div>

)

}


export default TodoList;