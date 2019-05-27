// part - 1
// function Person(){
//   this.name = 'Abdullah imran'
// }

// function Teacher(){
//   Person.call(this);
//   this.subject = 'javascript';
// }

// let teacher = new Teacher();

// let name = teacher.name;

// console.log(name);


// part - 2
function Person(name){
  this.name = name;
}

Person.prototype.printName = function(){
  console.log('Name : ' + this.name );
}

Person.prototype.another = function(){
  console.log('This is another function');
}

function Student(name, id){
  Person.call(this, name);
  this.id = id;
}

// access all prototype from Person and set Student.constructor = Person;
Student.prototype = Object.create(Person.prototype);
// same
// Object.setPrototypeOf(Student.prototype, Person.prototype);


// restore constructor
Student.prototype.constructor = Student;


let student = new Student('Jahangir alam', 1535);

console.log(student.name);
console.log(student.printName); // prototype

