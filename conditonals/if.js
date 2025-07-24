let age = 15;

// if (boolean) {
//     code.....
// }

if (age >= 18) {
    console.log("You can vote");
    console.log("hhhh");
}

if (age < 18) {
    console.log("You cannot vote");
}


// more scenerio 

let isVoterID = true;

if (age >= 18 && isVoterID === true) {
    console.log("You can vote");
}
if (age >= 18 && isVoterID === false) {
    console.log("You cannot vote. You don't have voter id");
}
if (age < 18 && (isVoterID === false || isVoterID === true)) {
    console.log("You cannot vote. Your age is less than 18 & You don't have voter id");
}

