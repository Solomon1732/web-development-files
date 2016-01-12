var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("mouseleave", function() {
	console.log("bye");
});

numOne.addEventListener("mouseenter", function() {
	console.log("hi");
});

numOne.addEventListener("click", function() {
	console.log("click!");
});
