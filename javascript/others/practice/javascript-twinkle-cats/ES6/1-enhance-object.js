let name = 'Jahangir alam'

let email = 'droidjahangir@gmail.com'

const Cat = {
  name,
  email,

  print(){
    console.log(this.name, this.email);
  }
}

Cat.print();
console.dir(Cat);



