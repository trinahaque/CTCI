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
  

var sll = new SLL();
sll.add(4).add(4).add(3).add(2).add(3).add(4);
sll.printRecursion();