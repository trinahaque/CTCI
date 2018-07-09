// Given an unsorted list of numbers, find and return any duplicates in the list.
// [1,2,5,2,4,6,3,4,2,3] --> [2,3,4]
// On space --> dict
// On time --> one for loop and one for checking keys in dict

function duplicateNumber(arr){
    var dict = {};
    var resultArray = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] in dict){
            dict[arr[i]]++;
        }
        else{
            dict[arr[i]] = 1;
        }
    }
    for (key in dict){
        if (dict[key] > 1){
            resultArray.push(parseInt(key));
        }
    }
    return resultArray;
    // return Object.keys(dict);
}

console.log(duplicateNumber([1,2,5,2,4,6,3,4,2,3]));