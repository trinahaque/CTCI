function maxOccuranceCharacter(str){
    if (str.length < 2){
        return str;
    }
    var map = new Map();
    for (var i = 0; i < str.length; i++){
        if (!map[str[i]]){
            map[str[i]] = 1;
        }
        else {
            map[str[i]]++;
        }
    }
    var count = 0;
    var max;
    for (key in map){
        if (map[key] > count){
            count = map[key];
            max = key;
        }
    }
    return max;
}

console.log(maxOccuranceCharacter("abbabcacbdeeeeeee"));