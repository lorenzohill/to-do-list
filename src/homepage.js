import {  } from "./helperfunctions.js";
import { card, createTask} from "./taskcards.js";
import {createProject} from "./tasks.js"
import { test } from "./test.js";

var projectArray = []

let activeProject = null

let screen = document.createElement("div")

let sidebar = document.createElement("aside")
let mainWindow = document.createElement("div")
let header = document.createElement("header")
let cardContainer = document.createElement("div")
let projectContainer = document.createElement("div")

let sidebarHeader = document.createElement("div")

let headerText = document.createElement("h1")

export function homepage() {

  screen.classList.add("screen")

  sidebar.classList.add("sidebar")
  mainWindow.classList.add("main-window")
  header.classList.add("project-header")
  cardContainer.classList.add("card-container")

  document.body.appendChild(screen)

  sidebarHeader.classList.add("sidebar-header")
  headerText.classList.add("header-text")

  let projects = document.createElement("h1")
  projects.innerText = "Projects"

  sidebar.appendChild(sidebarHeader)
  sidebarHeader.appendChild(projects)
  sidebar.appendChild(projectContainer)

  let projectCard = document.createElement("button")
  let projectTitle = document.createElement("p")

  projectCard.classList.add("project-card")
  projectTitle.innerText = "Add a New project"

  projectCard.appendChild(projectTitle)

  sidebar.appendChild(projectCard)
  

  header.appendChild(headerText)

  screen.appendChild(sidebar)
  screen.appendChild(mainWindow)
  mainWindow.appendChild(header)
  mainWindow.appendChild(cardContainer)

  let newProjectBtn = document.querySelector(".project-card")
  newProjectBtn.addEventListener("click", function(){
    let newProject = createProject()
    projectArray.push(newProject)
    updatePage()
    headerText.innerText= newProject.title

  }) 
}

function updatePage() {
  projectContainer.innerHTML = ""
  cardContainer.innerHTML = ""
  console.log(activeProject)

  projectArray.forEach(element => {
    let project = document.createElement("button")
    project.classList.add("project-card")
    project.innerText = element.title
    project.addEventListener("click", function(){
      let clear = document.querySelector(".project-card-add")
      if (clear) {
        clear.remove() 
      } 
      changeProject(element)
    })
    projectContainer.appendChild(project)
  });

}

function changeProject(ele) {
  headerText.innerText = ele.title
  activeProject = ele.title

  cardContainer.innerHTML = ""

  ele.tasks.forEach(ele => {
    cardContainer.append(ele)
  });

  let addTaskBtn = document.createElement("button")
  addTaskBtn.addEventListener("click", function(){
    let task = createTask()
    cardContainer.appendChild(task)
    ele.tasks.push(task)
    console.log(ele)
  })
  addTaskBtn.classList.add("project-card-add")
  addTaskBtn.innerText = "Add A Task"
  header.appendChild(addTaskBtn)


}

export {projectArray}