
const array = [1, 2, 3, 4, 5, 6, 7, 78, 99]

function binarySearch(target){
  let leftInd = 0 
  let rightInd = array.length - 1
  while(leftInd <= rightInd){
    let middleInd = Math.floor((leftInd+rightInd)/2)
    if(target === array[middleInd]){
      return true
    }
    if(target < array[middleInd]){
      rightInd = middleInd - 1
    }else{
      leftInd = middleInd + 1
    }
  }
  return false;
}

console.log(binarySearch(7));