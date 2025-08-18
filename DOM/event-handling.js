const btn = document.getElementById('btn')
const greet = document.getElementById("greet")



////////////////////////////////////////////////////////////////////////

const field = document.getElementById("field")

// document.onkeydown = function(e){
//     console.log("keydown",e.key);
// }

// field.addEventListener("keydown",(e)=>{
//     console.log("keydown field",e.key);
// })

// field.addEventListener("keyup",(e)=>{
//     console.log("keyup field",e.key);
// })

field.oninput = function (e) {
    console.log(e.target.value);
}

field.onfocus = function (e) {
    console.log("Focues");
}

field.addEventListener("blur", (e) => {
    console.log("not focus");
})

document.ondblclick = () => {
    console.log('double');
}