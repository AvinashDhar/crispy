/*
Graph is a custom data structure meaning it is not available in JS like we do have Object, Array etc...
Graph is a non linear data structure
Graph has mainly two components
    1. Vertex (or node)
    2. Edge (connection between two vertex)
Edges can have direction, based on the direction, Graph can be classified into two types
    1. Directed Graph
    2. Un-directed Graph
Graphs can be represented in two different ways:
    1. Adjacency matrix
    2. Adjacency list

Adjacency Matrix - it is a 2D array of size VxV where V is the number of vertices in the graph.

                B
               / \
              /   \
             A     C

-> matrix representation of the above graph:

    A B C

A   0 1 0
B   1 0 1
C   0 1 0

->representation of the above matrix in JS using 2D array:

const matrix = [
    [0,1,0],
    [1,0,1],
    [0,1,0]
]
            
console.log(matrix[0,1]) //this will return 1 which tells us that there is an edge/connectivity between the vertex A and B

Adjacency list

In this vertices are stored in a map like data structure, where every vertex stores the list of its adjacent vertices

Adjacency list of the previous graph in JS:

const adjacencyList = {
    'A' : ['B'],
    'B' : ['A', 'C'],
    'C' : ['B']
}

console.log('list of adjacent vertex for B', adjacencyList['B'])      // returns ['A','C']


==============Graph implementation in JS (adding vertex, adding edge, display, has edge...)=====================


class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()   //we can use [] as well but to have more handling we are using Set.
        }
    }

    addEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)

    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex," -> ", [...this.adjacencyList[vertex]])
        }
    }
    
    hasEdge(vertex1, vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
           this.removeEdge(vertex, adjacentVertex) 
        }
        delete this.adjacencyList[vertex]
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A','B');
graph.addEdge('B','C');
graph.display();
// graph.removeEdge('A','B');
// console.log("after removing edge between a and b");
// graph.display();
// graph.removeVertex('A');
// console.log("after removing vertex A");
//graph.display();

============================================================================================


*/
