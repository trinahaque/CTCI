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

// removing a node
BST.prototype.delete = function(val){
    if (!this.root){
        return null;
    }
    return this.root.delete(val);
}

BSTNode.prototype.delete = function(val){
    var dict = this.findNode(val);
    // dict is an object. It should have found(true/false), parent, side, node
    if (dict.found){
        // deleting a leaf node, set the parent node side to null
        if (!dict.node.left && !dict.node.right){
            dict.parent.side = null;
        }
        // if deleted node only has once child, connect the parent node side to child
        else if (!dict.node.left && dict.node.right){
            dict.parent.side = dict.node.right;
        }
        else if (!dict.node.right && dict.node.left){
            dict.parent.side = dict.node.left;
        }
        // if node has both children, connect the parent to the min of the right node
        // find the left most of the min node. Connect the right child of the found 
        // node to the left side of the leftmost node
        else if (dict.node.left && dict.node.right){
            // connect the parent to the right child of the node
            dict.parent.side = dict.node.right;
            var leftMostNode = dict.node.right.leftMost();
            leftMostNode.left = dict.node.left;
        }

    }
    return null;
}


// find the left most Node
BST.prototype.leftMost = function(){
    if (!this.root){
        return null;
    }
    return this.root.leftMost();
}

BSTNode.prototype.leftMost = function(){
    if (!this.left){
        return this;
    }
    return this.left.leftMost();
}