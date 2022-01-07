// let's create a helper class that would create a new node and return the node and it's value
// we can do it in two ways, am not the biggest fan of classes, but for the sake of keeping up with the industry standard, we'll do it the classy way
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

// or we can do
const createNode = (value) => ({value, next:null})
// console.log(new Node(15), createNode(15)) - they are both prototypes of Object in javascript.. In JS, a class is still an Object

// Since javascript doesn't come with an in-built LinkedList, we have to build our own
class DoublyLinkedList {

    // we create the head and the tail of the linked list and as-well save the length of items in our linked list
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head
        this.length = 1;
    }

    // appends a {node and it's value} to the end of the linked list
    append(value) {
        const newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    // prepends a {node and it's value} to the begining of the linked list
    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this
    }

    // prints all of the items in our linked list in an array
    printList() {
        const allItems = []
        let currentNode = this.head

        while (currentNode && currentNode.value) {
            allItems.push(currentNode.value)
            currentNode = currentNode.next
        }

        return allItems
    }


    // traverses to the index where we want to insert a node
    traverseToIndex(index) {
        let counter = 0
        let currentNode = this.head

        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }

        return currentNode
    }

    // inserts at a particular position in the linked list
    insert(index, newItem) {
        if (index >= this.length) { return this.append(newItem) }
        const newNode = new Node(newItem)
        const leader = this.traverseToIndex(index - 1)

        // read your note book for proper explanation on the lines below
        const holdingPointer = leader.next
        leader.next = newNode;
        newNode.next = holdingPointer
        this.length++;
        return this
    }

    // removes an item from the linked list
    remove(index) {
        const leader = this.traverseToIndex(index - 1)
        const unWantedNode = leader.next
        leader.next = unWantedNode.next
        this.length--
        return this
    }

}

const myList = new DoublyLinkedList(10);
myList.append(16)
myList.prepend(1)
myList.insert(2, 99)
myList.insert(2, 55)
myList.insert(4, 44)
myList.remove(3)
// console.log(myList.printList())
