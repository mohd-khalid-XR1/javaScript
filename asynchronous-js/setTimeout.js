console.log("first");
// for (let i = 0; i < 2000000000; i++) {
//     i = i * 1
// }
const x = setTimeout(function () {
    console.log("wait 3 sec");
}, 3000)

setTimeout(function () {
    clearTimeout(x)
}, 2000)


console.log("third");