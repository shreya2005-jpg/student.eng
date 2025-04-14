document.getElementById("todoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let taskInput = document.getElementById("task").value.trim();
    let priorityInput = document.getElementById("priority").value;

    if (taskInput === "") {
        alert("Please enter a task.");
        return;
    }

    let todoList = document.getElementById("todoList");
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item", priorityInput.toLowerCase());
    listItem.textContent = `${taskInput} (${priorityInput})`;

    // Sort tasks based on priority
    let tasks = [...todoList.children];
    let inserted = false;

    for (let i = 0; i < tasks.length; i++) {
        if (priorityInput === "High" && !tasks[i].classList.contains("high")) {
            todoList.insertBefore(listItem, tasks[i]);
            inserted = true;
            break;
        } else if (priorityInput === "Medium" && tasks[i].classList.contains("low")) {
            todoList.insertBefore(listItem, tasks[i]);
            inserted = true;
            break;
        }
    }

    if (!inserted) {
        todoList.appendChild(listItem);
    }

    document.getElementById("todoForm").reset();
});