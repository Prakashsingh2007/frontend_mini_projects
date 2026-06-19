import { useEffect, useState } from "react";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoApp() {
const [filter,setFilter]=useState("all");
const [input, setInput] = useState("");
const [todos, setTodos] = useState(() => {
const savedTodos = localStorage.getItem("todos");
return savedTodos ? JSON.parse(savedTodos) : [];
});
const [editingId, setEditingId] = useState(null);
const [editText, setEditText] = useState("");

const filteredTodos = todos.filter((todo) => {
if (filter === "completed") {
return todo.completed;
}

if (filter === "pending") {
return !todo.completed;
}

return true;
});

useEffect(() => {
localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

const addTask = () => {
if (input.trim() === "") {
return;
}

const newTodo = {
id: Date.now(),
text: input,
completed: false,
};

setTodos([...todos, newTodo]);
setInput("");
};

const deleteTask = (id) => {
setTodos(todos.filter((todo) => todo.id !== id));
};

const startEdit = (todo) => {
setEditingId(todo.id);
setEditText(todo.text);
};

const saveEdit = () => {
setTodos(
todos.map((todo) =>
todo.id === editingId
? { ...todo, text: editText }
: todo
)
);

setEditingId(null);
setEditText("");
};

const toggleComplete = (id) => {
setTodos(
todos.map((todo) =>
todo.id === id
? { ...todo, completed: !todo.completed }
: todo
)
);
};

return (
<div>
<div>
<button onClick={() => setFilter("all")}>All</button>
<button onClick={() => setFilter("completed")}>Completed</button>
<button onClick={() => setFilter("pending")}>Pending</button>
</div>

<TodoInput input={input} setInput={setInput} addTask={addTask} />

{filteredTodos.map((todo) => (
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
))}
</div>
);
}

export default TodoApp;