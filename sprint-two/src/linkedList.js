var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (this.head === null) {
      this.head = Node(value);
      this.tail = this.head;
    } else {
      var oldTail = this.tail;
      this.tail = Node(value);
      oldTail.next = this.tail;
    }
  };

  list.removeHead = function(){
    var hold = this.head;
    delete this.head;
    this.head = hold.next;
    return hold.value;
  };

  list.contains = function(target){
    var start = this.head;
    while (start !== null) {
      if (start.value === target) {
        return true;
      } else {
        start = start.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
   addToTail and removeHead are constant O(1)
   contains is linear O(n)
 */
