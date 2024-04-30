const interfaceElements = document.querySelectorAll('.hoveryellow')

function updateChoices() {
	console.log(this.innerText)
}

interfaceElements.forEach(element => {
	element.addEventListener('click', updateChoices)
})

function goBack() {
	window.history.back();
}
function returnHome() {
	window.location.href = 'index.html';
}
