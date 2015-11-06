var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  // var answer = false;
  // if (this.value === target) {
  //   return true;
  // } else {
  //   _.each(this.children, function(child) {
  //      if (child.contains(target)) {
  //        answer = true;
  //      }
  //   });
  //   return answer;
  // }
  if (this.value === target) {
    return true;
  } else {
    return _.reduce(this.children, function(answer, child) {
      if (answer) {
        return true;
      }
      return child.contains(target);
    }, false)
  }


};




/*
 * Complexity: What is the time complexity of the above functions?
 *  .addChild O(1) and .contains is  O(n)
 */
