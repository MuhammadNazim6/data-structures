class Node {
  constructor(value) {
    this.children = {};
    this.value = value;
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node(null);
  }

  insert(word) {
    let curr = this.root;
    for (let char of word) {
      if (curr.children[char] === undefined) {
        curr.children[char] = new Node(char);
      }
      curr = curr.children[char];
    }
    curr.isEndOfWord = true;
  }

  search(word) {
    let curr = this.root;
    for (let char of word) {
      if (curr.children[char] === undefined) {
        return false;
      } else {
        curr = curr.children[char];
      }
    }
    return curr.isEndOfWord;
  }

  startsWith(prefix) {
    let curr = this.root;
    for (let char of prefix) {
      if (curr.children[char] === undefined) {
        return false;
      }
      curr = curr.children[char];
    }
    return true;
  }

  autoComplete(prefix) {
    let curr = this.root;
    for (let character of prefix) {
      if (!curr.children[character]) {
        return [];
      }
      curr = curr.children[character];
    }
    return this.collectWords(curr, prefix);
  }

  collectWords(curr, prefix) {
    let words = [];
    if (curr && curr.isEndOfWord) {
      words.push(prefix);
    }
    for (let char of Object.keys(curr.children)) {
      words = words.concat(
        this.collectWords(curr.children[char], prefix + char)
      );
    }
    return words;
  }
}

const trie = new Trie();
trie.insert("nazim");
trie.insert("nazi");

console.log(trie.autoComplete("hi"));


