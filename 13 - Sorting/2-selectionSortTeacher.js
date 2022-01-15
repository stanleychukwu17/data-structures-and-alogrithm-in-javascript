const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function selectionSort (array) {
    let length = array.length

    for (let i = 0; i < length; i++) {
        // set the current index as minimum
        let min = i
        let temp = array[i]

        // start the search from the item after the current minimum index
        for (let j = i+1; j < length; j++) {
            if (array[j] < array[min]) {
                // update the minimum if current value is lower than our saved minimum
                min = j
            }
        }

        array[i] = array[min]
        array[min] = temp
    }

    return array
}

selectionSort(numbers)