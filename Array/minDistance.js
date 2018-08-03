// Find the minimum distance between two numbers
// Given an unsorted array and two numbers x and y, find the minimum
// distance between x and y. The array can contain duplicates including 
// x and y. X and Y are different and present in the array

var arr1 = [1, 2];
var x1 = 1; var y1 = 2;
// distance is 1

var arr2 = [3, 4, 5];
var x2 = 3; var y2 = 5;
// distance is 2

var arr3 = [3,5,4,2,6,5,6,6,5,4,8,3];
var x3 = 3; var y3 = 6;
// distance is 4

var arr4 = [2,5,3,5,4,4,2,3];
var x4 = 3; var y4 = 2;
// distance is 1

// this solution doesn't work for complicated number
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
// console.log(minimumDistance(arr1, x1, y1));
// console.log(minimumDistance(arr2, x2, y2));


// On^2 solution. But it should work in all cases
function minimumDistance2(arr, val1, val2){
    var distance = Infinity;
    for (var i = 0; i < arr.length; i++){
        for (var j = i + 1; j < arr.length; j++){
            if ((arr[i] == val1 && arr[j] == val2) || (arr[i] == val2 && arr[j] == val1) && (distance > Math.abs(i - j))){
                // console.log("i ", i, " j ", j);
                // console.log("val1 ", val1, " val2 ", val2);
                distance = Math.abs(i - j);
            }
        }
    }
    return distance;
}


console.log(minimumDistance2(arr1, x1, y1));
console.log(minimumDistance2(arr2, x2, y2));
console.log(minimumDistance2(arr3, x3, y3));
console.log(minimumDistance2(arr4, x4, y4));