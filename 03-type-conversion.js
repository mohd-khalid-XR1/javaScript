// type conversion , string ----> Number

let marks = '55.66' // 55.55flsdkjs fasdklf
console.log(marks);
console.log(typeof marks);

marks = Number(marks);

console.log(marks);
console.log(typeof marks);
console.log(marks >= 120);

// type conversion , Number ----> String

let mobileNo = String(483483939)
// mobileNo = String(mobileNo)
console.log(mobileNo);


// any dataType to Boolean 

// falsy values
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(-0n));
console.log(Boolean(""));
console.log(Boolean(false));

// rest truthy

console.log(Boolean(1));
console.log(Boolean("Hamza"));
console.log(Boolean({name:"hamza"}));