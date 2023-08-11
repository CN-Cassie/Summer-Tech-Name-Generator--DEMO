let nameArray = ["Super", "Wonder", "The Great", "Amazing", "Strong", "Powerful", "Hulking", "Intelligent"];
let arrayLength = nameArray.length;

document.querySelector(".question-text").innerHTML = "What is your favorite number from 0 to " + (arrayLength-1);

let button = document.querySelector("button");

button.onclick = function() {
	let name = document.querySelector(".name").value;
    let favNum = document.querySelector(".favNum").value;
    let resultDisplay = document.querySelector(".result");
    resultDisplay.innerHTML = "Your superhero name is "+ nameArray[favNum] +" "+ name+ "!";
};