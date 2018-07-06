function BST(){
    this.root = null;
}

function BSTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

// BST.prototype.createMinHeight = function(arr){
//     var start = 0;
//     var end = arr.length - 1;
//     this.root = new BSTNode(arr[(start + end)/2])
//     return this.root.createMinHeight(arr, start, end);
// }

BSTNode.prototype.createMinHeight = function(arr){
    return this.root.createMinHeight(arr, 0, arr.length - 1);
}

BSTNode.prototype.createMinHeight = function(arr, start, end){
    if (end < start){
        return null;
    }
    var mid = (start+end) / 2;
    var node = new BSTNode(arr[mid]);
    this.left = this.createMinHeight(arr, start, mid - 1);
    this.right = this.createMinHeight(arr, mid + 1, end);
    return this;
}

