const greet = document.getElementById("greet")
const para = document.querySelector("#para")
const name1 = document.getElementById('name1')

console.log(greet);
console.log(name1);
console.log(name1.value);

greet.textContent = '<i>this is para</i>'
para.innerHTML = "<i>this is para</i>"
name1.value = 'fsdfsa'