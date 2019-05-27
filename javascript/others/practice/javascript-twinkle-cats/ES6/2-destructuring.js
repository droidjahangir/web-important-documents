// const arr = [19,20,32]
// let [a, b, c] = arr
// console.log(b);

const obj = {
  name : 'imran',
  email : 'jahangir.droid@gmail.com'
}

let { name, email } = obj;
console.log(name, email);

// use backtik
function print({name, email}){
  console.log(`Hello : ${name}; Email : ${email}`);
}

print({email, name});


