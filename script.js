var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liListed = [];
var deleteButton = document.createElement("button");
deleteButton.innerText="DELETE";
var liIndex;

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
    createListElement()
    }
    checkliListed();
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && (event.code === "Enter" ||event.code ==="NumpadEnter")) {
        createListElement()
    }
    checkliListed();
}

function checkliListed(){
    for (var i = 0; i<document.getElementsByTagName("li").length; i++){
        liListed[i] = document.getElementsByTagName("li")[i]; 
        liListed[i].addEventListener("click",toggleDone);
        liIndex = i;
    }    
}

function toggleDone(){
    console.log("toggle Done" + liIndex);

}

checkliListed();


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
