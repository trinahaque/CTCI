// write a function that takes a function as the argument, and returns a fuction that calls the
// original function once. If the returned fuction is called a second time, it should not do 
// anything

// Does it have anything to do with callback?
function once(callback){
    return this.once();
}