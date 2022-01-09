var tasksToDoEl = document.querySelector("#tasks-to-do");
var formEL = document.querySelector("#task-form");


var createTaskHandler = function(event) {
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  };
  
formEL.addEventListener("submit", createTaskHandler);