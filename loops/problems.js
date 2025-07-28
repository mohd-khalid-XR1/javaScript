// 2
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("even", i);
    } else {
        console.log('odd', i);
    }
}

// 3 

let sum = 0;
for(let i = 1 ; i <= 2 ; ++i){
    // console.log(i);
    sum = sum + i
    // console.log(sum);
}
console.log(sum);

// 
console.log('-------------------------------');
let totalOddCount = 0;
for(let i = 1; i<= 20 ; i++){
    if(i % 2 != 0){
        console.log(i);
        totalOddCount++
    }
}

console.log(totalOddCount);

