// Write a program to sort a stack such that the smallest items are on the top. You can use an additional 
// temporary stack, but you may not copy the elements into any other data structure. The stack supports the 
// following operations: push, pop, peek, and isEmpty

function sortStack(stack1){
    var stack2 = new Stack();
    while (!stack1.isEmpty){
        var tmp = stack1.pop();
        while (!stack2.isEmpty() && tmp < stack2.peek()){
            stack1.push(stack2.pop());
        }
        stack2.push(tmp);
    }
    // console.log("stack2 length", stack2.length);
    return stack2;
}



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

var stack1 = new Stack();
stack1.push(7).push(2).push(8).push(3).push(5);
console.log(sortStack(stack1));