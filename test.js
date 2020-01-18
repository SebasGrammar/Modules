"use strict"

Array.prototype.goThrough = function(callback) {
	for (let item of this) {
		callback(item)
	}
}

let test = [1, 2, 3, 4]

test.goThrough(number => console.log(number * 2))

let doArraysProvideAContext = [1, 2, 3, 4, function() {console.log(this)}]

doArraysProvideAContext[4]()

let logThis = doArraysProvideAContext[4]

logThis()