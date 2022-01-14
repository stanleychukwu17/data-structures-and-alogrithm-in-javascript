function fibonacciRecursive (n) {
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

    console.log(previous)
}

function fibonacciIterative (n) {

}

fibonacciRecursive(12)