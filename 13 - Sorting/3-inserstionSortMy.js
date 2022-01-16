// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
const numbers = [99, 44, 6, 2, 1, 5, 63, 44, 87, 283, 4, 0]

function inserstionSort (array) {
    let length = array.length
    let sortedArray = [] // here i'll store the sorteditems in the array
    sortedArray.push(array[0])

    for (let i = 1; i < length; i++) {
        let firstItem = sortedArray[0] // the lowest item in the array
        let lastItem = sortedArray[sortedArray.length - 1] // the highest item in the array
        let currentItem = array[i] // the current item in-check

        if (currentItem > lastItem) { // append 0(1)
            sortedArray.push(currentItem)
        } else if (currentItem < firstItem) { // prepend using an 0(1) method
            sortedArray = [currentItem, ...sortedArray]
        } else { // insert, definetly a nasty 0(n) as the input scales to thousands of numbers
            let temp = []
            let index = 0
            let item

            while (sortedArray[index]) {
                item = sortedArray[index]

                if (currentItem <= item) {
                    temp.push(currentItem)
                    break
                }

                temp.push(item)
                index++
            }

            sortedArray = [...temp, ...sortedArray.slice(index)]
        }
    }

    console.log('done no in', sortedArray.join(', '))
    return sortedArray
}

// call the function
inserstionSort(numbers)