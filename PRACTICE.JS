

function heapify(arr,length,parent){
  let largest=parent
  let left=2*parent+1
  let right=left+1
  if(left<length && arr[left]>arr[largest]){
      largest=left
  }
  if(right<length && arr[right]>arr[largest]){
      largest=right
  }
  if(largest!==parent){
      [arr[largest],arr[parent]]=[arr[parent],arr[largest]]
      heapify(arr,length,largest)
  }
}
function heapSort(arr){
  let length=arr.length
  let parent=Math.floor(length/2)-1
  let child=arr.length-1
  while(parent>=0){
      heapify(arr,length,parent)
      parent--
  }
  while(child>=0){
      [arr[0],arr[child]]=[arr[child],arr[0]]
      heapify(arr,child,0)
      child--
  }
  return arr
}
console.log(heapSort([4,6,3,2,9]))