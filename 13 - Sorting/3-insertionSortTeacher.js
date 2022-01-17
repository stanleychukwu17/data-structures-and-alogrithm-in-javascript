const numbers = [99, 44, 6, 2, 1, 5, 63, 44, 87, 283, 4, 0]

function inserstionSort (array) {
    const length = array.length
    let currentNumber

    for (let i = 0; i < length; i++) {
        currentNumber = array[i]

        if (currentNumber < array[0]) {
            // move number to the first position
            array.unshift(array.splice(i, 1)[0])
        } else {
            // find where number should go
            for (let j = 1; j < i; j++) {
                if (currentNumber > array[j-1] && currentNumber <= array[j]) {
                    // move the number to the right spot
                    array.splice(j, 0, array.splice(i, 1)[0])
                }
            }
        }
    }
}

// call the function
inserstionSort(numbers)
console.log(numbers)