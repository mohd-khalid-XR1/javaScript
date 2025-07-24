let data = 43


let result;

if (data) {
    result = data
} else {
    result = 'data is empty'
}
console.log(result);


result = data ? 'data is not empty' : "data is empty"  // condition ? value_if_true : value_if_false;
console.log(result);

// 

const isLogin = true
const isVerified = true
let output;

// if (isLogin && isVerified) {
//     console.log("You can delete post");
//     output = 'You can delete post'
// } else {
//     console.log("you cannot delete post");
//     output = "you cannot delete post"
// }

output = isLogin && isVerified ? "you can delete post" : "you cannot delete post"
console.log(output);