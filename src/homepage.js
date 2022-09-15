import {  } from "./helperfunctions.js";
import { card  } from "./taskcards.js";
import {createProject} from "./tasks.js"
import { test } from "./test.js";

var projectArray = []

export function homepage() {
  let screen = document.createElement("div")
  
  let sidebar = document.createElement("aside")
  let mainWindow = document.createElement("div")
  let header = document.createElement("header")
  let cardContainer = document.createElement("div")

  screen.classList.add("screen")

  sidebar.classList.add("sidebar")
  mainWindow.classList.add("main-window")
  header.classList.add("project-header")
  cardContainer.classList.add("card-container")

  document.body.appendChild(screen)

  let sidebarHeader = document.createElement("div")
  sidebarHeader.classList.add("sidebar-header")

  let projects = document.createElement("h1")
  projects.innerText = "Projects"

  sidebar.appendChild(sidebarHeader)
  sidebarHeader.appendChild(projects)

  let projectCard = document.createElement("button")
  let projectTitle = document.createElement("p")

  projectCard.classList.add("project-card")
  projectTitle.innerText = "Add a New project"

  projectCard.appendChild(projectTitle)

  sidebar.appendChild(projectCard)
  
  screen.appendChild(sidebar)
  screen.appendChild(mainWindow)
  mainWindow.appendChild(header)
  mainWindow.appendChild(cardContainer)

  let newProjectBtn = document.querySelector("button")
  let testArray = []
  newProjectBtn.addEventListener("click", function(){
    console.log(projectArray.push(createProject()))
    updatePage()

  }) 
}

function updatePage() {

  projectArray.forEach(element => {
    let project = document.createElement("button")
    project.classList.add("project-card")
    project.innerText = element.title
    let push = document.querySelector(".sidebar")
    push.appendChild(project)
  });

}