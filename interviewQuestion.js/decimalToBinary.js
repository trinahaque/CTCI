// Write a function that converts decimal number to binary

function decimalToBinary(num){
    var arr = [];
    var i = 0;
    var result = "";
    while (num > 0){
        arr[i] = num % 2;
        // console.log(arr[i]);
        i++;
        num = Math.floor(num / 2);
    }
    for (var i = arr.length - 1; i >= 0; i--){
        result += arr[i];
    }
    return result;
}


console.log(decimalToBinary(11));