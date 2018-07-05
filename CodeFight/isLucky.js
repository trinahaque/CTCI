function isLucky(n) {
    var newArray = (n + '').split('');
    var sum1 = 0;
    var sum2 = 0;
    
    for (var i = 0; i < newArray.length / 2; i++){
        sum1 += parseInt(newArray[i]);
        sum2 += parseInt(newArray[newArray.length - 1 - i]);
        // console.log("sum", sum1, sum2);
    }
    
    if (sum1 == sum2){
        return true;
    }
    else{
        return false;
    }
}

console.log(isLucky(1220));