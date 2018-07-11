BST.prototype.isBST = function(){
    if (!this.root){
        return false;
    }
    return this.root.isBST(Infinity, Infinity);
}
BSTNode.prototype.isBST = function(min, max){
    if (this == null){
        return true;
    }
    else if (this.val < min || this.val > max){
        return false;
    }
    else{
        return this.left.isBST(min, this.val) && this.right.isBST(this.val, max);
    }

}


function BST(){
    this.root = null;
}
  
function BSTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}
  
BST.prototype.add = function(val){
    if (!this.root){
      this.root = new BSTNode(val);
      return this;
    }
    this.root.add(val);
    return this;
}
  
BSTNode.prototype.add = function(val){
    var node = new BSTNode(val);
    if (val == this.val){
      return this;
    }
    if (val < this.val){
      if (!this.left){
        this.left = node;
        return this;
      }
      else{
        this.left.add(val);
      }
    }
    else{
      if (!this.right){
        this.right = node;
        return this;
      }
      else{
        this.right.add(val);
      }
    }
}

bst = new BST();
bst.add(30).add(20).add(40).add(10).add(25).add(35).add(50);
console.log(bst.isBST());