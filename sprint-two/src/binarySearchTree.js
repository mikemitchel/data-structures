var BinarySearchTree = function(value){
  var tree = Object.create(biTreeMethods);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  tree.dupes = 0;


  return tree;
};

var biTreeMethods = {};

biTreeMethods.insert = function(value) {

  if (value === this.value) {
    this.dupes++;
  } else if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
}

biTreeMethods.contains = function(target) {

}

biTreeMethods.depthFirstLog = function(cb) {

}


/*
 * Complexity: What is the time complexity of the above functions?
 */
