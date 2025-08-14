const greet = document.getElementById("greet")
const para = document.querySelector("#para")
const name1 = document.getElementById("name1")
const btn = document.getElementById("btn")
const toggle_theme = document.getElementById("toggle_theme")
const section = document.getElementById("section")
// greet.style.color = 'red'
// greet.style.backgroundColor = 'violet'
// greet.style.margin = '0px'


btn.onclick = function (e) {
    // name1.className = 'input-style'
    name1.classList.add("input-style")
    name1.classList.add("next")
    name1.classList.remove("previous")
    console.log(name1.classList.contains("previous"))
    console.log(name1.classList.contains("next"))
}

toggle_theme.onclick = function (e) {
    section.classList.toggle("darkmode")
}
