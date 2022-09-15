import  {test}  from "./test.js";
import { homepage } from "./homepage.js";
import { card, createCard  } from "./taskcards.js";

let defaultTitle = "Project 1"
let defaultList =  new card("title", "description", "dueDate", "priority", "note", "tags")

 let projectList = [{title: defaultTitle, list: defaultList}]
// const task =  new Card()

// console.log(task)

console.log(defaultList)

homepage()
