class Queue{
  constructor(value){
    this.items = []
    this.size = 0
  }

  enqueue(value){
    // this.items.push(value)  
    //or
    this.items[this.size] = value
    this.size++
  }

  dequeue(){
    let removedNode = this.items[0]
    // this.items.shift()   //or
    for(let i = 0 ; i < this.size -1; i++){
      this.items[i] = this.items[i+1]
    }
    this.size--
    this.items.length = this.size
    return removedNode
  }

  print(){
    console.log(this.items);
  }
} 


const queue = new Queue()
queue.enqueue(12)
queue.enqueue(13)
queue.enqueue(14)
queue.enqueue(15)

queue.print()

queue.dequeue()
queue.dequeue()

queue.print()
