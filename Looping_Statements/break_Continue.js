var arr=[1, "Hello", 5.5 , true]

//break (nothing will come in console in this case)
for (var index = 0; index < arr.length; index++) {
    if (index<2) {
        break;
        console.log(arr[index]);
        
    }
   console.log("hi")
    
}

//continue
for (var index = 0; index < arr.length; index++) {
    if (index<2) {
        continue;
        console.log(arr[index]);
        
    }
   console.log("hi")
    
}