const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function selectionSort (array) {
    let length = array.length

    for (let i = 0; i < length; i++) {
        let smallest = array[i]
        let finalSmallest = smallest
        let finalPostion = 0

        for (let j = i; j < length; j++) {
            /**
             * the code below could be factorized, that is we remove the finalSmallest varaible and instead use the finalPostion to access the finalSmallest value
            */
            if (array[j] < finalSmallest) {
                finalSmallest = array[j];
                finalPostion = j
            }
        }

        // means we have a new minimum, So we swap the items
        if (finalPostion > 0) {
            array[i] = finalSmallest
            array[finalPostion] = smallest
        }

        console.log(smallest, finalSmallest, finalPostion, array.join(','), 'bom \n')
    }
}

selectionSort(numbers)