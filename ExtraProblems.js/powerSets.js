function powerSets(arr){
  var result = [[]];
  var newResult;
  
  for (var i = 0; i < arr.length; i++){
    newResult = [];
    for (var j = 0; j < result.length; j++){
      newResult.push(result[j] + arr[i]);
    }
    result = result + [newResult];
  }
  return result;
}

console.log(powerSets(1,2,3));