
// 1. Write a JS function that reverse a number. 
// Example x = 15438;
// Expected Output : 83451


{
    let i , n=15438 , reversedNumber = 0;
    while(n != 0) 
    {
        i = n % 10;
        reversedNumber = reversedNumber * 10 + i ;
        n=parseInt(n/10);
    }
    console.log(reversedNumber);
}


