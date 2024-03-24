const array = [11, 4, 55, 78, 90, 324];

function mergeSort(arr){
  if(arr.length < 2){
    return arr
  }
  let middInd = Math.floor(arr.length/2)
  let left = arr.slice(0,middInd)
  let right = arr.slice(middInd)

  return merge(mergeSort(left) , mergeSort(right))
}

function merge(left , right){
  let sorted = []
  while(left.length && right.length){
    if(left[0] <= right[0]){
      sorted.push(left.shift())
    }else{
      sorted.push(right.shift())
    }
  }
  return [...sorted , ...left ,...right]
}

console.log(mergeSort(array));