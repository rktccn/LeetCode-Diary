var kthLargestNumber = function (nums, k) {
  let temp = [];
  // 基数排序
  var mod = 10;
  var dev = 1;
  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / dev);
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      counter[bucket].push(arr[j]);
    }
    var pos = 0;
    for (var j = 0; j < counter.length; j++) {
      var value = null;
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }

  console.log(temp);
};
console.log(
  kthLargestNumber(
    [
      "995782",
      "2146786691",
      "617",
      "95289226",
      "118242253",
      "941438",
      "34981",
      "399229959",
      "1",
      "19",
    ],
    2
  )
);
