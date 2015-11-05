var Queue = function(){
  var someInstance = {};
  someInstance.storage = {};
  someInstance.nextInLine = 0;
  someInstance.lastInLine = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.lastInLine] = value;
    this.lastInLine++;
  },
  dequeue: function() {
    var hold = this.storage[this.nextInLine];
    delete this.storage[this.nextInLine];
    this.nextInLine++;
    return hold;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};



