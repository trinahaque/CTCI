// The FBI needs an efficient method to decrypt messages. Write a function named decrypt(word) that 
// receives a string that consists of small latin letters only, and returns the decrypted word.
// Convert every letter to its ASCII value. Add 1 to the first letter, and then for every letter from the second 
// one to the last one, add the value of the previous letter. Subtract 26 from every letter until it is in the 
// range of lowercase letters a-z in ASCII. Convert the values back to letters.

// For instance, to encrypt the word “crime”
// Decrypted message:	c	r	i	m	e
// Step 1:	99	114	105	109	101
// Step 2:	100	214	319	428	529
// Step 3:	100	110	111	116	113
// Encrypted message:	d	n	o	t	q

// Encrypting crime should return dnotq
// Decrypting dnotq should return crime


function encrypt(word){
    var result = "";
    var val = 1;
    var ascii_Val;
    var new_val;

    for (var i = 0; i < word.length; i++){
        // gives us the ascii value of the character
        ascii_val = word.charCodeAt(i);
        // add the previous value of the previous character to the current ascii value
        val = ascii_val + val;
        new_val = val;
        while (new_val > "z".charCodeAt(0)){
            new_val -= 26;
        }
        result += String.fromCharCode(new_val);
    }
    return result;
}

// console.log("Encrypted message is ", encrypt("crime"));

function decrypt(word){
    var result = "";
    var prevVal = 1;

    for (var i = 0; i < word.length; i++){
        ascii_val = word[i].charCodeAt(0);
        // console.log("ascii_val", ascii_val);
        val = ascii_val - prevVal;
        // console.log("val is ascii ", val);
        while (val < "a".charCodeAt(0)){
            val += 26;
        }
        console.log("val is ", val);
        result += String.fromCharCode(val);
        // you do want to know what the value is after adding the range
        prevVal += val;
        console.log("prev_val is ", prevVal);
    }
    return result;
}

console.log(decrypt("dnotq"));