// the class below creates a new node
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}


// implementing a stack with a linked list
class Stack {
    // the constructor creates the head and the tail of the linked list, also we store the total number of items in the list(i.e the this.length)
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0;
    }

    peek () {
        return this.top && this.top.value
    }

    push (value) {
        const newNode = new Node(value)

        if (this.length == 0) {
            this.top = newNode
            this.bottom = this.top
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++;
    }

    pop () {
        if (this.length == 0) {
            return null;
        } else if (this.length == 1) {
            const holdingPointer = this.top
            this.top = null
            this.bottom = null
            this.length--
            return holdingPointer
        } else {
            const toDeleteNode = this.top
            const newTop = toDeleteNode.next
            this.top = newTop
            this.length--
            return toDeleteNode
        }

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