/**
 * Once again, My recursive approach below is not the best and like i said in the note, this is the fault of the teacher, the way he explained the problem was the cause
 *
*/
function fibonacciRecursive (n) {
    // i was going use an object as the variable n.. and pass all the informations i needed through the object
    // the second option was to track the number of times i had recursed through the function using a global variable
    // but all of my solutions above are very poor in comparison with the other solution (i.e the teacher's solution in this case)
}

/**
 * My iterative approach below is not the best and like i said in the note, this is the fault of the teacher, the way he explained the problem was the cause
 * So in my solution, i started from 0 and worked my way upwards until i got to the target number.. the teacher solution is the best and that's what i'll be using if
 * asked this same question in an interview, but i feel like mine is a bit more solid because my for loop has no base case
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