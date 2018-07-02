function SLL(){
    this.head = null;
    this.length = 0;
}
  
function SLNode(val){
    this.val = val;
    this.next = null;
}

SLL.prototype.deleteMiddleNode = function(){
    if (!this.head){
        return null;
    }
    return this.head.deleteMiddleNode();
}

SLNode.prototype.findMiddleNode = function(){
    // find the size of the sll first and then determine middle
    var count = 0;
    var current = this;
    while (current){
        count++;
        current = current.next;
    }
    // console.log("count is ", count);
    var middleNode = Math.floor(count / 2);
    
    console.log("middle node is ", middleNode);
    return middleNode;
}

SLNode.prototype.deleteMiddleNode = function(){
    var count = 0;
    var current = this;
    var middleNode = this.findMiddleNode();
    while (current.next){
        count++;
        if (count == middleNode){
            current.next = current.next.next;
        }
        current = current.next;
    }
    return SLL;
}
  
SLL.prototype.add = function(val){
    var new_node = new SLNode(val);
    if (!this.head){
        this.head = new_node;
        this.tail = new_node;
        this.length += 1;
        return this;
    }
    var current = this.head;
    while (current.next){
        current = current.next;
    }
    current.next = new_node;
    this.tail = new_node;
    this.length += 1;
    return this;
}

SLL.prototype.printRecursion = function(){
    if (!this.head){
      return null;
    }
    return this.head.printRecursion();
}

SLNode.prototype.printRecursion = function(){
    console.log(this.val);
    if (this.next){
      return this.next.printRecursion();
    }
}

var sll = new SLL();
sll.add("a").add("b").add("c").add("d").add("e").add("f");
sll.deleteMiddleNode();
sll.printRecursion();