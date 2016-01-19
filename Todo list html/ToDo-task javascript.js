var taskNumber = ("taskNumber" in localStorage) ? localStorage.taskNumber : 0;

function addTask() {
	var ul = document.getElementById("todo-tasks");
	var li = document.createElement("li");
	var input = document.createElement("input");
	var taskText = document.getElementById("task-to-add").value;

	document.getElementById("task-to-add").value = "";
	if(taskText == "") {
		alert("Warning: You left the Add Task empty");
		return true;
	}

	li.setAttribute("id", "task" + taskNumber++);

	input.setAttribute("type", "checkbox");

	li.appendChild(input);
	li.appendChild(document.createTextNode(taskText));

	ul.appendChild(li);
	localStorage[li.id] = JSON.stringify({checked: false, taskText: taskText});

	//Updating the task number
	localStorage.taskNumber = taskNumber;

	return false;
}

function getTaskText(_element) {
	var elementText = _element.innerHTML.split('>');
	return elementText.splice(1, 1);
}

function uploadFromLocalStorage() {
	var ul = document.getElementById("todo-tasks");
	var li = null;
	var input = null;	
	var storedTasks = Object.keys(localStorage);
	var task = null;

	for(var i = 0, length = storedTasks.length; i < length; ++i) {
		task = JSON.parse(localStorage[storedTasks[i]]);
		if(storedTasks[i] != "taskNumber" && !task.checked) {
			li = document.createElement("li");
			input = document.createElement("input");

			li.setAttribute("id", storedTasks[i]);
			input.setAttribute("type", "checkbox");
			li.appendChild(input);
			li.appendChild(document.createTextNode(task.taskText));
			ul.appendChild(li);
		}
	}
}
