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

SLL.prototype.size = function(){
    var size = 0;
    var current = this.head;
    while (current){
        size++;
        current = current.next;
    }
    return size;
}


// find kth to the last node
SLL.prototype.kthLast = function(k){
    var length = this.size();
    var count = 0;
    var current = this.head;
    while (current){
        if (k == 0 && current.next == null){
            return current.val;
        }
        if (count == length - k){
            return current.val;
        }
        count++;
        current = current.next;
    }
}


var sll = new SLL();
sll.add(1).add(2).add(3).add(4).add(5).add(6).add(7).add(8).add(9);
console.log(sll.kthLast(8));