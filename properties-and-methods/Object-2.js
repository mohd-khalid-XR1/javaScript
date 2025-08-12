const person = {
    "full name": 'Mohd hamza',
    address: {
        pincode: 303030,
        city: 'kareli',
        street: 'RBJ'
    }
}
let n = person["full name"]
// let name = person["name"]
console.log(n);

let a = person.address?.street

let b = person?.details?.fullName
console.log(b);


// console.log("Running code ....");


console.log('------------------------------------------------------------------');

let persons = {
    name: "Hamza",
    state: 'UP',
    pincode: 393939,
    city: "Allahabad",
    details: {
        height: 44,
    },
    getAddressInfo: () => {
        console.log(`
            state : ${this.state}
            pincode : ${this.pincode}
            city : ${this.city}
            height : ${this.details?.height}
        `);
        return "ABC"
    },
    getImportantInfo2: function () {
        console.log(`
            state : ${this.state}
            pincode : ${this.pincode}
            city : ${this.city}
            height : ${this.details.height}
            `);
    }
}

let result1 = persons.getAddressInfo()
// console.log(result1);
let result2 = persons.getImportantInfo2()
// console.log(result2);


