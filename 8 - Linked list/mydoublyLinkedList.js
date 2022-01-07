// the class below creates a new node
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    // the constructor creates the head and the tail of the linked list, also we store the total number of items in the list(i.e the this.length)
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1;
    }

    // attaches a new node to the end of the linked list
    append (value) {
        const newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    // attaches a new node to the begining of the linked list
    prepend (value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this
    }

    //gets the node(i.e an item) before a certian index
    get_the_node_before (index) {
        let node = this.head; // this.head is the complete list of nodes
        for (let i = 1; i < index; i++) { node = node.next } // loops through the nodes until we get to the index we are looking for
        return node
    }

    // attaches a new node at a particular index
    insert (index, value) {
        const newNode = new Node(value)
        const nodeBefore = this.get_the_node_before(index)
        const nodeAfter = nodeBefore.next
        newNode.next = nodeAfter
        newNode.prev = nodeBefore
        nodeBefore.next = newNode
        nodeAfter.prev = newNode

        this.length++
        return this;
    }

    // deletes a node from the linked list
    remove (index) {
        const nodeBefore = this.get_the_node_before(index - 1) // get the node before the one we want to delete
        const nodeAfter = nodeBefore.next.next // gets the node after the one we want to delete

        nodeBefore.next = nodeAfter // we move the next pointer to the node after the node we're deleting
        nodeAfter.prev = nodeBefore // we move the pointer of the previous from the node after - now we have finally deleted the node because nothing is point to the node anymore
    
        this.length--
        return this
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
const myList = new LinkedList(10);
myList.append(16)
myList.append(17)
myList.prepend(1)
myList.insert(2, 15)
myList.remove(3)
console.log(myList)
myList.printList()
// myList.append(17)
// myList.append(18)
// myList.printList()
// myList.reverse()
// console.log(myList.tail)