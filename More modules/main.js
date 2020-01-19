const {add} = require("./calculator") // Using destructuring to extract the "add" property and assign its value to the add variable.
const test = require("./calculator") // This returns an object

const {operations: {add: addNumbers}} = require("./calculator")

console.log(addNumbers)



const {calculate} = test

let numbers = [1, 2, 3, 4, 5]

console.log(test.secondTest(numbers))

console.log(calculate(add, numbers))



