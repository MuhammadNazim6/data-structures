class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null
  }

  isEmpty(){
    return this.root === null
  }

  insert(value){
    const node = new Node(value)
    if(!this.root){
      this.root = node
    }else{
      this.insertNode(this.root , node)
    }
  }

  insertNode(root,node){
    if(node.value < root.value){
      if(root.left === null){
        root.left = node
      }else{
        this.insertNode(root.left,node)
      }
    }else{
      if(root.right === null){
        root.right = node
      }else{
        this.insertNode(root.right , node)
      }
    }
  }

  search(value){
    return this.searchNode(this.root , value)
  }
  searchNode(root , value){
    if(!root){
      return false
    }else{
      if(root.value === value){
        return true
      }else if(value < root.value){
        return this.searchNode(root.left , value)
      }else if(value > root.value){
        return this.searchNode(root.right , value)
      }else{
        return false
      }
    }
  }

  preOrder(root){
    if(root){
      console.log(root.value);
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }

  postOrder(root){
    if(root){
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.value);
    }
  }

  inOrder(root){
    if(root){
      this.inOrder(root.left)
      console.log(root.value);
      this.inOrder(root.right)
    }
  }

  levelOrder(){
    const queue = []
    queue.push(this.root)
    while(queue.length){
      let current = queue.shift()
      console.log(current.value);
      if(current.left){
        queue.push(current.left)
      }
      if(current.right){
        queue.push(current.right)
      }
    }
  }


  min(root){
    if(!root){
      return false
    }
    if(!root.left){
      return root.value 
    }else{
      return this.min(root.left)
    }
  }

  max(root){
    if(!root){
      return false
    }
    if(!root.right){
      return root.value
    }else{
      return this.max(root.right)
    }
  }

  // delete(value){
  //   this.root = this.deleteNode(this.root,value)
  // }
  // deleteNode(root,value){
  //   if(!root){
  //     return root
  //   }
  


isEqual(root1, root2){
  if(root1 === null && root2 === null){
    return true
  }
  if(root1 === null || root2 === null){
    return false
  }
  if(root1.value !== root2.value ){
    return false
  }
  return this.isEqual(root1.left , root2.left) && this.isEqual(root2.right , root2.right)
}
}



const bst = new BinarySearchTree()
const bst2 = new BinarySearchTree()

bst.insert(12)
bst.insert(16)
bst.insert(19)
bst.insert(1)


bst2.insert(12)
bst2.insert(16)
bst.insert(19)
bst2.insert(1)


console.log(bst.search(199));

bst.preOrder(bst.root)
// bst.postOrder(bst.root)
// bst.inOrder(bst.root)

console.log(bst.isEqual(bst.root , bst2.root ));


console.log(bst.min(bst.root));
console.log(bst.max(bst.root));


