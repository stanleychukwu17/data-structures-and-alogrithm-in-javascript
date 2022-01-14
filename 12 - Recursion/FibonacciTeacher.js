function fibonacciIterative (n) {
    let arr = [0, 1]

    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i-1] + arr[i-2])
    }

    return arr[n]
}

function fibonacciRecursive (n) {
    if (n < 2) {
        return n
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}