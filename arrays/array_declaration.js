//type 1
var arr1 = ["nirbhay" , 1 ,2 , 5.5 , true , undefined]
console.log(arr1);

//type 2
var arr2 = new Array(1 ,2 , 5.5)
console.log(arr2);


//but it will give error as inside Array(cannot have number)
// var arr2 = new Array(2)
// console.log(arr3);

var arr4 = new Array(2 , 5.5)
console.log(arr4);

var arr5 = [2]
console.log(arr5);