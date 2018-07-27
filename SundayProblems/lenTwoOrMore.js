// Given an array, return two or more subsequence that is increasing

function lenTwoOrMore(arr){
    var result = [];
    for (var i = 0; i < arr.length; i++){
        for (var j = 1; j < arr.length; j++){
            if (arr[j] > arr[i]){
                result.push([arr[i], arr[j]]);
            }
            else{
                continue;
            }
        }
    }
    // console.log("rest");
    return result;
}

// console.log(lenTwoOrMore([1,3,5,2,9]));


//time complexities 2^n
function subsequence(arr, index, result, tmp){
    if (tmp.length >= 2){

    }

}

