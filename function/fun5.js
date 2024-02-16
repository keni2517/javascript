{
	let i,j=1;
    function add(n){
	for(i=1;i<=n;i++)
	{
		if(i%2==0)
		{
			j=i*i;
			console.log(j);
		}
		else
		{
			console.log(i);
		}
	}
}
add(9);
}