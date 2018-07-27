function BST(){
    this.root = null;
}

function BSTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function Queue(){

}

// Level Order traversal or Breadth First Search in BST
// Use a queue for this


BST.prototype.levelOrderTraversal = function(){
    if (!this.root){
        return null;
    }
    var queue = new Queue();
    var node;
    queue.enqueue(this.root);
    while (!queue.isEmpty){
        // node is the reference to the node in the tree
        node = queue.dequeue();
        console.log(node.val);
        if (node.left){
            queue.enqueue(node.left);
        }
        if (node.right){
            queue.enqueue(node.right);
        }
    }
    return this;
}