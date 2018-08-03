// fibonacci without cache
function fib(n){
    if (n < 2){
        return n;
    }
    return fib(n-1) + fib(n-2);
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));


// fibonacci with cache
function fib2(n){
    var arr = [];
    function fib(n){
        if (arr[n]){
            return arr[n];
        }
        if (n < 2){
            arr[n] = n;
        }
        else{
            arr[n] = fib(n-1) + fib(n-2);
        }
        return arr[n];
    }
    return fib(n);
}

console.log(fib2(0));
console.log(fib2(1));
console.log(fib2(2));
console.log(fib2(3));
console.log(fib2(4));
console.log(fib2(5));
console.log(fib2(6));
