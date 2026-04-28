const taskForm = document.getElementById("taskForm");
const taskNameInput = document.getElementById("taskName");
const prioritySelect = document.getElementById("priority");
const importantCheckbox = document.getElementById("important");
const completeCheckbox = document.getElementById("completed");
const taskManagerDiv = document.getElementById("taskmanager");
const submitBtn = document.getElementById("submitBtn");

let tasks = [];
let editTaskId = null;

function formatDate(date0bj) {
    return date0bj.toLocaleDateString() + " " + date0bj.toLocaleTimeString();
}

function logTasks() {
    console.log(JSON.stringify(tasks));
}

function renderTasks() {
    if (tasks.length === 0) {
        taskManagerDiv.innerHTML = '<p class="empty-message">No tasks added yet.</p>';
        return;
    }

    let taskHTML = "";

    tasks.forEach((task) => {
        taskHTML += `
      <div class="task" id="task-${task.id}">
        <div dlass="task-header">
          <div>
            <p class="task-name" id="name-${task.id}">${task.name}</p>
            <p class="task-meta">Priority: ${task.priority}</p>
            <p class="task-meta">Date Added: ${task.date}</p>
            <p class="task-meta">
              Important: ${task.isImportant ? "Yes" : "No"} |
              Completed: ${task.isCompleted ? "Yes" : "No"}
            </p>
          </div>
          <div class="task-buttons">
            <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
            <button class="complete-btn" onclick="toggleComplete(${task.id})">
              ${task.isCompleted ? "Undo" : "Complete"}
            </button>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>  
          </div>
        </div>
      </div>      
    `;
  });

  taskManagerDiv.innerHTML = taskHTML;

  tasks.forEach((task) => {
    const taskCard = document.getElementById(`task-${task.id}`);
    const taskName = document.getElementById(`name-${task.id}`);

    if (task.priority === "High") {
        taskCard.style.borderLeftColor = "#d9534f";
    }   else if (task.priority === "Medium") {
        taskCard.style.borderLeftColor = "#f0ad4e";
    }   else {
        taskCard.style.borderLeftColor = "#5bc0de";
    }

    if (task.isImportant) {
        taskName.style.color = "red";
    }   else {
        taskName.style.color = "#222222";
    }

    if (task.isCompleted) {
        taskName.style.textDecoration = "Line-through";
    }   else {
        taskName.style.textDecoration = "none";
    }
  });
}

function resetForm() {
    taskForm.reset();
    prioritySelect.value = "Medium";
    editTaskId = null;
    submitBtn.textContent = "Add Task";
}

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskName = taskNameInput.value.trim();
    const priority = prioritySelect.value;
    const isImportant = importantCheckbox.checked;
    const isCompleted = completeCheckbox.checked;

    if (taskName === "") {
        alert("Please enter a task name.");
        return;
    }

    if (editTaskId === null) {
        const newTask = {
            id: Date.now(),
            name: taskName,
            priority: priority,
            isImportant: isImportant,
            isCompleted: isCompleted,
            date: formatDate(new Date())
        };

        tasks.push(newTask);
    }   else {
        const taskToUpdate = tasks.find((task) => task.id === editTaskId);

        if (taskToUpdate) {
            taskToUpdate.name = taskName;
            taskToUpdate.priority = priority;
            taskToUpdate.isImportant = isImportant;
            taskToUpdate.isCompleted = isCompleted;
        }
    }

    renderTasks();
    logTasks();
    resetForm();
});

function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    renderTasks();
    logTasks();
}

function toggleComplete(id) {
    const selectedTask = tasks.find((task) => task.id === id);

    if (selectedTask) {
        selectedTask.isCompleted = !selectedTask.isCompleted;
    }

    renderTasks();
    logTasks();
}

function editTask(id) {
    const selectedTask = tasks.find((task) => task.id === id);

    if (!selectedTask) {
        return;
    }

    taskNameInput.value = selectedTask.name;
    prioritySelect.value = selectedTask.priority;
    importantCheckbox.checked = selectedTask.isImportant;
    completeCheckbox.checked = selectedTask.isCompleted;

    editTaskId = id;
    submitBtn.textContent = "Update Task";
}

renderTasks();