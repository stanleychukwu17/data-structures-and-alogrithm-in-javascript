// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
const numbers = [99, 44, 6, 2, 1, 5, 63, 44, 87, 283, 4, 0]

function inserstionSort (array) {
    let length = array.length
    let sortedArray = []
    sortedArray.push(array[0])

    for (let i = 1; i < length; i++) {
        let firstItem = sortedArray[0]
        let lastItem = sortedArray[sortedArray.length - 1]
        let currentItem = array[i]

        console.log('checking for ', currentItem)
        if (currentItem > lastItem) {
            console.log('yes sir')
            sortedArray.push(currentItem)
        } else if (currentItem < firstItem) {
            sortedArray = [currentItem, ...sortedArray]
        } else {
            let temp = []
            let index = 0
            let item

            while (sortedArray[index]) {
                item = sortedArray[index]

                if (currentItem <= item) {
                    temp.push(currentItem)
                    break
                }

                // if (index > 11) {
                //     break
                // }

                temp.push(item)
                index++
            }

            // console.log(temp, index, 'the temp \n')
            // console.log('before slice', sortedArray.join(','))
            sortedArray = [...temp, ...sortedArray.slice(index)]
            // console.log(sortedArray.join(','), '\n')
        }
        console.log('after checking ', sortedArray.join(', '), '\n')
    }

    console.log('done no in', sortedArray.join(', '))
    console.log('looking for', '0, 1, 2, 4, 5, 6, 44, 44, 63, 87, 99, 283')
    // console.log(sortedArray.join(', '), array.length, array)

}

inserstionSort(numbers)