function printTable() {
    for (let i = 1; i <= 10; i++) {
        console.log('2 x', i, '=', 2 * i);
    }
}

// printTable()
// printTable() 

function printCustumTable(num, greet) {
    console.log(greet);
    console.log(num);
    for (let i = 1; i <= 10; i++) {
        console.log(num, 'x', i, '=', num * i);
    }
    
}

// printCustumTable(9, 'hello');


//  return 

function addNumbers(a, b) {
    const total = a + b
    return total // end
}

let t = addNumbers(5, 5)
console.log(t);


