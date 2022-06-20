var str = " $tring @ Methods "

// 1-- str.length
//returns the length of the string
 //console.log(str.length);

/****************************************************** */

// 2--str.split(separtor)
//it will split the string into sub-string based on the separator
//return type is in form of an array
//does not modify the existing string

// console.log(str.split(" "));
// console.log(str.split(" ", 2));

/********************************************************** */

// 3--str.charAt(position)
//return the charater of the specified index

// console.log(str.charAt(2));
// console.log(str.charAt(0));
// console.log(str.charAt(-2));
// console.log(str.charAt(18));


/*********************************************************** */

// 4--str.charCodeAt()
//prints the unicode of the character ,, if there is no character at the specified index, NaN is returned.

// console.log(str.charCodeAt(5)); //110
// console.log(str.charCodeAt('t')); //32

/************************************************************ */

// 5--str.concat()
//does not modify the existing string
//return type is string
//string is appended to the end of the existing string

// console.log(str);
//  console.log(str.concat("Javascript"));
// console.log(str);

/************************************************************** */

// 6-- str.endsWith("search_string")
//check whether the string is ending with the searched string
// console.log(str.endsWith(" ")); // true

//console.log(str.endsWith(" " , 18)); //true

// console.log(str.endsWith(" " , 15)); //false


/***************************************************************** */

// 7-- str.includes("search_string")
//Returns true if searchString appears as a substring of the result of converting this object to a String, 
//at one or more positions that are greater than or equal to position; otherwise, returns false.

// console.log(str.includes("in")); //true
// console.log(str.includes("  ")); //false

/******************************************************************** */

// 8-- str.indexOf("search_string")
//Returns the position of the first occurrence of a substring. , index at which to begin searching the String object.

// console.log(str.indexOf("n" , 1));  //5
// console.log(str.indexOf("@"));  //8

/******************************************************************** */

// 9-- str.lastIndexOf("search_string")
//Returns the last occurrence of a substring in the string.

// console.log(str.lastIndexOf(" ")); //17
// console.log(str.lastIndexOf("t" , 16)); //12

/*********************************************************************** */

// 10-- str.replace("search_string")
//Replaces text in a string, using a regular expression or search string.

// console.log(str.replace("@" , "#" ));  //$tring # Methods
// console.log(str);                      //$tring @ Methods

// console.log(str.replace("t" , "T" ));   // $Tring @ Methods   //only first occurence will be replaced
// console.log(str);


/************************************************************************* */

// 11-- str.repeat(number)
//Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.

// console.log(str.repeat(3));  //$tring @ Methods  $tring @ Methods  $tring @ Methods 
// console.log(str.repeat(1));  // $tring @ Methods 
// console.log(str.repeat(0));  // empty string 