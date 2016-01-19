function changeColorWhenChecked(){
	var ul = document.getElementById("all-tasks");
	var taskList = ul.getElementsByTagName("input");
	var taskText = null;

	for(var i = 0, len = taskList.length; i < len; ++i) {
		if(taskList[i].checked) {
			taskList[i].parentNode.style.color = "red";
			taskText = getTaskText(taskList[i].parentNode);
			localStorage[taskList[i].parentNode.id] =
				JSON.stringify({checked: true, taskText: taskText});
		} else {
			taskList[i].parentNode.style.color = "green";
			taskText = getTaskText(taskList[i].parentNode);
			localStorage[taskList[i].parentNode.id] =
				JSON.stringify({checked: false, taskText: taskText});
		}
	}

	window.location.reload();
}

function getTaskText(_element) {
	var elementText = _element.innerHTML.split('>');
				return elementText.splice(1, 1);
}

function uploadFromLocalStorage() {
	var ul = document.getElementById("all-tasks");//null;
	var li = null;
	var input = null;
	var storedTasks = Object.keys(localStorage);
	var task = null;

	for(var i = 0, length = storedTasks.length; i < length; ++i) {
		task = JSON.parse(localStorage[storedTasks[i]]);
		if(storedTasks[i] != "taskNumber") {
			li = document.createElement("li");
			input = document.createElement("input");

			li.setAttribute("id", storedTasks[i]);
			if(task.checked) {
				li.setAttribute("class", "checked");
				input.checked = true;
			}
			input.setAttribute("type", "checkbox");
			li.appendChild(input);
			li.appendChild(document.createTextNode(task.taskText));
			ul.appendChild(li);
		}
	}
}