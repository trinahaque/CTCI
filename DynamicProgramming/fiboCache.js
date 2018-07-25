function fibonacci(n){
    if (memo[n]){
        return memo[n];
    }
    if (n == 1 || n == 0){
        memo[n] = n;
    }
    else{
        memo[n] = fibonacci[n - 1] + fibonacci[n - 2];
    }
    return memo[n];
}

console.log(fibonacci(8));

var fibonacci = (function(n){
    var memo = [];
    return function(n, memo){
        if (memo[n]){
            return memo[n];
        }
        if (n == 1 || n == 0){
            memo[n] = n;
        }
        else{
            memo[n] = fibonacci[n - 1] + fibonacci[n - 2];
        }
        return memo[n];
    };
}());

console.log(fibonacci(8));