let book = {
  name : 'javascript',
  author : 'Jahangir alam',
  publisher : 'O\'railly',
  page : 300,

  print : function(){
    console.log(this.name, this.author);
    
  }
}


// console.log(book);
// console.log('Method element print');
// book.print();


// access value through dot notation and bracket notation

// console.log('Book name : '+ book.name);
// console.log('Author name : ' + book.author);


// add properties from outside of object
//dot access
book.publish_year = 2010;
// console.log(book.publish_year);

//bracket access
book['price'] = 100;
// console.log('book price : ' + book['price']);
// console.log(book);


// for in loop

// for(let prop in book){
//   console.log(prop);
// }

//print property and value
for(let prop in book){
  console.log(prop + ' = ' + book['prop']);
}


