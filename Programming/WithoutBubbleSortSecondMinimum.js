var arr = [10,20,50,5,80,100]

var Fmin=arr[0]
var Smin=arr[0]

for(var i=0;i<arr.length;i++)
{
    if(Fmin>arr[i])
    {
        Smin=Fmin
        Fmin=arr[i]
    }

    else if(Smin>arr[i])
    {
        Smin=arr[i]
    }
}
console.log("First min => " +Fmin + " " + "Second min => " + Smin);