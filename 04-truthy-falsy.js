if (null) {
    console.log("null");
} else if (undefined) {
    console.log("Undefined");
} else if ('hello') {
    console.log("hello");
} else {
    console.log("null is falsy");
}

const data = 'hamza@gmail.com'

if (data) console.log(data);
else console.log("email is empty");


// 
console.log("------------------------------------------");

if (!false) console.log("Falsy: false");
if (!0) console.log("Falsy: 0");
if (!"") console.log("Falsy: empty string");
if (!null) console.log("Falsy: null");
if (!undefined) console.log("Falsy: undefined");
if (!NaN) console.log("Falsy: NaN");



if (true) console.log("Truthy: true");
if (1) console.log("Truthy: 1");
if ("hello") console.log("Truthy: non-empty string");
if ({}) console.log("Truthy: empty object");
if ([]) console.log("Truthy: empty array");