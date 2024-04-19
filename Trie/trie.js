class Node{
  constructor(value){
    this.value = value
    this.isEndofWord = false
    this.children = {}
  }
}

class Trie{
  constructor(){
    this.root = new Node(null)
  }

  insert(word){
    let current = this.root
    for(let character of word){
      if(current.children[character] === undefined){
        current.children[character] = new Node(character)
      }
      current = current.children[character]
    }
    current.isEndofWord = true
  }

  search(word){
    let current = this.root
    for(let character of word){
      if(current.children[character] === undefined ){
        return false
      }
      current = current.children[character]
    }
    return current.isEndofWord
  }

  startWith(prefix){
    let curr = this.root
    for(let character of prefix){
      if(!curr.children[character]){
        return false
      }
      curr = curr.children[character]
    }
    return true
  }

  autoComplete(prefix){
    let curr = this.root
    for(let character of prefix){
      if(!curr.children[character]){
        return []
      }
      curr = curr.children[character]
    }
    return this.collectWords(curr , prefix)
  }


  collectWords(curr , prefix){
    let words = []
    if(curr.isEndofWord){
      words.push(prefix)
    }
    for(let char in curr.children){
      words = words.concat(this.collectWords(curr.children[char] , prefix+char))
    }
    return words
  }
}

const trie = new Trie()
trie.insert('Apple')
trie.insert('Appu')
trie.insert('Appstore')
trie.insert('Applom')
trie.insert('Ap')
console.log(trie.search('Applee'));
console.log(trie.startWith('App'));

console.log(trie.autoComplete('Apk'));