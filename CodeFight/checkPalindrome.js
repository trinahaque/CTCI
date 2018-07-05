function checkPalindrome(inputString) {
    if (inputString.length == 1){
        return true;
    }
    var length = Math.floor(inputString.length/2);
    // console.log("length is ", length);
    for (var i = 0; i < length; i++){
        // console.log(inputString[i]);
        if (inputString[i] != inputString[inputString.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome("aaabaaaa"));
console.log(checkPalindrome(""));