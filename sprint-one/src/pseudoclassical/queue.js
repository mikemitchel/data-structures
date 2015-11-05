var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.nextInLine = 0;
  this.lastInLine = 0;

};

Queue.prototype.enqueue = function (value) {
  this.storage[this.lastInLine] = value;
  this.lastInLine++;
}

Queue.prototype.dequeue = function () {
  var hold = this.storage[this.nextInLine];
  delete this.storage[this.nextInLine];
  this.nextInLine++;
  return hold;
}

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
}

