// AND &&

console.log(true && true && true); // ---> true
console.log(true && true && false); // ---> false
console.log(false && false && false); // --> false


const totalMarks = 300
const maths = 95
const science = 32
const hindi = 55
let obtainedMarks = maths + science + hindi
const passingMarks = 120;
console.log(obtainedMarks);
// 180 >= 120
let result = (obtainedMarks >= passingMarks) && (maths >= 33) && (science >= 33) && (hindi >= 33)

console.log(result);

// || 


console.log(true || true || true); // ---> true
console.log(true || true || false); // ---> true
console.log(false || false || false); // --> false

obtainedMarks = 20
result = (obtainedMarks >= passingMarks) || (maths >= 33) || (science >= 33) || (hindi >= 33)
console.log(result);


// ! 

console.log('result', !result);
console.log(!false, !true);

