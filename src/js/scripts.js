// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

console.log('Hello')

document.getElementById('nextPageButton').onclick = function () {
	window.location.href = 'Q1.html'
};

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('goSpecific').onclick = function () {
		window.location.href = 'specificMenu.html';
	};
});


function goBack() {
	window.history.back();
};
function returnHome() {
	window.location.href = 'index.html';
};
