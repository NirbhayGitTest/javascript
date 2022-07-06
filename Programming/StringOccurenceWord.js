var s= "Nirbhay is so awesome so so so awesome";
var str = s.split(" ")
		
for(var i=0;i<str.length;i++)
{
    // var ch = s.charAt(i)
    var count =0

    for(var j=0;j<str.length;j++)
    {
        

        if(str[i]==str[j] && i>j)
        {
            break;
        }

        if(str[i]==str[j]){
                count++
        }
    }
        if(count>=1)
        {
            console.log(str[i] + " present " + count + " times");
        }
    }