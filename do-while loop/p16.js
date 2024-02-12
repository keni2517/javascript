{
	let i=1,n = prompt("enter n:"),j=1;
	do{
        if(i%2==0)
		{
            j=i*i;
			console.log(j);
		}
		else
		{
            console.log(i);
		}
        i++;
	}while(i<=n);
}