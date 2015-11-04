var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var topItem = 0;
  // Implement the methods below
  someInstance.push = function(value){
    storage[topItem] = value;
    topItem++;
  };

  someInstance.pop = function(){
    topItem--;
    var hold = storage[topItem];
    delete storage[topItem];
    return hold;
  };

  someInstance.size = function(){
    var count = 0;
    for (var k in storage) {
      count++
    }
    return count;
  };

  return someInstance;
};
