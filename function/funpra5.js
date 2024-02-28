//Write a JavaScript function that checks whether a number is perfect.


let perfect = (a) =>{
    let n = 0;
    for(let i = 1; i < a; i++){
        if(a % i == 0){
            n = n + i;
        }
    }
    if(a == n){
        console.log("number is perfact");
    }else{
        console.log("number is not perfact");
    }
}
perfect(6);