 var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i); // the bucket object that can call get,set,each
  var found = false;

  if (!bucket) {
     bucket = [];
     this._storage.set(i, bucket);
  }
  // console.log(bucket.length);
  for (var j = 0; j < bucket.length; i++) {
    if (bucket[j][0] === key) {
      bucket[j][1] = value;
      found = true;
      break;
    }
  }

  if (!found) {
    bucket.push([key, value]);
  }

};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === key) {
        return bucket[j][1];
      }
    }
};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);

};


/*
 * Complexity: What is the time complexity of the above functions?
 HashTable constructor is O(1),
 insert is amortized constant O(1) (when buckets are full/threshold is met),
 retrieve is O(1),
 remove is O(1)
 */

