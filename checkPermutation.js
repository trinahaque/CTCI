// Check Permutation
// Given two strings, write a method to decide if one is a permutation of the other
// Two methods: sort both strings and compare it. Time Complexity O(nlgn). 
// Use Hash Table: Time Complexity O(n) --> n + n + n
// Use dictionary with key value pair


function checkPermutation(str1, str2){
    if (str1.length !== str2.length){
        // if the lengths are not equal, it will be false
        return false;
    }

    if (str1.length == 0 && str2.length == 0){
        // if both strings are empty, it will be false
        return false;
    }

    var dict = { }

    // go through str1
    for (var i = 0; i < str1.length; i++){
        if (!(str1[i] in dict)) {
            dict[str1[i]] = 1;
        }
        else{
            dict[str1[i]] += 1;
        }
    }

    // go through str2
    for (var j = 0; j < str2.length; j++){
        if (!(str2[j] in dict)){
            // it basically means if any chr not in dict
            return false;
        }
        else {
            dict[str2[j]] -= 1;
        }
    }

    // console.log("dict after first str is", dict);

    for (key in dict){
        if (dict[key] !== 0){
            return false;
        }
    }

    return true;
}

console.log(checkPermutation("ttttt", "ttatt"));




// https://algorithms.tutorialhorizon.com/find-whether-two-strings-are-permutation-of-each-other/