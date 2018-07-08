// Given a list of numbers that represents the prices of some stock for several days, find the index where you should
// buy and sell the stock to maximize your profit. For example, given the prices
// [1,2,0,4,6,3,7,5] --> [2,6]
// 0n^2 time complexity in the brute force way

function stockPicker(arr){
    var sum = 0;
    var result = [];
    for (var i = 0; i < arr.length; i++){
        for (var j = i + 1; j < arr.length - 1; j++){
            if ((arr[j] - arr[i]) > sum){
                sum = arr[j] - arr[i];
                result = [i,j];
                // console.log("result", result);
            }
        }
    }
    return result;
}

console.log(stockPicker([1,2,0,4,6,3,7,5]));

// 0n time complexity
function stockPickerOptimized(arr){
    var min = 0;
    var max = 0;
    var result = [];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] > arr[max]){
            max = i;
        }
        else if (arr[i] < arr[min]){
            min = i;
        }
    }
    result = [min, max];
    return result;
}
console.log(stockPickerOptimized([1,2,0,4,6,3,7,5]));