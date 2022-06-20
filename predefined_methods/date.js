var d = new Date();

// console.log(d.toDateString());                      //Mon Jun 06 2022

// console.log("today's date : " +d.getDate());        //6
// console.log("today's day : " +d.getDay());          //1  (index of day , Sunday =>0 , Monday =>1  ---- )
// console.log("today's year : " +d.getFullYear());    //2022
// console.log("today's month : " +d.getMonth());      //5 (index of month , January =>0 , June => 5 ---- )

//recommended approach
var date = d.toDateString()
console.log(date);                  //Mon Jun 06 2022
console.log(date.split(" ")[0]);    //Mon

console.log(date.split(" ")[1]);    //Jun
console.log(date.split(" ")[2]);    //06
console.log(date.split(" ")[3]);    //2022