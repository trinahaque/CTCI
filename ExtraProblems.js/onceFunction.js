// write a function that takes a function as the argument, and returns a fuction that calls the
// original function once. If the returned fuction is called a second time, it should not do 
// anything

// var anotherFunction = function(){
//     console.log("hello");
// }

// var onceFunction = (function(anotherFunction){
//     return anotherFunction;
// })();

// console.log(onceFunction);

function sayHello(){
    console.log("hello");
}
var callback = function(){
    console.log("hello");
}

var onceFunction = (function(callback){
    return callback;
})();

console.log(onceFunction);
console.log(onceFunction);
// console.log(sayHelloOnce);
// console.log(sayHelloOnce);