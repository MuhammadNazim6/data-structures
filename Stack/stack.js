class Stack{
  constructor(){
    this.items = []
    this.size = 0 
}

isEmpty(){
  return this.size === 0
}

push(value){
  this.items.push(value)
      // OR //
      this.items[this.size] = value
      // OR //
  this.size++

}

pop(){
  // this.items.pop()
     // OR //
  let removedValue = this.items[this.size- 1]
  for(let i = this.size-1 ; i > 0 ; i--){
    this.items[i] = this.items[i-1] 
  }
  this.size--
  this.items.length = this.size
  return removedValue
}

print(){
  console.log(this.items);
}

}


const newStack = new Stack()
newStack.push(1)
newStack.push(2)
newStack.push(3)

newStack.print()

newStack.pop()
newStack.pop()

newStack.print()