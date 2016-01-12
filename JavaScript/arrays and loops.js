var myList = ['apples', 'oranges', 'bananas'];

myList.forEach(function(value, index) {
	alert('I have ' + value + ' in my shopping bag');
});

var times = 0;

console.log('This is a while loop');
while (times < 10) {
	console.log('tried it', times);
	++times;
}

times = 0;

console.log('This is a do-while loop');
do{
	console.log('tried it', times);
	++times;
} while(times < 10);

console.log('This is a for loop');
for(var i = 0; i < 10; ++i) {
	console.log('tried it', i);
}

myList = ['Apples', 'Oranges', 'Bananas']
for(var i = 0; i < myList.length; ++i) {
	console.log('You have ' + myList[i] + ' in your bag');
}