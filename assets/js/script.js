// Add Task variable declarations
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Add Task DOM function
var createTaskHandler = function(event){
    
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

// Add Task event listener
formEl.addEventListener("submit", createTaskHandler);

