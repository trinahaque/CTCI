function isLucky(n) {
    // console.log("num", n[0]);
    var newArray = (n + '').split('');
    // console.log(numArray);
    var numArray = [];
    for (var i = 0; i <newArray.length; i++){
        numArray.push(parseInt(newArray[i]));
    }
    // console.log(numArray);
    var sum1 = 0;
    var sum2 = 0;
    for (var i = 0; i < numArray.length / 2; i++){
        // console.log("num is ", parseInt(numArray[i]));
        sum1 += numArray[i];
        sum2 += numArray[numArray.length - 1 - i];
        // console.log("sum", sum1, sum2);
    }
    if (sum1 == sum2){
        // console.log("sum", sum1, sum2);
        return true;
    }
    else{
        return false;
    }
}

console.log(isLucky(1230));