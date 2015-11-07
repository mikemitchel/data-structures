 var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._collisions = {};
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  if (this._storage[i] !== value && this._storage[i] !== null && this._storage[i] !== undefined) {
    this._collisions[key] = value;
  } else {
    this._storage[i] = value;
  }
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  if (this._collisions.hasOwnProperty(key)) {
    return this._collisions[key];
  } else {
    return this._storage[i];
  }
};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  this._storage[i] = null;
};


/*
 * Complexity: What is the time complexity of the above functions?
 HashTable constructor is O(1),
 insert is amortized constant O(1) (when buckets are full/threshold is met),
 retrieve is O(1),
 remove is O(1)
 */



