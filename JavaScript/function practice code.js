var first = 0;
var second = 0;
var name = null;
var age = 0;

function ifLessThan20() {
	name = prompt('Enter name:');
	age = prompt('Enter age');
	if (age < 20) {
		return name + '!';
	} else {
		return name;
	}
}

function doesNothing() {
	return undefined;
}

alert(doesNothing());
alert(ifLessThan20());
alert(add());
alert(subtract());
alert(divide());
alert(multiply());

function add() {
	first = Number(prompt('Enter the first number:'));
	second = Number(prompt('Enter the second number:'));
	return first + second;
}

function subtract() {
	first = Number(prompt('Enter the first number:'));
	second = Number(prompt('Enter the second number:'));
	return first - second;
}

function multiply() {
	first = Number(prompt('Enter the first number:'));
	second = Number(prompt('Enter the second number:'));
	return first * second;
}

function divide() {
	first = Number(prompt('Enter the first number:'));
	second = Number(prompt('Enter the second number:'));
	if(0 === first && 0 === second) {
		return undefined;
	}
	return first / second;
}
