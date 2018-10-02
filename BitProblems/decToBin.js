// The function takes a decimal number and returns the binary of it
function decimalToBinary(number){
    // make sure input is a number
    var i = 0;
    var resultArr = [];
    while (number > 0){
        // console.log("before number is ", number % 2);
        resultArr[i] = number % 2;
        number = parseInt(number / 2);
        // console.log("number is ", number);
        i++;
    }
    var tmp;
    for (var i = 0; i < resultArr.length/2; i++){
        tmp = resultArr[i];
        resultArr[i] = resultArr[resultArr.length - 1 - i];
        resultArr[resultArr.length - 1 - i] = tmp;
        // console.log("result", resultArr);
    }
    return resultArr;
}

console.log(decimalToBinary(123));