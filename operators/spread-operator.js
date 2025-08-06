let arr = [1, 2, 3]
let arr2 = [4, 5, 6]


let arr3 = [...arr, ...arr2]
console.log(arr3);

let obj1 = {
    name: "hamza",
    city: "xy"
}

let obj2 = {
    pincode: 393939,
    state: 'up'
}

let obj3 = { ...obj1, ...obj2 }
console.log(obj3);

console.log("-----------------------------");

let p = ['a', 'b', 'a']

let a = [1, 2, 3, ...p, ...arr3]
console.log(a);



console.log("-----------------------------");



let o = {
    a: 1,
    b: 2
}

let newObj = {
    h: 9,
    i: 0,
    ...o,
}

console.log(newObj);



console.log("----------------------------------------");

let result = { ...obj1, ...obj2 }
console.log(result);
const { name, city, pincode, state } = result  // destructuring
console.log(name, city, pincode, state);