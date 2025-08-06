const theme_btn = document.getElementById("theme_btn")
const body = Array.from(document.getElementsByTagName("body"))
const heading = Array.from(document.getElementsByTagName("h1"))
const card_heading = document.querySelectorAll('.card div h3')
const card_p = document.querySelectorAll('.card p')
const sidebar_btn = document.getElementById("sidebar_btn")
const sidebar = document.getElementById("sidebar")
let theme_mode_dark = false

theme_btn.addEventListener("click", changeTheme)
sidebar_btn.addEventListener("click", toggleSidebar)

function changeTheme(e) {

    if (theme_mode_dark) {
        console.log(e.target);
        // console.log(theme_btn);
        console.log(body[0]);
        body[0].style.backgroundColor = 'white'
        console.log(heading);
        heading.forEach((h1) => {
            h1.style.color = 'black'
        })
        card_heading.forEach((h3) => {
            h3.style.color = 'black'
        })
        card_p.forEach((p) => {
            p.style.color = 'black'
        })
        theme_mode_dark = false
        theme_btn.textContent = 'Dark mode'
    } else {
        console.log(e.target);
        // console.log(theme_btn);
        console.log(body[0]);
        body[0].style.backgroundColor = '#1F1D1C'
        console.log(heading);
        heading.forEach((h1) => {
            h1.style.color = 'white'
        })
        card_heading.forEach((h3) => {
            h3.style.color = 'white'
        })
        card_p.forEach((p) => {
            p.style.color = 'white'
        })
        theme_btn.textContent = 'Day mode'
        theme_mode_dark = true
    }

}

let sidebar_toggle = false
function toggleSidebar(e) {
    if (sidebar_toggle) {
        sidebar.style.left = '0dvw'
        sidebar_toggle = false
    } else {
        sidebar.style.left = '-24dvw'
        sidebar_toggle = true
    }

}