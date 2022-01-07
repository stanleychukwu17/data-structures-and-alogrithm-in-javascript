// the class below creates a new node
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0;
    }

    peek () {
        return this.top
    }

    push (value) {
        const newNode = new Node(value)

        if (this.length == 0) {
            this.top = newNode
            this.bottom = newNode
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }

        this.length++;
        return this
    }

    pop () {
        if (!this.top) { return null }

        if (this.top === this.bottom) {
            this.bottom = null
        }

        this.top = this.top.next
        this.length--

        return this
    }

    isEmpty () {
        return this.length === 0
    }

    // gets all the items in the linked list and puts them into an array and prints the array out
    printList() {
        const items = []
        let currentNode = this.top

        while (currentNode !== null) {
            items.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(items, this.length)
        return items
    }
}

// testing the linked list
const myStack = new Stack();
myStack.push('Google')
myStack.push('Udemy')
myStack.push('Discord')
myStack.push('Twitter')
myStack.printList()


// Twitter
// Discord
// Udemy
// Google