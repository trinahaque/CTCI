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

// reversing a linked list in place
SLL.prototype.reverse = function(){
    if (!this.head){
        return null;
    }
    else if (!this.head.next){
        return this;
    }
    else{
        var prev = null;
        var current = this.head;
        var next = current.next;

        while(next){
            current.next = prev;
            prev = current;
            current = next;
            next = current.next;
        }
        current.next = prev;
        this.head = current;
        return this;
    }
}

var sll = new SLL();
sll.add(1);
sll.add(1).add(2).add(3).add(4).add(5);
console.log(sll.reverse());