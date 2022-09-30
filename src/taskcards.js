export function card(title, description, dueDate, priority, note, tags) {
  this.title = title
  this.description = description
  this.dueDate = dueDate
  this.priority = priority
  this.note = note
  this.tags = tags
}

export function createTask() {
  let title = prompt("title")
  let description = prompt("description")
  let dueDate = prompt("dueDate")
  let priority = prompt("priority")
  let tags = prompt("tags")
  let note = prompt("note")

  let newCard = document.createElement("div")
  newCard.classList.add("task-card")

  let titleText = document.createElement("h2")
  let descriptionText = document.createElement("p")
  let dueDateText = document.createElement("p")
  let priorityText = document.createElement("p")
  let tagsText = document.createElement("p")
  let noteText = document.createElement("p")

  titleText.innerText = "Title: " + title
  descriptionText.innerText = "Description: " + description
  dueDateText.innerText = "Due date: " + dueDate
  priorityText.innerText = "Priority: " +priority
  tagsText.innerText = "Tags: " + tags
  noteText.innerText = "Notes: " + note

  newCard.appendChild(titleText)
  newCard.appendChild(descriptionText)
  newCard.appendChild(dueDateText)
  newCard.appendChild(priorityText)
  newCard.appendChild(tagsText)
  newCard.appendChild(noteText)

  return newCard
}