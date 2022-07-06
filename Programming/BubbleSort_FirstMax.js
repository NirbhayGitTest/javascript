var arr = [10,20,50,5,80,100]

for(var i=0 ; i<arr.length ; i++)
{
    for (var j = i+1 ; j < arr.length; j++) {
        
        if(arr[i]<arr[j])
        {
            var temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    
}
console.log(arr[0]);