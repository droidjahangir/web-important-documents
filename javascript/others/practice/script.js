
function closureDemo(){
    let x = 10
    return function(){
        let y = 20
        console.log('sum : '+ (x+y));
        
    }
}

closureDemo()()

/*

this can call with different way

var aVar = closuresDemo();
var total = aVar();
console.log(total);

*/