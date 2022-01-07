/*
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.


*/

// the teacher solution to this solution can be found at = https://replit.com/@aneagoie/Data-Structures-Queues-2-stacks
// he choose to use an array for his own, but i used a linked list to solve the problem and a linked list is not the best for ques

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
        return this.top && this.top.value
    }

    push (value) {
        const newNode = new Node(value)

        if (this.length == 0) {
            this.top = newNode
            this.bottom = this.top
        } else {
            this.bottom.next = newNode
            this.bottom = newNode
        }
        this.length++;
    }

    pop () {
        if (!this.top) { return null }

        if (this.top === this.bottom) { this.bottom = null }

        const holdingPointer = this.top
        this.top = this.top.next
        this.length--

        return holdingPointer.value
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
console.log(myStack.isEmpty())
myStack.printList()


// Twitter
// Discord
// Udemy
// Google