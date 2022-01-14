function fibonacciRecursive (n) {
 
}

/**
 * My iterative approach below is not the best
 * 
 *
*/
function fibonacciIterative (n) {
    let total = 0
    let previous = 0
    let next = 1

    for (let i = 0; i <= n; i++) {
        total = next + previous

        if (i < n) {
            previous = next
            next = total
        }
    }

    return previous
}

fibonacciRecursive(12)