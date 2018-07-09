function numOfPathsToDest(n){
    if (n == 1){
        return 1;
    }
    var resultArray = [];
    for (var k = 0; k < n; k++){
        // creating a 2d array
        // each array inside resultArray will be a new array with n - 1 length starting from 0
        resultArray.push(new Array(n-1));
    }
    // initial value at (i,j) (0,0) is 0
    resultArray[0][0] = 0;
    
    // initialize all value in first row to 1
    for (var i = 1; i < n; i ++){
        resultArray[i][0] = 1;
    }

    // initialize all the value in first column to 1
    for (var j = 1; j < n; j++){
        resultArray[0][j] = 1;
    }

    // start calculating value from (1,1)
    // any value will be arr[i][j-1] + arr[i-1][j]
    for (var i = 1; i < n; i++){
        for (var j = 1; j < n; j++){
            resultArray[i][j] = resultArray[i - 1][j] + resultArray[i][j - 1];
        }
    }
    // return the result, not the array
    return resultArray[n-1][n-1];
}

console.log(numOfPathsToDest(5));


// Number of path using dynamic programming and memoization

function numOfPathParent(n){
    var memo = [];
    for (var k = 0; k < n; k++){
        // creating a 2d array
        // each array inside resultArray will be a new array with n - 1 length starting from 0
        memo.push(new Array(n-1));
    }

    for (var i = 1; i < n; i ++){
        for (var j = 1; j < n; j++){
            memo[i][j] = -1;
    }
    return numOfPathsToMemo(n-1, n-1, memo);
}

function numOfPathsToMemo(m, n, memo){
    if (m < 0 || n < 0){
        return 0;
    }
    else if (m < n){
        memo[m][n] = 0;
    }
    else if (memo[m][n] != -1){
        return memo[m][n];
    }
    else if (m == 0 || n == 0){
        memo[m][n] = 1;
    }
    else {
        memo[m][n] = numOfPathsToMemo(m - 1, n, memo) + numOfPathsToMemo(m, n - 1, memo);
    }
    return memo[m][n];
}}

console.log(numOfPathParent(5));
