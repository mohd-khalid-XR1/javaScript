const btn = document.getElementById('btn')
const greet = document.getElementById("greet")

let flag = true;
btn.addEventListener("click", function () {
    // console.log("hello");
    if (flag) {
        greet.style.color = 'blue'
        greet.style.display = 'none'
        flag = false
    } else {
        greet.style.color = 'aqua'
        greet.style.display = 'block'
        greet.textContent = Math.random()
        flag = true
    }
})