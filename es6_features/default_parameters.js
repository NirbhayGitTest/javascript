//case 1
// function company(a,b){
//     return a+b;
// }
// console.log(company(1)); 

//case 2
// function company(a,b=2){
//     return a+b;
// }
// console.log(company(1)); 

//case 3
// function company(a,b=2){
//     return a+b;
// }
// console.log(company(1,3));

//case 4
class add{
    constructor(a,b=1){
        console.log(a+b)
    }
}
var sum = new add(2)
var sum1 = new add(1,3)