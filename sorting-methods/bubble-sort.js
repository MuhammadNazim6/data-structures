const array = [11,4,55,78,90,324]

function bubbleSort(arr){
  let swapped
  do {
    swapped = false
    for(let i = 0 ; i < arr.length-1 ; i++){
      if(arr[i] > arr[i+1]){
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        swapped = true
      }
    }
  } while (swapped);
  return arr
}

console.log(bubbleSort(array));