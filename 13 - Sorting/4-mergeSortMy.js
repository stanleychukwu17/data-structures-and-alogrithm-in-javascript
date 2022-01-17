// const numbers = [99, 44, 6, 2, 1, 5, 63, 44, 87, 283, 4, 0, 17]
const numbers = [99, 44, 6, 2, 1, 5, 63, 44, 87, 283, 4, 0]
for (let i = 0; i < 1100; i++) { numbers.push(99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0) }
let t0 = performance.now()

// this is a helper function that merges the left and right items in two different arrays
function mergeLeftAndRight(left, right, level) {
    /**
     * in order to merge these two arrays, we do not have an option than to do a double for loop here, except we wanted to use inbulit js methods to merge both and then
     * - sort them, we could have done
     * let merger = [...left, ...right], then (perform an insertion sort here | or we do merge.sort())
     * i tried the for loop, but that was going to be even more complicated, so i'll merge both arrays and then perform and insertion sort since the arrays are smaller and
     * - as the array grows bigger(they are sorted as well, i.e we're sorting bigger arrays that almost sorted because we're recursively performing the insertion sort)
    */
    const both = [...left, ...right]
    const length = both.length
    let currentNumber

    // this console.log() below gives you a sense of what the tree looks like and the level of operation on the tree
    // console.log('merging ', left.join(', '), ' with ', right.join(', '), level)

    // performs an insertion sort
    for (let i = 0; i < length; i++) {
        currentNumber = both[i]

        if (currentNumber < both[0]) {
            // move number to the first position
            both.unshift(both.splice(i, 1)[0])
        } else {
            // find where number should go
            for (let j = 1; j < i; j++) {
                if (currentNumber > both[j-1] && currentNumber <= both[j]) {
                    // move the number to the right spot
                    both.splice(j, 0, both.splice(i, 1)[0])
                }
            }
        }
    }

    return both
}

function mergeSort (array) {
    if (array.length <= 1) return array

    const half = array.length / 2
    const left = array.slice(0, half)
    const right = array.slice(half)

    // console.log(left)
    // console.log(right)
    return mergeLeftAndRight(mergeSort(left), mergeSort(right), {'level':half})
}

const jim = mergeSort(numbers)
// console.log('main', numbers.join(', '))
// console.log('small', jim.join(', '))

let t1 = performance.now()
console.log(t1 - t0)