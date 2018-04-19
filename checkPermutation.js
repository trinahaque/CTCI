// Check Permutation
// Given two strings, write a method to decide if one is a permutation of the other

function checkPermutation(str1, str2){
    if (str1.length !== str2.length){
        // if the lengths are not equal, it will be false
        return false;
    }

    if (str1.length == 0 && str2.length == 0){
        // if both strings are empty, it will be false
        return false;
    }

}