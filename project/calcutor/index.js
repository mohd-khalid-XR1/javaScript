const digits = Array.from(document.getElementsByClassName("digit"))
const display = document.querySelector(".display")
const evaluate = document.querySelector(".evaluate")
console.log(digits);

digits.forEach((digit) => {
    digit.addEventListener("click", appendValue)
})

evaluate.addEventListener("click", function (e) {
    console.log(display.value);
    const output = Function(`return ${display.value}`)
    display.value = output()
    // console.log("calculate");
})

let arr = ['*', "/", "+", "-", "."]

function appendValue(e) {
    const digit = e.target.textContent
    let displayValue = display.value
    let lastDigit = displayValue.charAt(displayValue.length - 1)
    // console.log(lastDigit);

    if (arr.includes(lastDigit)) {
        if (arr.includes(digit)) {
            return
        } else {
            display.value += digit
        }
    } else {
        display.value += digit
    }

}

