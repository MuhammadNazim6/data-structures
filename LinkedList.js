class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.size = 0
  }
  isEmpty(){
    return this.size === 0
  }
  getSize(){
    return this.size
  }

  //for adding a new node at the beginning
  prepend(value){
    const node = new Node(value)
    if(!this.head){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
    }
    this.size++
  }

    //for adding a new node at the end
  append(value){
    const node = new Node(value)
    if(!this.head){
      this.head = node
    }else{
      let prev = this.head
      while(prev.next){
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }


  print(){
    if(!this.head){
      console.log('List is empty');
    }else{
      let curr = this.head
      let output = ''
      while(curr){
        output += `${curr.value} `
        curr = curr.next
      }
      console.log(output);
    }
  }

// Insertion at an index
insert(index , value){
  if(index < 0 || index > this.size){
    return 'Enter a valid index'
  }
  if(index === 0){
    this.prepend(value)
  }else{
    const node = new Node(value)
    let prev = this.head
    for(let i = 0 ; i < index - 1 ; i++){
      prev = prev.next
    }
    node.next = prev.next
    prev.next = node
    this.size ++
    return `${value} added at index ${index}`
  }
}

// Deletion at an index
removeFromIndex(index){
  if(index < 0 || index > this.size){
    return 'Enter a valid index'
  }
  let removedNode
  if(index === 0){
    removedNode = this.head
    this.head = this.head.next
  }else{
    let prev = this.head
    for(let i = 0 ; i < index-1 ; i++){
      prev = prev.next
    }
    removedNode = prev.next
    prev.next = removedNode.next
  }
  this.size--
  return removedNode.value
}

reverse(){
  let prev = null
  let current = this.head
  let next = null
  while(current != null){
    next = current.next
    current.next = prev
    prev = current
    current = next
  }
  this.head = prev
}
}



const LList = new LinkedList()
console.log(LList);
LList.prepend(23)
LList.prepend(89)
LList.prepend(256)
LList.append(90)
LList.append(70)
LList.append(60)
LList.append(40)


console.log(LList.insert(3 , 100));
console.log(LList.removeFromIndex(3));
LList.print()
LList.reverse()
LList.print()