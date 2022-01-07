// the class below creates a new node
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class StackLinkedList {
    // the constructor creates the head and the tail of the linked list, also we store the total number of items in the list(i.e the this.length)
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1;
    }

    peek () {
    }

    push (value) {
    }

    pop () {
    }

    // gets all the items in the linked list and puts them into an array and prints the array out
    printList() {
        const items = []
        let currentNode = this.head

        while (currentNode !== null) {
            items.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(items, this.length)
        return items
    }
}

// testing the linked list
const myStack = new StackLinkedList(10);
