function BST(){
    this.root = null;
}
function BSTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

// finding minimum node
BST.prototype.minNode = function(){
    if (!this.root){
        return null;
    }
    return this.root.minNode();
}

BSTNode.prototype.minNode = function(){
    if (!this.left){
        return this;
    }
    return this.left.minNode();
}


// finding maximum node
BST.prototype.maxNode = function(){
    if (!this.root){
        return null;
    }
    return this.root.maxNode();
}

BSTNode.prototype.maxNode = function(){
    if (!this.right){
        return this;
    }
    return this.right.maxNode();
}