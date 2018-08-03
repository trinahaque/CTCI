// Maximum difference between two elements such that larger element apprears after the smaller number
// Similar to stock picker problem

// On time
function stockPicker(arr){
    var sum = 0; 
    var start = 0;
    var end;
    var minIndex;
    for (var i = 1; i < arr.length; i++){
        if (arr[i] - arr[start] > sum){
            sum = arr[i] - arr[start];
            end = i;
            minIndex = start;
        }
        else if (arr[i] < arr[start]){
            start = i;
        }
    }
    console.log("max is ", sum, " buy index is ", minIndex, " end index is ", end);
}


// stockPicker([2,3,10,6,4,8,1]);
// stockPicker([7,9,5,6,3,2]);
stockPicker([7,3,6,10,5,20,4]);