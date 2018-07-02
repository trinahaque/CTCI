// Write a program to sort a stack such that the smallest items are on the top. You can use an additional 
// temporary stack, but you may not copy the elements into any other data structure. The stack supports the 
// following operations: push, pop, peek, and isEmpty

// creating a stack class
function Stack(){
    this.stack = [];
}

// pushing an item
Stack.prototype.push = function(val){
    this.stack.push(val);
    return this;
}

// popping an item
Stack.prototype.pop = function(){
    if (this.stack.length < 1){
        return null;
    }
    // this.stack.length -= 1;
    // return this;
    return this.stack.pop();
}

// peek returns the top most elements in the stack, but doesn't delete it
Stack.prototype.peek = function(){
    if (this.stack.length < 1){
        return null;
    }
    return this.stack[this.stack.length - 1];
}

// isEmpty determines if the stack is empty
Stack.prototype.isEmpty = function(){
    return this.stack.length == 0;
}