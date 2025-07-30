const numbers = [1, 2, 3, 4];
let obj = {
    name : "hamza",
    age : 49
}
console.log(String(numbers));

let a = JSON.stringify(numbers)
console.log(a);
console.log(JSON.parse(a));

let b = JSON.stringify(obj)
console.log(b);
console.log(JSON.parse(b));