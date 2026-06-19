function TodoInput({ addTask , input , setInput }) {
    return (
        <div className="todo-input">
            <input 
                type="text" 
                placeholder="Add a new task" 
                id="new-task" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        addTask();
                    }
                }}
            />
            <button onClick={addTask}>Add</button>
        </div>
    );
}

export default TodoInput;