//  ~/Desktop/code/toDoApp/toDoApp

// for each text box get query selector
// add event listener to each
// event listener blur?
// function runs on blur event
// different function for each one

// Name -> Not Empty and not longer than 20 characters
// Description -> Not Empty and longer than 20 characters
// AssignedTo -> Not Empty and not longer than 20 characters


let nameBox = document.getElementById("name")
nameBox.addEventListener('blur', function(){checkNames(nameBox.value)})
let assignedBox = document.getElementById("assignedTo")
assignedBox.addEventListener('blur', function (){checkNames(assignedBox.value)})
function checkNames(valueToCheck){
    console.log(valueToCheck)
  if (valueToCheck == "") {
    alert("Must be filled out")
    console.log("hello")
    return false
  } else if (valueToCheck.length > 20){
    alert("Must be less than 20 characters!")
    return false
  }
  console.log("hello again")
}

let descriptionBox = document.getElementById("description")
descriptionBox.addEventListener('blur', function (){checkDescription(descriptionBox.value)})
function checkDescription(valueToCheck){
    if (valueToCheck == "") {
        alert("Must be filled out")
        console.log("hello")
        return false
    } else if (valueToCheck.length < 20){
        alert("Must be more than 20 characters!")
        return false
    }
}

// do the date picker thing and check that its not null or longer thaan 9 
// add bootstrap to make the validations look nicer

// task object
class Task {
  constructor(id, name, description, assignedTo, date, status){
    this.id = id;
    this.name = name;
    this.description = description;
    this.assignedTo = assignedTo;
    this.date = date;
    this.status = status
  }
}

// task manager class
class TaskManager {

  constructor(){
    this.tasks = {
      id: 0
    }

  }

    getAllTasks(){
      let space = document.querySelector("#cardRow")
      space.innerHTML = ""
      let tasks = this.tasks
      for (let i in tasks){
        if (typeof(tasks[i]) == "object"){
          space.innerHTML += this.displayTasks(tasks[i])
        }
      }
    }

    displayTasks(taskObject){
      // display function to input data onto innerhtml 
      // create an empty card
      // query select the card and add text 
      return `<div class="col-md-4 col-12">
      <div class="card shadow-sm">
          <div class="card-header">
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${taskObject.name}</li>
            <li class="list-group-item">Description: ${taskObject.description}</li>
            <li class="list-group-item">Assigned To: ${taskObject.assignedTo}</li>
            <li class="list-group-item">Date: ${taskObject.date}</li>
            <li class="list-group-item">Status: ${taskObject.status}</li>
            <button type="button" onClick="allThePower.deleteTask(${taskObject.id})" class="btn btn-danger btn-block">Delete Task</button>
          </ul>
        </div> 
  </div>`
    }

    addTask(){
      let id = this.tasks.id
      let name = document.querySelector("#name").value
      let description = document.querySelector("#description").value
      let assignedTo = document.querySelector("#assignedTo").value
      let date = document.querySelector("#date").value
      let status = document.querySelector("#progressDropdown").value
      // get passed a value from form
      // get info from the query selector

      let task = new Task(id, name, description, assignedTo, date, status)
      this.tasks[this.tasks.id] = task
      id ++
      this.tasks.id = id

      this.getAllTasks()
    }

    deleteTask(id){
      console.log(id)
      delete this.tasks[id]
      this.getAllTasks()
    }

    updateTask(taskId, status){

    }
}
let allThePower = new TaskManager()
allThePower.getAllTasks()
