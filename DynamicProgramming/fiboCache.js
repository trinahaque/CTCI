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

// console.log(fibonacci(8));

// function fibonacciNormal(n){
//     if (n == 0 || n == 1){
//         return n;
//     }
//     return fibonacciNormal(n-1) + fibonacciNormal(n - 2);
// }

// console.log(fibonacciNormal(0));
// console.log(fibonacciNormal(1));
// console.log(fibonacciNormal(2));
// console.log(fibonacciNormal(3));
// console.log(fibonacciNormal(4));
// console.log(fibonacciNormal(5));
// console.log(fibonacciNormal(6));


function fib(n){
    this.memo = [];
    return this.fibonacci(n);
}

fib.prototype.fibonacci = function(n){
    // console.log("memo ", memo);
    if (this.memo[n]){
        return this.memo[n];
    }
    if (n == 0 || n == 1){
        this.memo[n] = n;
    }
    else{
        this.memo[n] = this.fibonacci(n-1) + this.fibonacci(n-2);
    }
    return this.memo[n];
}

console.log(fib(6));