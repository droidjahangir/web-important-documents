// // It's a simple and welcome chage from : 
// const foo = function foo(){
//   //....
// }


// // to 
// const foo = () => {
//   //....
// }


// if the function body is a one-linear
// const foo = () => doSomething()


// if you have a single parameter, you could write:
// const foo = param => doSomething(param)


const sum = (first, second) => {
  return (first + second);
}

console.log(sum(4,5));

