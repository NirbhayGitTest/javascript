var arr = [10,20,50,5,80,100]

		for (var i = 0; i < 2; i++) 
		{
            var temp = arr[0];
			for(var x=1;x<arr.length;x++)
			{
				arr[x-1] = arr[x];
			}
			
		arr[arr.length-1]=temp;
		}
		
		for (var j = 0; j < arr.length; j++) 
		{
			console.log(arr[j]+" ");
		}
        