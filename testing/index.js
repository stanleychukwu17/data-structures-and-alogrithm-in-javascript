// this is an adjacentList graph
class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {}
    }

    // adds a new node to the graph
    addVertex(node) {
        const nodes = Object.keys(this.adjacentList);

        if (!nodes.includes(node)) {
            this.adjacentList[node] = []
            this.numberOfNodes++;
        }
        return nodes
    }

    // this is an undirected graph
    addEdge(node1, node2) {
        const nodes = Object.keys(this.adjacentList);
        if (!nodes.includes(node1)) { return 'node 1 is not a graph node' }
        if (!nodes.includes(node2)) { return 'node 2 is not a graph node' }

        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)
        return this.adjacentList[node1]
    }

    // displays all of the nodes and it's connections
    showConnections () {
        const nodes = this.adjacentList
        let toLog, x

        for (x in nodes) {
            toLog = `${x} --> ${nodes[x].join(', ')}`
            console.log(toLog)
        }
    }
}

const myGraph = new Graph()
myGraph.addVertex(0)
myGraph.addVertex(1)
myGraph.addVertex(2)
myGraph.addVertex(3)
myGraph.addVertex(4)
myGraph.addVertex(5)
myGraph.addVertex(6)

myGraph.addEdge('3', '1')
myGraph.addEdge('3', '4')
myGraph.addEdge('4', '2')
myGraph.addEdge('4', '5')
myGraph.addEdge('1', '2')
myGraph.addEdge('1', '0')
myGraph.addEdge('0', '2')
myGraph.addEdge('6', '5')
// console.log(myGraph)
myGraph.showConnections()