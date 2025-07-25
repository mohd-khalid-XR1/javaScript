// string properties 

const username = "mohd hamza 453453 ";
console.log(username.length);

// string methods  ( no arguments )

let text1 = "Hello World!";
console.log(text1.toUpperCase());

let text2 = "Mohd Hamza";
console.log(text2.toLowerCase());

let text3 = "          Mohd Hamza        ";
console.log(text3.trim());

let text4 = "          Mohd Hamza        ";
console.log(text4.trimStart());

let text5 = "          Mohd Hamza        ";
console.log(text5.trimEnd());

// string methods (with arguments)

// 1) includes()

let message = "I am Mohd Hamza. This is my website.";
console.log(message.includes("website"));

let email = "hamzagmail.com"

if(email.includes("@")){
    console.log("valid");
}else{
    console.log("Invalid");
}


// 2) indexOf

message = "I am Mohd hamza. This is my website.";
console.log(message.indexOf("a"));
console.log(message.indexOf("Hamza"));

// 

const text = "apple banana apple";
console.log(text.replace("apple",'manogo'));
console.log(text.replaceAll("apple",'mango'));

