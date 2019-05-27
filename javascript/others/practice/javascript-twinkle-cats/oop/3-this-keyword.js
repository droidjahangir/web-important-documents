// var obj = {
//   value : 20
// }

// function add(num){
//   console.log(this.value);
  
//   return this.value + num;
// }

// let binded = add.bind(obj)
// let result = binded(100)

// console.log(result);


let person = {
  name : 'shuvo',

  print: function(){
    
    setTimeout(function(){
      console.log(this);
      console.log('Hello, ' + this.name );
      
    }.bind(this), 2000);

  }

}

