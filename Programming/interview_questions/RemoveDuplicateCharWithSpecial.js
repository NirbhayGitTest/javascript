var str = "google"
var dup=""
for (var i=0 ; i<str.length;i++){
    var count =0
    var ch = str.charAt(i)
    for(var j=0;j<str.length;j++)
    {
        var ch1 = str.charAt(j)
        if(ch==ch1 && i>j)
        {
            break;
        }
        if(ch==ch1)
        {
            count++
        }   
    }  
    if(count>1)
    {
        dup= str.charAt(i)
        console.log(str.replaceAll(dup,"@"));
    }
}   
/////////////////////not  correct this program