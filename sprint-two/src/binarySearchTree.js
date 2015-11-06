var BinarySearchTree = function(value){
  var tree = Object.create(biTreeMethods);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  tree.dupes = 0;

  return tree;
}

var biTreeMethods = {};

biTreeMethods.insert = function(value) {
  var pos = this.side(value);

  if (pos === 'exists') {
    this.dupes++;
  } else if (this[pos] === null) {
    this[pos] = BinarySearchTree(value);
  } else {
    this[pos].insert(value);
  }
}

biTreeMethods.side = function(value) {
   if (value < this.value) {
     return 'left';
   } else if (value > this.value) {
     return 'right';
   } else {
     return 'exists';
   }
}

biTreeMethods.contains = function(target) {
  var pos = this.side(target);

  if (pos === 'exists') {
    return true;
  } else if (this[pos] === null) {
    return false;
  } else {
    return this[pos].contains(target)
  }
}

biTreeMethods.depthFirstLog = function(cb) {

  cb(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }

}


/*
 * Complexity: What is the time complexity of the above functions?
 */
