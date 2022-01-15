/**
 * the teacher's solution had 2 loops which is very brilliant, so in every loop for every element, we are re-looping the array
 * the teacher is just swapping positions - unlike my own where i like to hold onto the aPointer
*/
function bubbleSort(array) {
    const length = array.length

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                // swap numbers
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
}