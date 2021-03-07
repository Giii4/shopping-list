let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
let buttonDelete = document.querySelectorAll(".delete")


function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	let btn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	btn.appendChild(document.createTextNode('Delete'))

	btn.classList.add("delete");
	ul.appendChild(li);
	li.appendChild(btn);
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


// Cut List Item
li.forEach(li => {
	li.addEventListener("click", function() {
	  li.classList.toggle("done")
    })
})

// Delete Button
buttonDelete.forEach(btn => {
	btn.addEventListener("click", function() {
		btn.parentElement.remove();
	})
})