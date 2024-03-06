

{
    // a promise
    let one = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Promise resolved')},4000)
    });
    // async function
    async function asyncfun(){
        // wait until the Promise resolves
        let result = await one;
        console.log(result);
        console.log('hello');
    }
    // calling the async function
    asyncfun();
}