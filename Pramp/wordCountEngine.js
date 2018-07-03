// Implement a document scanning function wordCountEngine, which receives a string document and returns a list of all unique words 
// in it and their number of occurrences, sorted by the number of occurrences in a descending order. If two or more words have the 
// same count, they should be sorted according to their order in the original sentence. Assume that all letters are in english 
// alphabet. You function should be case-insensitive, so for instance, the words “Perfect” and “perfect” should be considered the 
// same word.

// The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.

// Analyze the time and space complexities of your solution. Try to optimize for time while keeping a polynomial space complexity.

// Word Count Engine
// input:  document = "Practice makes perfect. you'll only
//                     get Perfect by practice. just practice!"

// output: [ ["practice", "3"], ["perfect", "2"],
//           ["makes", "1"], ["youll", "1"], ["only", "1"], 
//           ["get", "1"], ["by", "1"], ["just", "1"] ]

function wordCountEngine(document) {
    // your code goes here
    
    // removing punctuation
    var cleanWord = document.replace(/[^A-Za-z0-9\s]/g,"").replace(/\s{2,}/g, " ").toLowerCase();
    // console.log("clean document is ", cleanWord);
    var cleanWordArray = cleanWord.split(' ');
    // console.log("clean document is ", cleanWordArray);

    var wordMap = new Map();
    var largestCount = 0;
    var count;

    // 0(N) time where N is the number of words in document
    for (var i = 0; i < cleanWordArray.length; i++){
        if (cleanWordArray[i] in wordMap){
            count = wordMap[cleanWordArray[i]];
            count++;
        }
        else{
            count = 1;
        }
        wordMap[cleanWordArray[i]] = count;
        // console.log("word is ", cleanWordArray[i], "count ", count, "type ", typeof(cleanWordArray[i]));
        // if (largestCount < count){
        //     largestCount = count;
        // }
    }
    // console.log("map is ", wordMap);
    var result = [];
    for (key in wordMap){
        // console.log(key);
        result.push([key, wordMap[key]]);
        // result.push(word);
    }
    console.log("result is ", result);

    // sorting takes O(M) times where M is the number of words in clean array
    // time complexity O(M+N)
    // space complexity is O(M)
}

wordCountEngine("Practice makes perfect. you'll only get Perfect by practice. just practice!");