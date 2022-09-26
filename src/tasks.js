import {  card, createTask} from "./taskcards.js";

export function createProject() {
  let projectname = prompt("Enter Project name")
  let defaultTask = new card("Default", "This is a task", "Today", "High", "NA", "NA")

  return {title: projectname, tasks: defaultTask}
}