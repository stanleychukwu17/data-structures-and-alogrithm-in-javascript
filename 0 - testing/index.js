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

    remove (index) {
        const nodeBefore = this.get_the_node_before(index - 1)
        const toDeleteNode = nodeBefore.next
        nodeBefore.next = toDeleteNode.next
        this.length--
        return this
    }

    reverse () {
        const list = this.printList().reverse()
        const headNode = new Node(list[0])
        let tailNode = headNode
        let currentNode = headNode
        let itemNode;

        console.log('before ', this.printList())
        console.log('after reverse', this.printList())
        console.log( currentNode, tailNode)
        for (let i = 0; i < list.length; i++) {
            itemNode = new Node(list[i])
            currentNode.next = itemNode
            currentNode = itemNode;
            tailNode = itemNode;
        }

        console.log('final', headNode)
    }

    reverse_within_range (index, range) {

    }

    printList() {
        const items = []
        let currentNode = this.head

        while (currentNode !== null) {
            items.push(currentNode.value)
            currentNode = currentNode.next
        }
        // console.log(items, this.length)
        return items
    }
}

const myList = new LinkedList(10);
myList.append(16)
myList.append(17)
myList.append(18)
myList.prepend(1)
myList.insert(4, 22)
myList.printList()
myList.reverse()
// console.log(myList.tail)