var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liLists = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

// START new list items //

function createListElement() {
	//Create New List//
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	//Add toggle//
	li.addEventListener("click",function(){
		li.classList.toggle("done");
	}) 
	//Create delete button//
	var deleteButton = document.createElement("button");
        deleteButton.innerText="DELETE";
		li.appendChild(deleteButton);
	//Make delete button to work//
		deleteButton.addEventListener("click", function(){
		li.parentNode.removeChild(li);
	// //Check all lists again after press delete//
	// 	liLists = document.querySelectorAll("li");
	// 	console.log(liLists);
	})
	// //Check all lists again after create new list//
	// liLists = document.querySelectorAll("li");
	// console.log(liLists);
	//Clear input//
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
// END new list items //

// START existing list items //
function addToggle(liLists, i){
	liLists.addEventListener("click",function(){
		liLists.classList.toggle("done");
	}) 
}

function addDeleteButton(liLists, i){
	//Create delete button//
    var deleteButton = document.createElement("button");
        deleteButton.innerText="DELETE";
        liLists.appendChild(deleteButton);
	//Make delete button to work//
		deleteButton.addEventListener("click", function(){
		liLists.parentNode.removeChild(liLists);
	// //Check all lists again//
	// 	liLists = document.querySelectorAll("li");
	// 	console.log(liLists);
	})
}

liLists.forEach(addToggle);

liLists.forEach(addDeleteButton);

// END existing list items //

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);