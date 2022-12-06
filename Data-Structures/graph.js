// undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // we can handle if the vertex is existing
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  removeVertex(v) {
    while (this.adjacencyList[v].length) {
      const adjVtx = this.adjacencyList[v].pop();
      this.removeEdge(v, adjVtx);
    }
    delete this.adjacencyList[v];
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyListGraph = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyListGraph[vertex].forEach(neighbor => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);

    return result;
  }

  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

export default Graph;

let graph = new Graph();

graph.addVertex('Tokyo');
graph.addVertex('Delhi');
graph.addVertex('Mumbai');
graph.addVertex('New York');

graph.addEdge('Mumbai', 'Delhi');
graph.addEdge('Tokyo', 'New York');

let graph2 = new Graph();

graph2.addVertex('A');
graph2.addVertex('B');
graph2.addVertex('C');
graph2.addVertex('D');
graph2.addVertex('E');
graph2.addVertex('F');

graph2.addEdge('A', 'B');
graph2.addEdge('A', 'C');
graph2.addEdge('B', 'D');
graph2.addEdge('C', 'E');
graph2.addEdge('D', 'E');
graph2.addEdge('D', 'F');
graph2.addEdge('E', 'F');

graph2.depthFirstRecursive('A');
graph2.depthFirstIterative('A');
/* 
 graph2

        A
      /   \
     B     C
     |     |
     D --- E
      \   /
        F

adjacencyList = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'E'],
  D: ['B', 'E', 'F'],
  E: ['D', 'F', 'C'],
  F: ['D', 'E'],
};

*/
