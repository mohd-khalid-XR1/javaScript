// pop method

let numbers = [1, 2, 3, 4];

// numbers.pop()
// console.log(numbers);

delete numbers[numbers.length - 1]
numbers.length = numbers.length - 1
console.log(numbers);


// push

numbers.push(5)
numbers.push('hamza', '3', 4)

console.log(numbers);


// shift 

let arr = ['i', 'am', 'hamza']
arr.shift()
console.log(arr);

// unshift 

let arr1 = ['i', 'am', 'hamza']

arr1.unshift("Hello", "hello")

console.log(arr1);

// concat 

let arr3 = [1, 2];
let arr2 = [3, 4];

let newArray = arr3.concat(arr2, ['haello', 'lll'])
console.log(newArray);

//  indexOf

let colors = ['red', 'pink', 'blue', 'green']
console.log(colors.indexOf('pink'));
console.log(colors.indexOf('brown'));

// includes 

let isExist = colors.includes('green')
console.log(isExist);
colors.reverse()

console.log(colors);

// slice 

let numbers1 = [1, 2, 3, 4, 5, 9, 0];
// slice(start?: number, end?: number):
let result = numbers1.slice(1, 4)
let result1 = numbers1.slice(2, numbers1.length)
console.log(result);
console.log(result1);

// splice 

// remove elements
let rollNo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 1/2 splice(starting index: number, deleteCount?: number):
rollNo.splice(2, 5)
console.log(rollNo);

// adding elements 

let numbers4 = [1, 4, 5];

numbers4.splice(1, 0, 2, 3)
console.log(numbers4);


// forEach

let fruits = ['apple', 'mang0', 'lichi', 'tomato', 'carrot']

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

fruits.forEach(function (element, index, arr) {
    console.log(element, index);
})


// findIndex

console.log("---------------------------------------");

const ar1 = ['apple', 'mango', 'banana', 'tomato']
const x = ar1.findIndex((element) => {
    if (element === 'mango') return true
})

console.log(x);

// map()

console.log("-------------------------------------------");

const array2 = [1, 2, 3, 4, 5, 6]
const result2 = array2.map((element, index, array) => {
    return element + 5
})
console.log(result2);

// filter()
console.log('----------------------------------------------------------------------');


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const resultFilter = num.filter((element, index, array) => {
    // console.log(`element = ${element} , index = ${index} , array = ${array}`);
    if (element < 5) return element
})

console.log(resultFilter);

console.log('---------------------------------------------------');


async function getProducts() {
    const response = await fetch(`https://dummyjson.com/products?limit=15`)
    const data = await response.json()
    console.log(data?.products);
    const productsArray = data?.products
    if (Array.isArray(productsArray)) {
        const result = productsArray.filter((product, index) => {
            if (product?.price <= 10) {
                return product
            }
        })
        console.log(result);
    }else{
        console.log("products is not array");
    }

}


getProducts()

