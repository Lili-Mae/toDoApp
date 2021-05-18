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





