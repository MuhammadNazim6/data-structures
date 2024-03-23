class Node{
  constructor(value){
    this.value = value
    this.prev = null
    this.next = null
  }
}

class doublyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }

 append(value){
  const newNode = new Node(value)
  if(!this.head){
    this.head = newNode
    this.tail = newNode
  }else{
    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
  }
  this.size++
 }

 prepend(value){
  const newNode = new Node(value)
  if(!this.head){
    this.head = newNode
    this.tail = newNode
  }else{
    this.head.prev = newNode
    newNode.next = this.head
    this.head = newNode
  }
  this.size++
 }

 printForward(){
  let current = this.head
  while(current){
    console.log(current.value);
    current = current.next
  }
 }

 printBackward(){
  let current = this.tail
  while(current){
    console.log(current.value);
    current = current.prev
  }
 }

 insertAt(index , value ){
  if(index < 0 || index > this.size){
    return 'enter a valid index'
  }
  if(index === 0 ){
    this.prepend(value)
  }else if(index === this.size ){
    this.append(value)
  }else{
    let prevInd = this.head
    for(let i = 0 ; i < index - 1 ; i++){
      prevInd = prevInd.next
    }
    const newNode = new Node(value)
    newNode.next = prevInd.next
    prevInd.next.prev = newNode
    prev.next = newNode
    newNode.prev = prevInd
    
  }
 }
}


const newDLL = new doublyLinkedList()
newDLL.append(99)
newDLL.append(22)
newDLL.append(45)
newDLL.prepend('prepended 33')

newDLL.insertAt(2,100)
newDLL.insertAt(2,11)

newDLL.printForward()
newDLL.printBackward()