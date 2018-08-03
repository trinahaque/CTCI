// Find the minimum distance between two numbers
// Given an unsorted array and two numbers x and y, find the minimum
// distance between x and y. The array can contain duplicates including 
// x and y. X and Y are different and present in the array

var arr1 = [1, 2];
var x1 = 1; var y1 = 2;
// distance is 1

var arr = [3, 4, 5];
var x = 3; var y = 5;
// distance is 2

function minimumDistance(arr, val1, val2){
    var distance = 0;
    var found = false;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == val1){
            found = true;
            continue;
        }
        else if (arr[i] == val2){
            distance++;
            break;
        }
        if (found){
            distance++;
        }
    }
    return distance;
}
console.log(minimumDistance(arr1, x1, y1));
console.log(minimumDistance(arr, x, y));