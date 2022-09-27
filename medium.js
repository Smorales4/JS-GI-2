const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function takeInput() {
	const inputNumber = prompt("Enter a number (1-12): ");

	if (inputNumber < 1 || inputNumber > 12) {
		alert("Ops! Invalid number!");
	} 

	else {
		console.log(inputNumber,"-", months[inputNumber - 1]);
	}
	takeInput();
}

takeInput();