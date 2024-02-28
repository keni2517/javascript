// 4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
function findLongestWord(str) {

    var words = str.split(' ');

    var maxLength = 0;

    var longestWord = '';


    for (var i = 0; i < words.length; i++) {

        if (words[i].length > maxLength) {

            maxLength = words[i].length;

            longestWord = words[i];
        }
    }

    return longestWord;
}

var longest = findLongestWord("The quick brown fox");
console.log("The longest word is:", longest);
