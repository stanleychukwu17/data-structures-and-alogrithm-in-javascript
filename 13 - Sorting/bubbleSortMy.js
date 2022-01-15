const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
// for (let i = 0; i < 1000; i++) { numbers.push(99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0) }

function bubbleSort(arr) {
    let orgArray = arr
    let arrayLength = orgArray.length
    let newArray = []
    let continueLoop = true
    let aPointer = 0 // will be used to track the first item in the array
    let bPointer = 1 // will be used to track the second item in the array
    let aNum, bNum, moveItem
    let oneMove = 'no' // if yes it means at-least one swapping of positions occured, if no - it means that the sorting is complete
    let t0 = performance.now() // helps me track the time it takes my code to execute

    while (continueLoop) {
        aNum = orgArray[aPointer]
        bNum = orgArray[bPointer]
        moveItem = 'no' // if yes it means we should swap positions of the first and second items

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

        // we finished looping the array, we either reset the pointers or end the loop
        if (bPointer > arrayLength) {
            if (oneMove == 'no') { // sorting has been completed
                continueLoop = false
            } else {
                // else we reset the pointers and continue looping
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
    console.log(newArray, t1 - t0)
}