//case 1
//combining the existing arrays
// var arr=[10,20,"hi","bye"]
// var arr1=[30,40,"test1","test2"]
// console.log(...arr,...arr1);

//case 2
//combining the existing arrays
// var arr2 = [1,2,3,4,5]
// var arr3 = [...arr2,50]
// console.log(arr3);

//case 3
//copying objects using spread parameters
//obj2 is given all the properties of obj1 using the spread operator(_)


//case 4
//combine two objects
//the properties that did not match were combined , 
//but the property that did match was overwritten by the last object that was passed
const employee={
    f_name: 'abc',
    l_name: 'xyz',
    salary: '15000'
}
const employee_details = {
    gmail: 'abc@gmail.com',
    company: 'ty',
    salary: '25000'
}

const tyemployee = {...employee, ...employee_details}
console.log(tyemployee);