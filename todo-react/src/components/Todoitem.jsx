function Todoitem({ task, index, deleteTask, toggleTaskCompletion }) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
            />
            <span className={task.completed ? "completed" : ""}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
    );
}

export default Todoitem;