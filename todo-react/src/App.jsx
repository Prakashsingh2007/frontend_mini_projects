import { useState , useEffect } from "react";
import TodoInput from "./components/Todoinput";
import TodoList from "./components/Todolist";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // New state for filter
  const [search, setSearch] = useState(""); // New state for search
  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "incomplete") {
      return !task.completed;
    }
    return true; // Show all tasks for "all" filter
  }).filter(task => task.text.toLowerCase().includes(search.toLowerCase())); // Filter by search query
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks,loading]);

  function addTask() {
    if (input.trim() === "") return;

    const newTask = {
      text: input,
      completed: false
    };

    setTasks([...tasks, newTask]); //  React update
    setInput(""); // clear input
  }
  function deleteTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }
  function toggleTaskCompletion(index) {

  const updatedTasks = tasks.map((task, i) => {

    if (i === index) {
      return {
        ...task,
        completed: !task.completed
      };
    }

    return task;

  });

  setTasks(updatedTasks);
}
const total = tasks.length;

const completed = tasks.filter(
  task => task.completed
).length;

const pending = total - completed;
  return (
    <div>
      <h1>Todo App</h1>

      <TodoInput 
        addTask={addTask} 
        input={input} 
        setInput={setInput} 
      />

      <TodoList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    

    
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("incomplete")}>Incomplete</button>
    

      <input 
        type="text"
        placeholder="Search tasks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>  
  );
}

export default App;