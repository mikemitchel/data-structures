var Stack = function() {
var someInstance = {};

  someInstance.storage = {},
  someInstance.topItem = 0,
_.extend(someInstance, stackMethods);


return someInstance;
};

stackMethods = {
  push: function(value){
    this.storage[this.topItem] = value;
    this.topItem++;
  },
  pop: function(){
    this.topItem--;
    var save = this.storage[this.topItem];
    delete this.storage[this.topItem];
    return save;
  },
  size: function(){
    var count = 0;
    for (var k in this.storage) {
      count++;
    }
    return count;
  }
};
