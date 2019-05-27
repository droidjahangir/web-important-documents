// function printme(){
//   console.log('Hello, ' + this.name );
// }

// let obj1 = {
//   name : 'Jahangir alam',
//   age : 27
// }


// let obj2 = {
//   name : 'Abdullah imran',
//   email : 'imran@gmail.com'
// }

// // let binded = printme.bind(obj2);

// // binded()


// // call() function use to direct call
// printme.call(obj1)
// printme.call(obj2)

// apply()

function add(a,b){
  return (a+b) * this.c;
}

let obj1 = {
  c : 3
}

let obj2 = {
  c : 5
}

// call()
console.log(add.call(obj1, 10,4));

// apply()
console.log(add.apply(obj1, [10,4]));

// bind()
let binded = add.bind(obj1)
console.log(binded(10,4));



