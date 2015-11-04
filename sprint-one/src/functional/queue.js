var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var itemNumber= 0;
  var nextInQueue = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[itemNumber] = value;
    itemNumber++;
};

  someInstance.dequeue = function(){
    var next = storage[nextInQueue];
    delete storage[nextInQueue];
    nextInQueue++;
    return next;
  };

  someInstance.size = function(){
    var count = 0;
    for (var k in storage) {
      count++;
    }
    return count;
  };

  return someInstance;
};


// var newqueue = Queue();
// newqueue.enqueue(obj)
