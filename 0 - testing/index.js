// the class below creates a new node
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
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
        this.tail.next = newNode // since the tail is the last item, we make the new node to be the new tail
        this.tail = newNode
        this.length++;
    }

    // attaches a new node to the begining of the linked list
    prepend (value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++;
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
        newNode.next = nodeBefore.next
        nodeBefore.next = newNode
        this.length++
        return this;
    }

    // deletes a node from the linked list
    remove (index) {
        const nodeBefore = this.get_the_node_before(index - 1) // get the node before the one we want to delete
        const toDeleteNode = nodeBefore.next // the next one is the one we're deleting
        nodeBefore.next = toDeleteNode.next // once we skip the current node by jumping it, since there is no other pointer to the object/node, the javascript gabage collector deletes the object and reclaims the space in the memory
        this.length--
        return this
    }

    reverse () {
        const list = this.printList().reverse()
        const headNode = new Node(list[0])
        let tailNode = headNode
        let currentNode = headNode
        let itemNode;

        for (let i = 1; i < list.length; i++) {
            itemNode = new Node(list[i])
            currentNode.next = itemNode
            currentNode = itemNode;
            tailNode = itemNode;
        }

        this.head = headNode;
        this.tail = tailNode;
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
        console.log(items, this.length)
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
myList.printList()
// console.log(myList.tail)