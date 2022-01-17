const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
for (let i = 0; i < 1000; i++) { numbers.push(99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0) }

function bubbleSort(arr) {
    let orgArray = arr
    let arrayLength = orgArray.length
    let newArray = []
    let continueLoop = true
    let aPointer = 0
    let bPointer = 1
    let aNum, bNum, moveItem
    let oneMove = 'no'
    let t0 = performance.now()

    while (continueLoop) {
        aNum = orgArray[aPointer]
        bNum = orgArray[bPointer]
        moveItem = 'no' // if yes it means we should swap positions

        if (aNum > bNum) {
            oneMove = 'yes'
            moveItem = 'yes'
        }

        if (moveItem == 'yes') {
            newArray.push(bNum)
            bPointer++
        } else {
            newArray.push(aNum)
            aPointer = bPointer
            bPointer++
        }

        if (bPointer > arrayLength) {
            if (oneMove == 'no') {
                continueLoop = false
            } else {
                // console.log('--final', newArray.join(','))

                orgArray = newArray
                newArray = []
                aPointer = 0
                bPointer = 1
                oneMove = 'no'
            }
        }
    }


    let t1 = performance.now()
    console.log(t1 - t0)
    console.log(newArray)
}

function bubbleSort2(array) {
    const length = array.length
    let t0 = performance.now()

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

    let t1 = performance.now()
    console.log(numbers, t1 - t0)
}

const james = bubbleSort(numbers)
// console.log(numbers)