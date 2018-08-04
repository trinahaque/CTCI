function SLL(){
    this.head = null;
    this.length = 0;
}

function SLNode(val){
    this.val = val;
    this.next = null;
}

SLL.prototype.add = function(val){
    var new_node = new SLNode(val);
    if (!this.head){
        this.head = new_node;
    //   this.tail = new_node;
        this.length += 1;
        return this;
    }
    var current = this.head;
    while (current.next){
        current = current.next;
    }
    current.next = new_node;
    // this.tail = new_node;
    this.length += 1;
    return this;
}


// print SLL in reverse order using recursion
SLL.prototype.reversePrint = function(){
    if (!this.head){
        return null;
    }
    return this.head.reversePrint();
}

// print SLL in reverse order
SLNode.prototype.reversePrint = function(){
    // last node in SLL
    if (!this.next){
        console.log(this.val);
        return;
    }
    this.next.reversePrint();
    console.log(this.val);
    return;
}


// print SLL in regular order using recursion
SLL.prototype.print = function(){
    if (!this.head){
        return null;
    }
    return this.head.print();
}

SLNode.prototype.print = function(){
    // print the first value
    console.log(this.val);
    // then print the next value
    if (this.next){
        this.next.print();
    }
    // finish when there is no next
    return;
}


var sll = new SLL();
sll.add(1).add(2).add(3).add(4).add(5);
sll.print();
console.log("Reverse");
sll.reversePrint();