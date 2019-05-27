function Person(name, age){
  this.name = name;
  this.age = age;
}

// Person.prototype.hello = function(){
//   console.log('Hello, ' + this.name );
// }

// let p1 = new Person('jahangir', 26);
// let p2 = new Person('imran', 25);

// console.log(p1);
// console.log(p2);

// console.log(Person.prototype);


// Person.prototype.email = 'something@gmail.com';


// declare multiple elements in prototype

Person.prototype = {
  hello : function(){
    console.log('Hello, ' + this.name );
  },

  print : function(){
    console.log(this.name, this.email);
  },

  email : 'jahangir.droid@gmail.com'
}


