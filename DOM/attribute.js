const greet = document.getElementById("greet")
const kwikdocs = document.getElementById("kwikdocs")
const btn = document.getElementById("btn")
const name1 = document.getElementById("name1")
console.log(greet.getAttribute("id"));
console.log(kwikdocs.getAttribute("href"));

if (btn.hasAttribute("hidden")) {
    console.log("button has attribute hidden");
}
btn.removeAttribute("hidden")

if (btn.hasAttribute("hidden")) {
    console.log("button has attribute hidden");
} else {
    console.log("button has not attribute hidden");
}

// name1.setAttribute("type","range")
name1.type = 'range'
console.log();