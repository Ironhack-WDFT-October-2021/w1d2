// functions

// greet()
// function declaration
// this is hoisted
// function greet() {
// 	console.log('this is the greet function')
// }

// greet()


// function expression
// const greet = function () {
// 	console.log('this is the greet function')
// }


function greet(name, message) {
	const str = message + ' ' + name
	return str
	console.log('this is not executed')
}
const greeting = greet('Rahaf', 'Hi')
// console.log(greeting) // 'Hi Stephen'

function sum(a, b) {
	const sum = a + b
	return a + b
}

const res = sum(3, 6)
console.log(res)

// Arrays - an ordered collection of multiple (different)  values 

const numbers = [1, 2, 3, 4, 5]
// console.table(numbers)

const empty = []
// adding an element
empty[0] = 'a'
// accessing an element
// console.log(empty[0])

empty[3] = 'x'
console.log(empty.length)
// const multidimensional = [['a', 'b'], ['c', 'd']]
// console.log(multidimensional[1][1])

const chars = []

// push() -> add elements to the end of the array
chars.push('x')
console.log(chars.push('y'))
console.log(chars)
// pop() -> remove elements from the end of the array
console.log(chars.pop())
console.log(chars)

// adding and removing elements at the beginning of the array
chars.unshift('a')
console.log(chars)
chars.shift()

// checking if an element is contained in an array
const letters = ['a', 'b']
// indexOf
console.log(letters.indexOf('z'))

// includes
console.log(letters.includes('a'))

// splice()
const countries = ['usa', 'france', 'uruguay', 'england', 'poland']
countries.splice(1, 1, 'spain')
console.log(countries)

// write a function that get's the countries array as a parameter
// and (removes) returns an array of countries with countries that
// start with u

// const countries = ['usa', 'france', 'uruguay', 'england', 'poland']
function filterCountries(arr) {
	// create a new array
	const filtered = []
	// iterate over countries
	for (let i = 0; i < arr.length; i++) {
		// check if the country starts with 'u'
		if (arr[i][0] === 'u') {
			// if yes then we add it to filtered
			filtered.push(arr[i])
		}
	}
	return filtered
}
const filtered = filterCountries(countries)
// console.log(filtered)

// iterating over an array
// for of loop -> for (let <one of the elements> of <name of the array>)
for (let country of countries) {
	console.log(country)
}

// forEach()
countries.forEach(function (country) {
	console.log(country)
})