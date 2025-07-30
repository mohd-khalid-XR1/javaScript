const form = document.getElementById("form")
const form_input = document.getElementById("form_input")
const form_ol = document.getElementById("form_ol")

// console.log(form, form_input, form_ol);

let todoArray = []

form.addEventListener("submit", function (e) { // e is event object (object)
    e.preventDefault();
    // console.log(e);
    // console.log("form submitted");
    // console.log(form_input.value);
    const value = form_input.value
    todoArray.push(value)
    form_input.value = ''
    console.log(todoArray);
    // form_ol.innerHTML = form_ol.innerHTML + `<li>${value}</li>`
    makeTodoList()
})


function makeTodoList() {
    form_ol.innerHTML = ''
    todoArray.forEach(function (element, index) {
        form_ol.innerHTML = form_ol.innerHTML + `<li>${index + 1}. ${element}</li>`
    })
    console.log(form_ol.innerHTML);
}