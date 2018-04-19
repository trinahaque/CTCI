// run javascript file by typing node file.js
// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. 
// What if you can not use additional data structures

// This implementation has On^2 solution
function isUnique(str){
    if (str.length == 0){
        // String is empty, return false
        return false;
    }
    if (str.length == 1){
        // String is one chr, return true
        return true;
    }

    string = str.toLowerCase().split("");
    // console.log(string);

    for (var i = 0; i < string.length - 1; i++){
        // don't need to check the last character
        for (var j = i+1; j < string.length; j++){
            // don't need to compare the character with itself
            // need to compare with all the other characters
            if (string[i] == string[j]){
                console.log("string[i] is", string[i], "string[j] is", string[j]);
                return false;
            }
        }
    }
    return true;
}

console.log(isUnique("Sm10m"));

// 0n solution uses bit number. Lookup youtube video

