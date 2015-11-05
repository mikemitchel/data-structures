var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instanceOf = Object.create(queueMethods);
  instanceOf.storage = {};
  instanceOf.nextInLine = 0;
  instanceOf.lastInLine = 0;

  return instanceOf;

};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.lastInLine] = value;
    this.lastInLine++
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


