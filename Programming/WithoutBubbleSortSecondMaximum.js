var arr = [10,20,50,5,80,100]

var Fmax=arr[0]
var Smax=arr[0]

for(var i=0;i<arr.length;i++)
{
    if(Fmax<arr[i])
    {
        Smax=Fmax
        Fmax=arr[i]
    }

    else if(Smax<arr[i])
    {
        Smax=arr[i]
    }
}
console.log("Fmax=> "+Fmax+"  "+"Smax=> "+"  "+Smax);