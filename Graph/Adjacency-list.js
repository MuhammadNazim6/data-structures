class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(source, destination) {
    if (!this.adjacencyList[source]) {
      this.adjacencyList[source] = [];
    }
    if (!this.adjacencyList[destination]) {
      this.adjacencyList[destination] = [];
    }
    this.adjacencyList[source].push(destination)
    this.adjacencyList[destination].push(source)
  }

removeEdge(source,destination){
  this.adjacencyList[source] = this.adjacencyList[source].filter((ver)=>ver !== destination)
  this.adjacencyList[destination] = this.adjacencyList[destination].filter((ver)=>ver !== source)
}

removeVertex(vertex){
  while(this.adjacencyList[vertex].length > 0){
    let adjacentVertex = this.adjacencyList[vertex].pop()
    this.removeEdge(vertex,adjacentVertex)
  }
  delete this.adjacencyList[vertex]
}

  getNeighbours(vertex) {
    return this.adjacencyList[vertex];
  }
}
