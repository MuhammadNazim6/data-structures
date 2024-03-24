class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Queue{
  constructor(){
    this.front = null
    this.rear = null
    this.size = 0
  }

  enqueue(value){
    const newNode = new Node(value)
    if(!this.front){
      this.front = newNode
      this.rear = newNode
    }else{
      this.rear.next = newNode
      this.rear = newNode
    }
    this.size++
  }


  dequeue(){
    const dequeuedNode = this.front
    this.front = dequeuedNode.next
    this.size--
  }

  print(){
    let output = ''
    let curr = this.front
    for(let i = 0 ; i < this.size ; i++){
      output += `${curr.value} `
      curr = curr.next
    }
    console.log(output);
  }
}

const queue = new Queue()
queue.enqueue(333)
queue.enqueue(111)
queue.enqueue(444)

queue.print()
queue.dequeue()

queue.print()
