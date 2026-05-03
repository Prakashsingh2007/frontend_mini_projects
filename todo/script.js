let currentfilter = "all";
let tasks = [];
let searchQuery = "";

function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();

    if (text === '') return;

    tasks.push({
        text: text,
        completed: false
    });
    input.value = '';
    updateUI();
}


function deleteTask(index) {
    tasks.splice(index, 1);
    updateUI();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateUI();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    updateUI();
}

function renderTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';

    let visibleCount = 0;

    tasks.forEach((task, index) => {

        const statusMatch =
            (currentfilter === "all") ||
            (currentfilter === "completed" && task.completed) ||
            (currentfilter === "pending" && !task.completed);

        const searchMatch = task.text.toLowerCase().includes(searchQuery);

        if (!statusMatch || !searchMatch) return;

        visibleCount++;

        const li = document.createElement('li');
        li.classList.toggle('done', task.completed);

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text;
        li.appendChild(span);

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = task.completed ? "Uncomplete" : "Complete";
        toggleBtn.onclick = () => toggleTask(index);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteTask(index);
        
        li.appendChild(toggleBtn);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
    
    if (visibleCount === 0) {
        const li = document.createElement('li');
        li.textContent = "No tasks to show.";
        li.style.textAlign = "center";
        li.style.color = "#888";
        list.appendChild(li);
    }
}


document.getElementById("allBtn").addEventListener("click", () => {
    currentfilter = "all";
    renderTasks();
});
document.getElementById("completedBtn").addEventListener("click", () => {
    currentfilter = "completed";
    renderTasks();
});
document.getElementById("pendingBtn").addEventListener("click", () => {
    currentfilter = "pending";
    renderTasks();
});
document.getElementById("addTask").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

document.getElementById("searchInput").addEventListener("input", function (event) {
    searchQuery = event.target.value.toLowerCase();
    renderTasks();
});
loadTasks();
updateCounts();

function updateCounts() {
    let total = tasks.length;
    let completed = tasks.filter(task => task.completed).length;
    let pending = total - completed;

    document.getElementById("totalCount").textContent = `Total Tasks: ${total}`;
    document.getElementById("completedCount").textContent = `Completed Tasks: ${completed}`;
    document.getElementById("pendingCount").textContent = `Pending Tasks: ${pending}`;
}

function updateUI() {
    renderTasks();
    updateCounts();
    saveTasks();
}