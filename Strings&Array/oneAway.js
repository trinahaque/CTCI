// Problem 1.5
// There are three types of edits that can be performed on strings: insert a character,
// remove a chracter, or replace a character. Given two strings, write a function check if 
// they are one edit (or zero edits) away

// review it again in the future

// 0(n) solution
// Only loop through once

function oneAway(str1, str2){
    var length1 = str1.length;
    var length2 = str2.length;

    if (Math.abs(length1 - length2) > 1){
        return false;
    }
    var strike = 0;
    var i = 0;
    var j = 0;

    while ((i < length1) && (j < length2)){
        if (str1[i] !== str2[j]){
            // if the characters don't match
            strike ++;

            if (strike > 1) {
                return false;
            }

            if (length1 > length2){
                // if the string doesn't match and one string is greater than other, only increament the count for that greater string
                i++;
            }
            else if (length2 > length1){
                j++;
            }

            else{
                i++;
                j++;
            }
        }
        else{
            // keep incrementing the count for both strings if there is no mismatch
            i++;
            j++;
        }
    }
    return true;
}


console.log(oneAway("pale", "mal"));

