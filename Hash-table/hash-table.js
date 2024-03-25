
class HashTable{
  constructor(size){
    this.table = new Array(size)
    this.size = size
  }

  hash(key){
    let total = 0
  key = key.toString()
  for(let i = 0; i < key.length; i++){
    total += key.charCodeAt(i)
  }
  return total % this.size
  }

  set(key, value){
    const index = this.hash(key)
    this.table[index] = value
  }

  get(key){
    const index = this.hash(key)
    return this.table[index]
  }

  remove(key){
    const index = this.hash(key)
    this.table[index] = undefined
  }

  display(){
    for(let i = 0; i < this.size ; i++){
      if(this.table[i]){
        console.log(this.table[i]);
      }
    }
  }
}

const hash = new HashTable(9)
hash.set(1,'My')
hash.set(2,'Name')
hash.set(3,'is')
hash.set(5,'Yo')
hash.set('Yes','This is yes')

hash.display()

console.log(hash.get(3));
console.log(hash.get('Yes'));