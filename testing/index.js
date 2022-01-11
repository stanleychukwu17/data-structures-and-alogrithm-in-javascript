class Node {
    constructor (value) {
        this.value = value;
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    // the new root has a null three until a new one is added
    constructor () {
        this.root = null
    }

    // inserts a new item to the tree
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
            if (value == currentNode.value) {
                continueTraverse = false
                where_to_attach_node = 'none'
            } else if (value > currentNode.value) { // if value received is greater than current node value, then we're moving to the right, else we moving to the left
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
        } else if (where_to_attach_node === 'none') {
            console.log('we found a duplicate sir')
        }

        return this
    }

    // gets an item from the bst and also return the level where we found the node
    lookup (value) {
        let currentNode = this.root
        let continueTraverse = true
        let step = 1
        let the_end
        let prevNode = null

        while (continueTraverse) {
            if (value === currentNode.value) {
                the_end = {found: true, step, currentNode, prevNode}
                continueTraverse = false
            } else if (value > currentNode.value) { // moving to the right side of the tree
                if (currentNode.right === null) {
                    the_end = {found:false}
                    continueTraverse = false
                } else {
                    prevNode = currentNode
                    currentNode = currentNode.right
                }
            } else if (value < currentNode.value) { // moving to the left side of the tree
                if (currentNode.left === null) {
                    the_end = {found:false}
                    continueTraverse = false
                } else {
                    prevNode = currentNode
                    currentNode = currentNode.left
                }
            }
            step++;
        }

        return the_end
    }

    // removes and item from the bst and then re-organizes the BST
    remove (value) {
        /**
         * we first have check if the node we want to delete exist, if it does then we pick up the node and all it's children and then we also pick up the direct parent node,
         * so we can use the parent node to delete the node when we're done
        */
        let {found, currentNode, prevNode} = this.lookup(value)

        let lastChild // we will use this variable to get the node that we will use to replace the currentNode we want to delete
        let nodeBeforeLastChild // the node before the last child
        let continueTraverse = true
        if (!found) { return 'Invalid node value received' }


        // the lastChild will be used to traverse all the nodes to get the last leaf node that is greater than the currentNode we're going to delete
        lastChild = currentNode
        if (currentNode.right !== null) {
            // there should be an error here, try to delete 170
            lastChild = currentNode.right
        }

        // we start a search for the last node on the left side
        while (continueTraverse) {
            if (lastChild.left === null) { // no more left childs so we stop the travesing and return the lastChild
                continueTraverse = false
            } else {
                nodeBeforeLastChild = lastChild // updates the node so we know that this one comes before the lastchild we're looking for
                lastChild = lastChild.left // moves on to the next left child
            }
        }

    
        // updates the right and left children of the lastChild, remember that the lastChild is node that is replacing the the currentNode that we are deleting
        lastChild.right = currentNode.right // inheriting all the children on the right
        lastChild.left = currentNode.left // inheriting all the children on the left

        // since we're technically deleting(i.e moving) the lastChild, we have to update it's parent(i.e the nodeBeforeLastChild), we replace the lastChild with null
        if (nodeBeforeLastChild) {
            if (nodeBeforeLastChild.right.value == value) { // means the lastChild is on the right
                nodeBeforeLastChild.right = null
            } else if (nodeBeforeLastChild.left.value == value) { // means the lastChild is on the left
                nodeBeforeLastChild.left = null
            }
        }


        // console.log(lastChild)
        // console.log('next')
        // console.log(nodeBeforeLastChild)

        // console.log('prevous mode')
        // console.log(prevNode)

        // now we delete the currentNode that we are suppose to delete(i.e the value recieved), and we do this by skipping the object in the JS memory
        if (prevNode) {
            // we have to replace the currentNode depending on what side of the tree(either it's on the right or left side of the tree)
            if (prevNode.right.value == value) {
                prevNode.right = lastChild
            } else if (prevNode.left.value == value) {
                prevNode.left = lastChild
            }
        } else {
            // since there is no previous node, it means we deleted the root element
            this.root = lastChild
        }

        console.log(this.root)
    }
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
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.insert(17)
tree.insert(14)
tree.insert(190)
tree.insert(160)
tree.insert(140)
tree.insert(165)
// console.log(tree)

tree.remove(20)
// console.log(traverse(tree.root))

// console.log(tree.lookup(170))
/*

*/