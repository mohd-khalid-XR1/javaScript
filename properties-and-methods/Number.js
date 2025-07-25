// accessing Math(Object) Properties
const PI = Math.PI
console.log(PI);

// accessing Math(object) Methods


let a = -4.64
const result1 = Math.abs(a)
console.log(result1);

const result2 = Math.round(4.5)
console.log(result2);

// math.ceil()

const result3 = Math.ceil(5.01)
console.log(result3);

// math.floor()

const result4 = Math.floor(2.043)
console.log(result4);

// math.sqrt 

const result5 = Math.sqrt(2)
console.log(result5);

// math.pow 

const result6 = Math.pow(2, 3)
console.log(result6, 2 ** 3);

console.log("------------------------------------------------");
// math.random()

{
    let x = 11
    const randomNo = Math.random() // 0 to 0.9999999999999999
    console.log(randomNo * x);
    console.log(Math.floor(randomNo * x)); // generating no between 0 to 10 
}


let x = 6
const randomNo = Math.random() // 0 to 0.9999999999999999
console.log(randomNo * x);
console.log(Math.floor(randomNo * x) + 5); // generating no between 5 to 10
