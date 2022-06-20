var arr=[1, "Hello",  , true]

//******forEach()
// arr.forEach((element,index)=>{
// console.log(index +" : "+ element);
// })
// console.log(arr);

//*******for of

var index=0
for (var index of arr) {
    console.log(index);
    // index++
}


//******for in 

// var index=0

// for (var index in arr) {
    
//     console.log(index + "  "+ arr[index]);
//     // index++
    
// }


//******for loop

// for (let index = 0; index < arr.length; index++) {
//    console.log(arr[index]);
    
// }