function uploadFromLocalStorage() {
	var ul = document.getElementById("done-tasks");
	var li = null;
	var input = null;	
	var storedTasks = Object.keys(localStorage);
	var task = null;

	for(var i = 0, length = storedTasks.length; i < length; ++i) {
		task = JSON.parse(localStorage[storedTasks[i]]);
		if(storedTasks[i] != "taskNumber" && task.checked) {
			li = document.createElement("li");
			input = document.createElement("input");

			li.setAttribute("id", storedTasks[i]);
			input.setAttribute("type", "checkbox");

			li.setAttribute("class", "checked");

			li.appendChild(input);
			li.appendChild(document.createTextNode(task.taskText));
			ul.appendChild(li);
		}
	}
}

function clearList() {
	var doneTasks = document.getElementById("done-tasks").
						getElementsByTagName("li");
		for(var i = 0, length = doneTasks.length; i < length; ++i) {
			if(doneTasks[i].firstChild.checked) {
				localStorage.removeItem(doneTasks[i].id);
			}
	}
	window.location.reload();
}