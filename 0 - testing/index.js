class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1;
    }

    append (value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++;
    }

    prepend (value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++;
    }

    get_the_node_before (index) {
        let Node;

    }

    insert (value) {
        const newNode = new Node(value)

    }

    printList() {
        const items = []
        let currentNode = this.head

        while (currentNode !== null) {
            items.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(items)
        return items
    }
}

const myList = new LinkedList(10);
myList.append(16)
myList.prepend(1)
// console.log(myList);
myList.printList()