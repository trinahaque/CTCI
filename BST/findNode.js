function BST(){
    this.root = null;
}
function BSTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

// finding the node with the value in the tree
BST.prototype.findNode = function(val){
    if (!this.root){
        return null;
    }
    return this.root.findNode(val);
}

BSTNode.prototype.findNode = function(val){
    if (this.val == val){
        return true;
    }
    if (this.val < val && this.right){
        this.right.findNode(val);
    }
    else if (this.val > val && this.left){
        this.left.findNode(val);
    }
    return false;
}