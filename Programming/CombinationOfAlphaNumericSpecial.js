var s = "N;r8h@y5";
var alpha="";
var number="";
var special="";
		
		for(var i=0;i<s.length;i++)
		{
			var ch = s.charAt(i);
			
			if(ch>='a' && ch<='z' || ch>='A' && ch<='Z')
			{
				alpha=alpha+ch;
			}
			
			else if(ch>='0' && ch<='9')
			{
				number=number+ch;
			}
			
			else
			{
				special=special+ch;
			}
		}
		console.log(alpha)
		console.log(number);
		console.log(special);