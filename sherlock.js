//Input Example

//_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
arr = _INPUT.split(/[" ","\n"]/);

p1 = 1;
p2 = 2;
A = arr[p1];
B = arr[p2];
count=0;
i = 0;
j = arr[0]-1;


console.log("________________________")

while (i <= j)
{

	for (l= A; l <= B; l++)
	{
		x = (Math.sqrt(l));
	
		if (x == parseInt(x))
		{
			count = count +1;
		}	
	}

	if (count == 1)
	{
		c = "cuadrado perfecto";
		e = "exsiste"
	}
	
	else
	{
		c = "cuadrados perfectos";
		e = "exsisten";
	}

	console.log("|" + "Entre " +A + " y " +B + " " + e+ ":");
	
	A = arr[p1 + 2];
	B = arr[p2 + 2];
	p1 = p1 + 2;
	p2 = p2 + 2;


	console.log("|"+count+ " " + c + "\n" + "|");
	count=0;
	i++;
}
console.log("------------------------");