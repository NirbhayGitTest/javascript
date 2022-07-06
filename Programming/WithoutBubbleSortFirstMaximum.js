var arr = [10,20,50,5,80,100]

var max=arr[0]

for(var i=0 ; i<arr.length ; i++)
{
    if(arr[i]>max)
    {
        max=arr[i]
    }
}
console.log(max);