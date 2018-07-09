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

// console.log(stockPicker([1,2,0,4,6,3,7,5]));

// Handling negative value?
// 0n time complexity
// function stockPickerOptimized(arr){
//     var min = 0;
//     var max = 0;
//     var result = [];
//     for (var i = 1; i < arr.length; i++){
//         if (arr[i] > arr[max] && arr[i] >= 0){
//             max = i;
//         }
//         else if (arr[i] < arr[min] && arr[i] >= 0){
//             min = i;
//         }
//     }
//     result = [min, max];
//     return result;
// }
// console.log(stockPickerOptimized([1,2,0,4,6,3,7,5]));
// console.log(stockPicker([1,2,0,4,6,3,7,5,-1]));

// pseudo code
// 1) find first min (don't need to make all of them mins, just need to find first min, and 
// the min that is greater than current min, but not necessarily the next number)
// for example, in [19, 20, 1, 10, 0], min will be 19, 1, and 0
// 2) from min to arr.length, find max
// 3) find sum by doing arr[max] - arr[min]
// 4) if current sum > existing sum, replace sum, replace prev max with existing max, prev min with existing min
// 5) store the indexes for min and max

function stockPickerOptimized(arr){
    var min = 0;
    var sum = 0;
    var buy = 0;
    var sell = 0;

    for (var i = 1; i < arr.length; i++){
        if (arr[i] - arr[min] > sum){
            // console.log("max is ", arr[i]);
            buy = min;
            sell = i;
            sum = arr[i] - arr[min];
        }
        else if (arr[i] < arr[min]){
            min = i;
            console.log("min is ", arr[min]);
        }
    }
    return [buy, sell];
}
// console.log(stockPickerOptimized([1,2,0,4,6,3,7,5,-1]));
// console.log(stockPickerOptimized([19, 20, 0, 10]));
// console.log(stockPickerOptimized([19, 0, 10, 20]));
// console.log(stockPickerOptimized([19, 10, 5, 0]));
// console.log(stockPickerOptimized([1,2,0.25,4,6,3,7,5,0.1,8]));
// console.log(stockPickerOptimized([-2, 19, 0, 10, 20]));
console.log(stockPickerOptimized([1, 12, 0, 7]));