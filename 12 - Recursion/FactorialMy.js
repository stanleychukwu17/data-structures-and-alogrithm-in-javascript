function findFactorialRecursive (item) {
    if (item > 1) {
        return item * findFactorialRecursive(item - 1)
    } else {
        return 1
    }
}

const findFactorialIterative = (item) => {
    let factorial = item
    item--

    while (item > 0) {
        factorial = factorial * item
        item--
    }

    return factorial
}

const jones = findFactorialIterative(5)
console.log('answer myOwn', jones)