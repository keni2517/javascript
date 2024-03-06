// Asynchronous JavaScript:-
{
    // // program to display a text using setTimeout method
     // function greet(){
     //     console.log('Hello World');
     // }
     // greet();
     // // let id = setTimeout(greet,2000);
     // // console.log(id);
     // // console.log('This message is shown first');
     // console.log('1 today to much Rain...');
 
     // let x = setInterval(greet,2000);
     // clearInterval(x);
 }
 
 {
     // // program to display a text using setTimeout method
     // function greet(){
     //     console.log('Hello World');
     // }
     // let intervalId = setTimeout(greet,3000);
     // console.log('Id : ' + intervalId);
     // clearTimeout(intervalId);
     // console.log("Stop setTimeout Function");
 }
 
 {
     // // program to display time every 3 seconds 
     // function showTime(){
     //     // return new date and time
     //     let dateTime = new Date();
     //     // return the current local time
     //     let time = dateTime.toLocaleDateString();
     //     console.log(time);
     //     // display the time after 3 seconds
     //     setTimeout(showTime,3000);
     // }
     // // calling the function
     // showTime();
 }
 
 {
     // // program to stop the setTimeout() method
     // let count = 0 ;
     // // function creation
     // function increaseCount(){
     //     // increasing the count by 1
     //     count += 1;
     //     console.log(count);
     // }
     // let id = setTimeout(increaseCount,3000);
     // clearTimeout(id);
     // console.log('setTimeout is stopped.');
 }
 
 {
     // // program display a name
     // function greet(name,lastname){
     //     console.log('Hello' + ' ' + name + ' ' + lastname);
     // }
     // // passing argument to setTimeout
     // setTimeout(greet,1000,'John','Doe'); 
 }
 
 // callback function:-
 {
     // // program that shows the delay in execution
     // function greet(){
     //     console.log('Hello world');
     // }
     // function sayName(name){
     //     console.log('Hiii' + ' ' + name);
     // }
     // // calling the function
     // setTimeout(greet,2000);
     // sayName('John');
 }
 
 {
     // const count = false;
     // let countvalue = new Promise(function(resolve,reject){
     //     if(count){
     //         resolve("There is a count value.");
     //     }
     //     else{
     //         reject("There is no count value.")
     //     }
     // });
     // console.log(countvalue);
     // countvalue
     // .then((result)=>console.log(result))
     // .catch((err)=>console.log(err));
 }
 
 {
     // // returns a promise
     // let countvalue = new Promise(function(resolve,reject){
     //     resolve("Promise resolve");
     // });
     // // executes when promise is resolved successfully
     // countvalue
     // .then((result)=>{
     //     console.log(result);
     // })
     // .then((c)=>{
     //     console.log('you can call multiple function this way');
     // })
     // .then((c)=>{
     //     console.log('skillqode');
     // })
     // .catch((err)=>{
     //     console.log(err);
     // });
 }
 
 {
     // // return a promise
     // let countvalue = new Promise(function(resolve,reject){
     //     reject('Promise rejected');
     // });
     // // executes when Promise is resolved successfully
     // countvalue.then(
     //     function successvalue(result){
     //         console.log(result);
     //     }
     // )
     // // executes if there is an error
     // .catch(
     //     function errorvalue(result){
     //         console.log(result);
     //     }
     // ) ;
 }
 
 // finally() method:-
 {
     let countvalue = new Promise(function(resolve,reject){
         // could be resolved or rejected
         resolve('Promise resolves');
         reject('Promise rejected');
     });
     // add other blocks of code
     countvalue
     .then(result=>console.log(result))
     .catch((err)=>console.log(err))
     .finally(
         function greet(){
             console.log('This code is executed');
         }
     );
 }