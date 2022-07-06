var arr = [10,20,50,5,80,100]

for(var i=0;i<arr.length;i++)
{
    for(var j=i+1 ; j<arr.length;j++)
    {
        if(arr[i]<arr[j])
        {
            var temp =arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }

}

var sum = 0
for(var i =0;i<3;i++)
{
    sum=sum+arr[i]
}
console.log("Sum of First Three Maximum Numbers => "+sum);