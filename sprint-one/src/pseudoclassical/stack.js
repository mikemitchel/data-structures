var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.topItem = 0;

};

Stack.prototype.push = function (value) {
  this.storage[this.topItem] = value;
  this.topItem++;
}

Stack.prototype.pop = function () {
  this.topItem--
  var hold = this.storage[this.topItem];
  delete this.storage[this.topItem];
  return hold;
}

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
}


Queue.prototype.peek = function () {
  return this.storage[this.topItem];
}


