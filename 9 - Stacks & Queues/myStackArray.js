// the class below creates a new node
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.array = [];
    }

    peek () {
        return this.array[0]
    }

    push (value) {
        return this.array.unshift(value);
    }

    pop () {
        return this.array.shift();
    }

    isEmpty () {
        return this.array.length === 0
    }

    // gets all the items in the linked list and puts them into an array and prints the array out
    printList() {
        console.log(this.array, this.array.length)
        return this.array
    }
}

// testing the linked list
const myStack = new Stack();
myStack.push('Google')
myStack.push('Udemy')
myStack.push('Discord')
myStack.push('Twitter')
myStack.push('facebook')
myStack.printList()
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.peek())
myStack.printList()

// Twitter
// Discord
// Udemy
// Google