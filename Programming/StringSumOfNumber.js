var s = "N;r8h@y5";
		
var sum=0
		
		for(var i=0;i<s.length;i++)
		{
            var ch=s.charAt(i)
			if(ch>='0' && ch<='9')
			{
				
				console.log(ch);
				sum=sum+ch;
			}
		}
		
		console.log("sum of number from string =>  " + sum);