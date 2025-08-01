const form = document.getElementById("form")
const title = document.getElementById("title")
const content = document.getElementById("content")
const main = document.getElementById("main")
const btn = document.getElementById("btn")
let todoArray = []

// main.setAttribute("class","fsdljf")

const previousTodo = localStorage.getItem("todo")
const parsedObject = JSON.parse(previousTodo)

todoArray = parsedObject ? parsedObject : []
loopOnTodo()

let isUpdateTodo = false
let updatedTodoIndex;

form.addEventListener("submit", function (e) { // e is event object (object)
    e.preventDefault();
    if (isUpdateTodo) {
        updateTodo()
    } else {
        createTodo()
    }
})


function createTodo() {
    let _title_ = title.value
    let _content_ = content.value
    // console.log(_content_, _title_);

    const todoObject = {
        title: _title_,
        content: _content_,
        completed: false
    }
    todoArray.push(todoObject)

    localStorage.setItem("todo", JSON.stringify(todoArray))
    console.log(todoArray);
    title.value = ''
    content.value = ''
    loopOnTodo()
}

function loopOnTodo() {
    main.innerHTML = ''
    todoArray.forEach(function (element, index) {
        renderTodo(element, index)
    })
}

function renderTodo(element, index) {
    // console.log(element);
    const card = document.createElement("div")
    const card_title_trash_edit_div = document.createElement("div")
    const title_heading = document.createElement("h3")
    const trash = document.createElement("i")
    const edit = document.createElement("i")
    const para = document.createElement("p")


    title_heading.textContent = element.title
    para.textContent = element.content

    trash.addEventListener("click", function (e) {
        deleteTodo(e, index)
    })
    edit.onclick = function (e) {
        editTodo(e, index)
    }

    card.setAttribute("class", "card")
    edit.setAttribute("class", "fa-solid fa-pencil")
    trash.setAttribute("class", "fa-solid fa-trash")
    card_title_trash_edit_div.setAttribute("class", "card_title_trash_edit_div")


    card_title_trash_edit_div.append(title_heading, trash, edit)
    card.append(card_title_trash_edit_div, para)
    main.appendChild(card)
}

function deleteTodo(e, index) {
    console.log(index);
    todoArray.splice(index, 1)
    console.log(todoArray);
    localStorage.setItem("todo", JSON.stringify(todoArray))
    loopOnTodo()
}
function editTodo(e, index) {
    console.log(index);
    const todoToEdit = todoArray[index]
    console.log(todoToEdit);
    title.value = todoToEdit.title
    content.value = todoToEdit.content
    btn.textContent = 'update'
    isUpdateTodo = true
    updatedTodoIndex = index
}
function updateTodo() {

    console.log(updatedTodoIndex);
    const newTitle = title.value
    const newContent = content.value

    const previousValue = todoArray[updatedTodoIndex]

    // console.log(newContent,newTitle);

    const newTodoObject = {
        title: newTitle,
        content: newContent,
        completed: previousValue.completed
    }

    todoArray[updatedTodoIndex] = newTodoObject
    localStorage.setItem("todo", JSON.stringify(todoArray))
    title.value = ''
    content.value = ''

    loopOnTodo()
}
