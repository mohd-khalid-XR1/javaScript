
// access values

let person = {
  name: "Hamza",
  age: 14,
};

console.log(person);
console.log(person.age);
console.log(person.name);

// update 

person.name = "John"
console.log(person);

// add new property

person.mobileNo = 49349393939
console.log(person);

// deleting property 

delete person.mobileNo
delete person.age

console.log(person);