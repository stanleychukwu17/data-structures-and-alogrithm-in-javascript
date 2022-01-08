class Node {
    constructor (value) {
        this.value = value;
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null
    }

    insert (value) {
        const newNode = new Node(value)
        let continueTraverse = true
        let currentNode = null, where_to_attach_node

        if (this.root === null) {
            this.root = newNode
            return this
        } else {
            currentNode = this.root
        }

        while (continueTraverse) {
            if (value > currentNode.value) {
                if (currentNode.right === null) {
                    where_to_attach_node = 'right'
                    continueTraverse = false
                } else {
                    currentNode = currentNode.right
                }
            } else if (value < currentNode.value) {
                if (currentNode.left === null) {
                    where_to_attach_node = 'left'
                    continueTraverse = false
                } else {
                    currentNode = currentNode.left
                }
            }
        }

        // console.log(where_to_attach_node)
        if (where_to_attach_node === 'right') {
            currentNode.right = newNode
        } else if (where_to_attach_node === 'left') {
            currentNode.left = newNode
        }

        return this
    }

    lookup (value) {}

    remove (value) {}

}


// the function below is from the teacher to test if our binary tree is working, but am learning some things from his recursion ability here
function traverse(node) {
    const tree = {value: node.value}

    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)

    return tree
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(1)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(6)
// console.log(tree)
console.log(traverse(tree.root))