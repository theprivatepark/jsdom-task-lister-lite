document.addEventListener("DOMContentLoaded", () => {
  getForm();
});

function getForm() {
 let form = document.querySelector("#create-task-form")
 let select = document.createElement("select");
  select.setAttribute("id", "priority")
 let option1 = document.createElement("option");
  option1.text = "red";
 let option2 = document.createElement("option");
  option2.text = "yellow"
 let option3 = document.createElement("option");
  option3.text = "green"
  select.append(option1, option2, option3);
  form.append(select)
 form.addEventListener("submit", newEvent)
 
}

function newEvent(event) {
  event.preventDefault();
  let description = document.querySelector("#new-task-description").value;
  let priority = document.querySelector("#priority").value;
  console.log(priority)
  addToList(description, priority);
}

function addToList(description, priority) {
  let myList = document.querySelector("#tasks")
  let li = document.createElement("li")
  li.innerText = description
  li.setAttribute("id", "list-item");
  let button = document.createElement("button");
  button.innerText = "Delete"
  if (priority == "red") {
    li.style.color = "red";
  }
  else if (priority == "yellow") {
    li.style.color = "yellow";
  }
  else {
    li.style.color = "green";
  }
  li.appendChild(button);
  myList.appendChild(li)
  li.addEventListener("click", deleteItem)
}

function deleteItem(event) {
  let listItem = document.querySelector("#tasks")
  listItem.removeChild(event.currentTarget)
}
