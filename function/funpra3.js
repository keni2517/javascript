// 3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'




// function uppercase(str) {
//     var array1 = str.split(' ');
//     console.log(array1);
//     var newarray1 = [];
//     for (var x = 0; x < array1.length; x++) {
//       newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
//     }
//     return newarray1.join(' ');
//   }
//   console.log(uppercase("the quick brown fox"));



  {

    function LongestWord (words){
  
      let New_word = words.split(' ');
      let wordLength = [];
    
      for(let i = 0 ; i < New_word.length ; i++)
      {
        wordLength.push(New_word[i].slice(0).length);
      }
  
      // let total = Math.max.apply(null,wordLength);
    
      let findInd = New_word.findIndex((val)=>{
        return (Math.max.apply(null,wordLength) === val.length) ; //2
      });
  
      return New_word[findInd];
  
    }
    
    let InWord = 'Web Development Tutorial' ;
    console.log(LongestWord(InWord));
  }