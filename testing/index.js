const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function selectionSort (array) {
    let length = array.length

    for (let i = 0; i < length; i++) {
        let smallest = array[i]
        let finalSmallest = smallest
        let finalPostion = 0

        for (let j = i; j < length; j++) {
            if (array[j] < finalSmallest) {
                finalSmallest = array[j];
                finalPostion = j
            }
        }

        if (finalPostion > 0) {
            array[i] = finalSmallest
            array[finalPostion] = smallest
        }

        console.log(smallest, finalSmallest, finalPostion, array.join(','), 'bom \n')

    }
}

selectionSort(numbers)