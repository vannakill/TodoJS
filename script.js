const input = document.getElementById("task-name")
input.value = ""
const todo = document.getElementById("todo-task")
const done = document.getElementById("finished")
let themeSwitch = document.getElementById("themeSwitcher")
themeSwitch.checked = false

function main(taskcontainer, text, radio, deleteButton,){
  taskcontainer= document.createElement("div")
  taskcontainer.className = "task-container"
  
  text = document.createElement("li")
  text.innerText = input.value 
  text.style.textDecoration = "none" 

  radio = document.createElement("input")
  radio.setAttribute('type','checkbox')
  radio.onchange = function(){
    if(radio.checked){
      done.appendChild(taskcontainer)
      taskcontainer.appendChild(radio)
      taskcontainer.appendChild(text)
      taskcontainer.appendChild(deleteButton)
      text.style.textDecoration = "line-through" 
    }
    else{
      todo.appendChild(taskcontainer)
      taskcontainer.appendChild(radio)
      taskcontainer.appendChild(text)
      taskcontainer.appendChild(deleteButton)
      text.style.textDecoration = "none" 
    }
  }
    deleteButton = document.createElement("button") 
    deleteButton.className = "delete"
    deleteButton.setAttribute('id','deleteButton')
    
    deleteButton.onclick = function(){
      taskcontainer.remove()
    } 
    
    todo.appendChild(taskcontainer)
    taskcontainer.appendChild(radio)
    taskcontainer.appendChild(text)
    taskcontainer.appendChild(deleteButton)
    input.value = ""
  }

  function darkTheme(body,deleteButton){
    body = document.querySelector('body')
    header = document.querySelector('header')
    deleteButton = document.getElementById('deleteButton') 
    if(themeSwitch.checked){
      body.className = "dark-body"
      input.className = "dark-input"
      header.className = "header-dark"
      deleteButton.setAttribute('class', 'delete-dark')
    }
    else{
      body.className = ""
      input.className = ""
      header.className = ""
      deleteButton.setAttribute('class', 'delete')
    }
  }
