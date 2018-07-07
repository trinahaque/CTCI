// 4.8) Similar to problem in CTCI book
// Given a BST, find the lowest common ancestor between them

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

BST.prototype.lowestCommonAncestor = function(node1, node2){
      if (!this.root){
          return null;
      }
      return this.root.lowestCommonAncestor(node1, node2);
}

BSTNode.prototype.lowestCommonAncestor = function(node1, node2){
      if (node1.val > this.val && node2.val > this.val){
          return this.right.lowestCommonAncestor(node1, node2);
      }
      else if (node1.val < this.val && node1.val < this.val){
          return this.left.lowestCommonAncestor(node1, node2);
      }
      else{
          return this;
      }
}

// in order traversal
BST.prototype.inOrder = function(){
  if (!this.root){
    return null;
  }
  return this.root.inOrder();
}

BSTNode.prototype.inOrder = function(){
  if (!this){
    return;
  }
  if (this.left){
    this.left.inOrder();
  }
  console.log(this.val);
  if (this.right){
    this.right.inOrder();
  }
}

bst = new BST();
bst.add(10).add(30).add(-10).add(8).add(6).add(9);
var node1 = new BSTNode(6);
var node2 = new BSTNode(9);
// console.log(bst.lowestCommonAncestor(node1, node2));
console.log(bst.inOrder());