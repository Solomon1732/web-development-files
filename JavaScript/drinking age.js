var age = Number(prompt('Enter your age:'));
if(age < 21) {
	alert("You shouldn't be drinking (you'r underage), but you probably won't be listening to me anyway")
} else if (age === 21) {
	alert('DRINKING TIME!! LET\'S PARTY!!');
	alert('\nYou DO have a designated driver though, right?');
} else {
	alert('You\'ve probably been drinking for a while.');
	alert('Please don\'t drive while under the influence of alcohol.');
}