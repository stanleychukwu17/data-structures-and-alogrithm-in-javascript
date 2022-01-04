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
        let node = this.head;
        for (let i = 1; i < index; i++) { node = node.next }
        return node
    }

    insert (index, value) {
        const newNode = new Node(value)
        const nodeBefore = this.get_the_node_before(index)
        newNode.next = nodeBefore.next
        nodeBefore.next = newNode
        this.length++
        return this;
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
myList.append(17)
myList.append(18)
myList.append(19)
myList.prepend(1)
myList.insert(4, 22)
// console.log(myList);
myList.printList()