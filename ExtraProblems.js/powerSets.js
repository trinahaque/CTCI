function strSubSet(arr, map, count) {
    if (!map){
      map = {};
      count = arr.length;
    }
    map[arr] = true;
    // console.log(map);
  
    for (var i=0; i < arr.length; i++){
      var left = arr[0, i];
      var right = arr[i+1, arr.length - 1];
      // console.log(map);
      map = strSubSet(left, map, count) + strSubSet(right, map, count);
    }
    if (arr.length == count){
      // if statement is only hit when the for loops are done
      return map;
    }
  }
  
  console.log(strSubSet([1,2,3]));