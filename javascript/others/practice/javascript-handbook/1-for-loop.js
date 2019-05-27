// print 1 to 42
for (let i=1; i<42; i++){
  console.log(i);
}

// Using for ... in ... can be used to iterate object keys


let name = {
  first : "jahangir",
  last : "alam"
}

for (key in name){
  if (name.hasOwnProperty(key)){
    console.log(key, name[key]);
  }
}

// In ES6 there is a for ... of ... as well. It's pretty neat since it iterates any iterable objects (arrays, strings etc).

let numbers = [-1,7,32,12,64]
for(let num of numbers){
  console.log(num);
}

let country = "Bangladesh"

for (let letter of country){
  console.log(letter);
}

