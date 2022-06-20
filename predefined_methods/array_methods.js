var arr1 = [10,20,30,40,50]
var arr2 = ["hi","ok" ,'x', 100 , 200]


//================================
// 1.array.concat(number[])
//This method is used to combine two or more array
//it will return a new array without modifying the existing array

// console.log(arr1.concat(arr2)); 
// console.log(arr1);

//====================================
// 2.array.push(elements)
//This method will add the given element at the end of array  ,,  return the length of an array
//it will modify the existing array
// console.log(arr1.length);
// arr1.push(55)
// console.log(arr1);
// console.log(arr1.length);

//====================================
//3. array.pop()
//This method will remove the last element from the array ,, return the removed element
//it will modify the existing array

// console.log(arr1.pop());
// console.log(arr1);

//===============================
//4. array.unshift(elements)
//This method will add the elements in the beginning of array ,, return the length of an array
//it will modify the existing array

// console.log(arr1.unshift("nirbhay javascript pro"));
// console.log(arr1);

//==================================
// 5.array.shift()
//This method will remove the first element from the array ,, return removed elements
// It will modify the existing aaray

// console.log(arr1.shift());
// console.log(arr1);

//===================================
// 6. array.splice(start index, delete count, new element)
//This method will delete as well as add the given element to specific index of an array ,,
// return the delete element in the form of an aaray
// It will modify the existing array

// console.log(arr1.splice(2,1,50));
// console.log(arr1);

//====================================
// 7. array.slice(start index, end index)
//This method will return the fragment of an array based on the specified index and end index will be excluded ,,
// returns the fragment in the form of array

// console.log(arr1.slice(1,3));
// console.log(arr1);

//================================
// 8. array.every(()=>{})
//This method will return boolean result based on the condition satisfied by all the elements of array ,,
//  return true only if all the elements satisfied the given condition 


// console.log(arr1.every((element)=>{
//     return element>10

//  }));

//=======================================
// 9. array.some(()=>{})
//This method will return boolean based on condition satisfied by one of the element of an array ,, return true

// console.log(arr1.some((element)=>{
// return element >20
// }));

//======================================
// 10. array.indexOf(search element,start position)
//This method will return the index value of search element traversing from left => right

// console.log(arr1.indexOf(50,3));
// console.log(arr1);

//======================================
// 11. array.lastIndexOf(search element , start position)
//This method will return the index value of search element traversing from right => left

// console.log(arr1.lastIndexOf(4,7));
// console.log(arr1);

//===========================================
// 12. array.reverse()
//This method will return the array in reverse order 
//This method will modify the existing array

// console.log(arr1);
// console.log(arr1.reverse());
// console.log(arr1);

//======================================================
// 13. array.includes(search element)
//This method will return the boolean result based on the search element present or not

// console.log(arr1.includes(5));
// console.log(arr1);

//=================================================
// 14. array.join(join character)
//This method will add the element of an array based on the character specified ,, return string

// console.log(arr1.join("python"));
// // console.log(arr1.join("  "));
// console.log(arr1);

//=========================================
// 15. array.forEach(()=>{task})
// This method will perform the task given in the callback function ,, returns void ,,it is implemented by map method of an array
// it will not modify the existing array

// arr1.forEach((element,index)=>{
// console.log(element +" : "+ index);
// })
// console.log(arr1);
// Or

// arr1.forEach((element,index)=>{
// console.log(element *5);
// })
// console.log(arr1);


//==========================================
// 16. array.map(()=>{})
// This method will the modified form of an array and implement by filter method of an array 
// it will not modify the existing array

// console.log(arr1.map((element, index)=>{              
//     return element*5
// }));                   
// console.log(arr1);  
//return type is different from foreach

//=============================================
// 17. array.filter(()=>{})
// This method will return the array based on the filter condition i.e. 
//it will return the element in the form of array only if satisfied the given condition
// it will not modify the existing array


// console.log(arr1.filter((element,index,array)=>{
//     if (element>20){
//         return element
//     }
// }));
// // console.log(arr1);

//=================================================
// 18. array.sort(()=>{compare function})
//This method will sort the array in ascending order (return a-b)
// For Decending order (return b-a) based on return specified in compare function

// console.log(arr1.sort((a,b)=>{
//     return b-a
// }));


//====================================
// 19. array.reduce((previous value, current value)=>{})
// This method will return the entire array into a single unit into the required form (array, object, number) ,,
// traversing is from left => right


// (i)
// const set1 = [24,43,45]
// function net(total, num) {
// return total-num    
// }
// console.log(set1.reduce(net));


// (ii)

// const set2 = [12,4.9,23.87,23.55]
// function totalSum(total,num) {
//     return total + Math.round(num)
// }
// console.log(set2.reduce(totalSum,0));

//===========================================
// 20. array.reduceRight((previous value, current value)=>{})
// It is similar to reduce method but traversing is from right =>left


// (i)
// const set1 = [23,9,12,20]
// console.log(set1.reduceRight(reduce));

// function reduce(total, num) {
//     return total - num;
// }

// (ii)
// const set2 = [23,12,5,2,15]
// console.log(set2.reduceRight(reduce));

// function reduce(total, num) 
// {
//     return total - num;
// }