import Todoitem from "./Todoitem";

function Todolist({ tasks, deleteTask, toggleTaskCompletion }) {
    return (
        <div className="todo-list">
            {tasks.map((task, index) => (
                <Todoitem
                    key={index}
                    task={task}
                    index={index}
                    deleteTask={deleteTask}
                    toggleTaskCompletion={toggleTaskCompletion}
                />
            ))}
        </div>
    );
}

export default Todolist;