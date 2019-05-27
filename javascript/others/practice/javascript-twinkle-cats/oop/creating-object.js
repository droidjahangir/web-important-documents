// blog - https://hackernoon.com/create-objects-in-javascript-10924cfa9fc7
// Using object literal
var human = {
	firstName: "Virat",
	lastName: "Kohli",
	age: 30,
	fullName: function(){
		return this.firstName + " " + this.lastName		
	}
}

console.log(human.age);


// Using new Object() systex
let obj = new Object()
console.log(obj); // creates an empty object

// For simplicity, readability and execution speed, use object literal.


// Object constructor

function Human(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}

var person1 = new Human("jahangir ", "alam");
var person2 = new Human("Abdullah ", "imran");
console.log(person1)



