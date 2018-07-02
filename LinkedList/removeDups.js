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

SLL.prototype.removeDups = function(){
    if (!this.head){
        return null;
    }
    return this.head.removeDups();
}

SLNode.prototype.removeDups = function(){
    var current = this;
    
    var val = current.val;
    // this does one iteration and one check for val
    while (current.next){
        // console.log("current in inner loop is ", current.val);
        if (current.next.val == val){
            current.next = current.next.next;
        }
        else{
            current = current.next;
        }
    }
}
  

var sll = new SLL();
sll.add(4).add(4).add(3).add(2).add(3).add(4);
sll.printRecursion();
console.log("after");
sll.removeDups();
sll.printRecursion();