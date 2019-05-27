let arr = [5,3,7,11,35,21,37,12];

// numeric sort
// sort - ascending order
arr.sort(function(a,b){
    return a-b;
});

// sort - descending order
// arr.sort(function(a,b){
//     return b-a;
// });


// object sort
let people = [
    {name: 'jahangir', age: 26},
    {name: 'abdullah', age: 23},
    {name: 'randy', age: 19},
    {name: 'manosh', age: 28},
    {name: 'arif', age: 17}
]

// object sort by age
// people.sort(function(a,b){
//     return a.age - b.age;
// })

//object sort by name(string)
people.sort(function(a,b){
    if(a.name > b.name){
        return 1;
    }else if(a.name < b.name){
        return -1;
    }else{
        return 0;
    }
})


console.log(arr);
console.log(people);

