import {  } from "./helperfunctions.js";
import { card  } from "./taskcards.js";

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

  let projectCard = document.createElement("div")
  let projectTitle = document.createElement("p")

  projectCard.classList.add("project-card")
  projectTitle.innerText = "Project 1"

  projectCard.appendChild(projectTitle)

  sidebar.appendChild(projectCard)
  
  screen.appendChild(sidebar)
  screen.appendChild(mainWindow)
  mainWindow.appendChild(header)
  mainWindow.appendChild(cardContainer)
}