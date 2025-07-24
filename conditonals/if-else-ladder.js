let score = 100

if (score >= 90 && score <= 100) {
    console.log("Your grade : A");
}
if (score >= 70 && score <= 89) {
    console.log("Your grade : B");
}
if (score >= 50 && score <= 69) {
    console.log("Your grade : C");
}
if (score >= 33 && score <= 49) {
    console.log("Your grade : D");
}
if (score >= 0 && score <= 32) {
    console.log("Fail");
}

// if else ladder 

if (score >= 90 && score <= 100) { // in if-else , condition is true then further if-else will stop including else
    console.log("Your grade : A");
} else if (score >= 70 && score <= 89) {
    console.log("Your grade : B");
} else if (score >= 50 && score <= 69) {
    console.log("Your grade : C");
} else if (score >= 33 && score <= 49) {
    console.log("Your grade : D");
} else if (score >= 0 && score <= 32) {
    console.log("Fail");
} else{
    console.log("You score is incorrect");
}

