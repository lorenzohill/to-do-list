export function createProject() {
  let projectname = prompt("Enter Project name")
  return {title: projectname, tasks: null}
}