var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var instanceOf = Object.create(stackMethods);
instanceOf.storage = {};
instanceOf.topItem = 0;

return instanceOf;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.topItem] = value;
    this.topItem++;
  },
  pop: function() {
    this.topItem--;
    var hold = this.storage[this.topItem];
    delete this.storage[this.topItem];
    return hold;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


