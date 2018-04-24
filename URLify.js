// Write a method to replace all spaces in a string with '%20'. 
// You may assume that the string has sufficient space at the end to 
// hold the additional characters, and that you are given the "true" length of the string.

function urlIfy(input, val){
    var arr = input.split("");

    for (var i = 0; i < arr.length; i++){
        if (arr[i] == " "){
            arr[i] = "%20";
        }
    }
    
    var output = "";
    
    for (var j = 0; j < val; j++){
        output += arr[j];
    }
    return output;
}

console.log(urlIfy("Mr John Smith  ", 13));