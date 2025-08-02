let second = 0;

const id = setInterval((function () {
    // console.log('this will run after every 1 second');
    second++
    console.log(second);
}), 1000)

setTimeout((function () {
    clearInterval(id)
}), 4000)