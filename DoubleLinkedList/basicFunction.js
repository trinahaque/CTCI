// insert, delete, find head

function DLL(){
    this.head = null;
    this.tail = null;
}

function DLLNode(val){
    this.val = val;
    this.next = null;
    this.tail = null;
}

DLL.prototype.insert = function(val){
    var newNode = new DLLNode(val);
    if (!this.head){
        this.head = newNode;
    }
    var current = this.head;
    while (current.next){
        current = current.next;
    }
    current.next = newNode;
    newNode.prev = current;
}