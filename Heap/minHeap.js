class min_Heap{
  constructor(){
    this.data = []
  }

  getParentIndex(i){
    return Math.floor(i - 1 /2)
  }
  getLeftChildIndex(i){
    return i*2 +1
  }
  getRightChildIndex(i){
    return i*2 +2
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
    let currentIndex = this.data.length - 1
    while(this.data[currentIndex] < this.data[this.getParentIndex(currentIndex)]){
      this.swap(currentIndex , this.getParentIndex(currentIndex))
      currentIndex = this.getParentIndex(currentIndex)
    }
  }

  poll(){
    this.data[0] = this.data[this.data.length -1 ]
    this.data.length --
    this.heapifyDown()
  }

  heapifyDown(){
    let currIndex = 0
    while(this.data[this.getLeftChildIndex(currIndex)] != undefined){
      let smallestIndex = this.getLeftChildIndex(currIndex)
      if( this.data[this.getRightChildIndex(currIndex)] && 
      this.data[this.getRightChildIndex(currIndex)] < this.data[this.getLeftChildIndex(currIndex)]  ){
        smallestIndex = this.data[this.getRightChildIndex(currIndex)]
      }

      if(this.data[smallestIndex] < this.data[currIndex]){
        this.swap(smallestIndex, currIndex)
      }else{
        return
      }
    }
  }
}


const minHeap = new min_Heap()
minHeap.push(25)
minHeap.push(5)
minHeap.push(40)
minHeap.push(90)

minHeap.poll()

console.log(minHeap);