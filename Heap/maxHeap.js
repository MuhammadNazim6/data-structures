class Heap{
  constructor(){
    this.data = []
  }

  getParentIndex(i){
    return Math.floor(i-1/2)
  }

  getLeftChild(i){
    return i * 2 +1
  }

  getRightChild(i){
    return i * 2 + 2
  }

  swap(i1 , i2){
    const temp = this.data[i1]
    this.data[i1] = this.data[i2]
    this.data[i2] = temp
  }


  push(key){
    this.data[this.data.length] = key
    this.heapifyUp()
  }

  heapifyUp(){
    let currIndex = this.data.length - 1
    while(this.data[currIndex] > this.data[this.getParentIndex(currIndex)]){
      this.swap(currIndex , this.getParentIndex(currIndex))
      currIndex = this.getParentIndex(currIndex)
    }
  }

  
  poll(){
    const maxValue = this.data[0]
    this.data[0] = this.data[this.data.length - 1]
    this.data.length --
    this.heapifyDown()
    return maxValue
  }

  heapifyDown(){
    let currIndex = 0
  
      while(this.data[this.getLeftChild(currIndex)] !== undefined){
        let biggestIndex = this.getLeftChild(currIndex)

        if( this.data[this.getRightChild(currIndex)]  &&
        this.data[this.getRightChild(currIndex)]  > this.data[this.getLeftChild(currIndex)] ){
          biggestIndex = this.getRightChild(currIndex) 
        }

        if(this.data[currIndex] < this.data[biggestIndex]){
          this.swap(currIndex , biggestIndex)
          currIndex = biggestIndex
        }else{
          return
        }

      }
    }


    heapSort(array){
      const heap = new Heap()
      for(let i = 0 ; i < array.length ; i++){
        heap.push(array[i])
      }
      let sortedArr = [] 
      while(heap.data.length > 0){
        sortedArr.push(heap.poll())
      }
      return sortedArr
    }


}
const heap = new Heap()
// heap.push(25)
// heap.push(5)
// heap.push(40)
// heap.push(90)


// console.log(heap.poll());
// console.log(heap.poll());

// console.log(heap);

console.log(heap.heapSort([1,2000,55,623]));