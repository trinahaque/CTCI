
// Implement a method to perform basic string compression usingt he counts of repeated characters. 
// For example, the string aabcccccaaa would  becomea2b1c5a3. If the "compressed" string would not 
// become smaller than the original string, your method should return the original string. You can
// assume the string has only uppercase and lowercase letters (a-z).
// O(n) solution

function stringCompression(str){

    if (str.length < 1){
        return str;
    }

    var val = 0;
    var result = "";

    for (var i = 0; i <str.length; i++){
        if (str[i] !== result[result.length -1]){
            if (val !== 0){
                result += val;
            }
            result += str[i];
            val = 1;
        }
        else{
            val ++;
        }
    }
    result += val;

    if (result.length > str.length){
        return str;
    }
    return result;
}

console.log(stringCompression("aa"));