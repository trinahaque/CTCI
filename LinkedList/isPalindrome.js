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


// given a linked list, determine if it's palindrome
// On space. n/2 for stack and n/2 for queue
// 2 1/2 n time
// n to count
// n/2 to make stack
// n/2 to make queue
// n/2 to compare values

SLL.prototype.isPalindrome = function(){
    if (!this.head){
        return null;
    }
    var count = 0;
    var current = this.head;
    // finding the length of the sll
    while (current){
        count++;
        current = current.next;
    }
    if (count == 1){
        return true;
    }
    // need the higher value from the mid if the length is odd
    var mid = Math.ceil(count / 2);
    // console.log("mid ", mid);
    var stack = [];
    var queue = new Queue();
    current = this.head;
    var odd = false;
    if (count % 2 != 0){
        odd = true;
    }

    while (count > mid){
        stack.push(current.val);
        current = current.next;
        count--;
    }
    // console.log(stack);
    // console.log("current is ", current.val);
    if (odd){
        current = current.next;
    }
    // console.log("current is ", current.val);
    while (current){
        queue.enqueue(current.val);
        current = current.next;
    }
    // console.log("q ", queue);
    while (stack.length != 0){
        if (stack.pop() != queue.dequeue()){
            return false;
        }
    }
    return true;
    
}

function Queue(){
    this.head = null;
    this.length = 0;
  }
  
  function Node(val){
    this.val = val;
    this.next = null;
  }
  
Queue.prototype.enqueue = function(val){
    var node = new Node(val);
    if (!this.head){
      this.head = node;
      this.tail = node;
      this.length += 1;
      return this;
    }
    this.tail.next = node;
    this.tail = this.tail.next;
    this.length += 1;
    this.tail.next = null;
    return this;
}
  
Queue.prototype.dequeue = function(){
    if (!this.head){
      return null;
    }
    var tmp = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length == 0){
      this.tail = null;
    }
    return tmp.val;
}




var sll = new SLL();
sll.add("t").add("a").add("c").add("o").add("c").add("a").add("t");
console.log(sll.isPalindrome());