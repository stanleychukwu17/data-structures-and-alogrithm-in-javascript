// the class below creates a new node
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

// implenting Queues using linked list
class Queues {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0;
    }

    peek () {
        return this.first
    }

    enqueue (value) {
        const newNode = new Node(value)
        if (this.length == 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode // since the last is the last item, we make the new node to be the new last
            this.last = newNode
        }

        this.length++;
    }

    dequeue() {
        if (!this.first) { return null }

        if (this.first === this.last) {
            this.last = null
        }

        this.first = this.first.next
        this.length--
        return this
    }

    isEmpty () {
        return this.length === 0
    }

    // gets all the items in the linked list and puts them into an array and prints the array out
    printList() {
        const items = []
        let currentNode = this.first

        while (currentNode !== null) {
            items.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(items, this.length)
        return items
    }
}

// testing the linked list
const myQueue = new Queues();
myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
myQueue.enqueue('Samir')
myQueue.printList()


// Joy
// Matt
// Pavel
// Samir