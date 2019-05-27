// let books = [
//   {
//     name : 'jahangir'
//   },
//   {
//     name : 'abdul'
//   }
// ]

// console.log(books[0]['name']);

function Person(name, email){
  this.name = name;
  this.email = email;

  function print(){
    console.log('name : ' + this.name);
    
  }
}

let person1 = new Person('Jahangir', 'jahgnir.droid@gmail.com');
let person2 = new Person('imran', 'imran@gmail.com');
let person3 = new Person('arif', 'arif@gmail.com');

let pepole = [person1, person2, person3];

// console.log(pepole);


// access element thorugh foreach loop

// pepole.forEach(function(obj){
//   console.log('Email : ' + obj.email);
  
// });

// access element through for loop
for(let a in person1){
  console.log('properties : ' + a);
  
}


