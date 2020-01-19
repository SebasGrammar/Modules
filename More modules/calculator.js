// exports.add = (...args) => {args.reduce((currentTotal, nextValue) => currentTotal + nextValue)}
// exports.add = () => {[1, 2, 3].reduce((currentTotal, nextValue) => currentTotal + nextValue)}

// const add = (...args) => {return args.reduce((currentTotal, nextValue) => currentTotal + nextValue)}
exports.add = (args) => args.reduce((currentTotal, nextValue) => currentTotal + nextValue)

exports.hello = "Hello"
const hello = "This hello is different from the one above!"
const greet = "Hello"
// exports.calculate = function(callback, ...args) {

	// return callback(...args)

// }

exports.calculate = function(callback, arr) {

	return callback(arr)

}

exports.operations = {
	
	add(arr) {
		return arr.reduce((curr, next) => curr + next)
	}

}

// console.log([global.add, global.calculate]) // Doesn't work!


// function add(...args) {
	// return args.reduce((c, n) => c + n)
// }

//console.log(add(1, 2, 3, 4))



// exports.calculate = function(...args) {
	// add(args))
// }

function addAgain(arr) {
	return arr.reduce((current, next) => current + next)
}

exports.secondTest = function(arr) {
	console.log(`This is add: ${hello}`) // hello is not defined
	console.log(`This is greet: ${greet}`)
	return addAgain(arr)
}
