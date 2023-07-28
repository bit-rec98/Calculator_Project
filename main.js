// ARITHMETICAL OPERATORS and FUNCTIONS

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    document.getElementById("output").innerHTML = "Let's calculate!";
})

const parentheses = document.getElementById("parentheses");
parentheses.addEventListener("click", () => {
    document.getElementById("output").innerHTML = "()";
})

const percentage = document.getElementById("percentage");
percentage.addEventListener("click", () => {
    document.getElementById("output").innerHTML = "%";
})
const divide = document.getElementById("divide");
divide.addEventListener("click", () => {
    document.getElementById("output").innerHTML = "/";
})
const multiply = document.getElementById("multiply");
multiply.addEventListener("click", () => {
    document.getElementById("output").innerHTML = "*";
})
const substract = document.getElementById("substract");
substract.addEventListener("click", () => {
    document.getElementById("output").innerHTML = "-";
})
const addition = document.getElementById("addition");
addition.addEventListener("click", () => {
    document.getElementById("output").innerHTML = "+";
})

const equal = document.getElementById("equal");
equal.addEventListener("click", () => {
    console.log("Show results");
})

const decimalBtn = document.getElementById("decimal");
decimal.addEventListener("click", () => {
    document.getElementById("output").innerHTML = ".";
})
// NUMBERS
const zero = document.getElementById("zero");
zero.addEventListener("click", () => {
    document.getElementById("output").innerHTML = "0";
})
const nine = document.getElementById("nine");
nine.addEventListener("click", () => {
    document.getElementById("output").innerHTML = "9";
})
const eight = document.getElementById("eight");
eight.addEventListener("click", () => {
    document.getElementById("output").innerHTML = "8";
})

const seven = document.getElementById("seven");
seven.addEventListener("click", () => {
    document.getElementById("output").innerHTML = "7";
})

const six = document.getElementById("six");
six.addEventListener("click", () => {
    document.getElementById("output").innerHTML = "6";
})

const five = document.getElementById("five");
five.addEventListener("click", () => {
    document.getElementById("output").innerHTML = "5";
})

const four = document.getElementById("four")
four.addEventListener("click", () => {
    document.getElementById("output").innerHTML = "4";
})

const three = document.getElementById("three")
three.addEventListener("click", () => {
    document.getElementById("output").innerHTML = "3";
})

const two = document.getElementById("two")
two.addEventListener("click", () => {
    document.getElementById("output").innerHTML = "2";
})

const one = document.getElementById("one")
one.addEventListener("click", () => {
    document.getElementById("output").innerHTML = "1";
})

// OUTPUT
const output = document.getElementById("output");
