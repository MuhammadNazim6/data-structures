class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Stack_LL{
  constructor(){
    this.top = null
    this.size = 0
  }

  push(value){
    const newNode = new Node(value)
    if(!this.top){
      this.top = newNode
    }else{
      newNode.next = this.top
      this.top = newNode
    }
    this.size++
  }

  pop(){
    if(!this.top){
      return 'Stack underflow'
    }else{
      this.top = this.top.next
      this.size--
    }
  }

  peek(){
    return this.top.value
  }
  print(){
    let output = ''
    let curr = this.top
    for(let i = 0 ; i < this.size ; i++){
      output += `${curr.value} `
      curr = curr.next
    }
    console.log(output);
  }
}


const stack = new Stack_LL()
stack.push(1)
stack.push(2)
stack.push(5)
stack.print()
stack.pop()
stack.print()