$(document).ready(function() {
    loadTasks(); // Load stored tasks on page load

    $("#addTaskBtn").click(function() {
        let taskText = $("#taskInput").val().trim();
        if (taskText !== "") {
            addTask(taskText);
            $("#taskInput").val("");
        }
    });

    // Add task
    function addTask(taskText) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    }

    // Load tasks from localStorage
    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        $("#taskList").html(""); // Clear list
        tasks.forEach((task, index) => {
            $("#taskList").append(`
                <tr>
                    <td><input type="text" class="form-control task-edit" value="${task}" data-index="${index}"></td>
                    <td>
                        <button class="btn btn-warning editBtn" data-index="${index}">Edit</button>
                        <button class="btn btn-danger deleteBtn" data-index="${index}">Delete</button>
                    </td>
                </tr>
            `);
        });
    }

    // Edit task
    $(document).on("click", ".editBtn", function() {
        let index = $(this).data("index");
        let updatedTask = $(`.task-edit[data-index="${index}"]`).val();
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks[index] = updatedTask;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    });

    // Delete task
    $(document).on("click", ".deleteBtn", function() {
        let index = $(this).data("index");
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    });
});