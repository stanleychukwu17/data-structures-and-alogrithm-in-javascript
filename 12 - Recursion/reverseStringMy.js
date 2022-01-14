//Implement a function that reverses a string using iteration...and then recursion!
function reverseString1(str) { // Iterative
    let reverse = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }

    return reverse
}

function reverseString2(str) { // Recursion 1
    if (str.length <= 0) {
        return ''
    }

    let reverse = str[str.length - 1]
    let strSplit = str.split('')
    strSplit.pop()
    strSplit = strSplit.join('')

    // console.log(strSplit, reverse)
    return reverse +''+ reverseString2(strSplit)
}

function reverseString3(str, length = str.length) { // Recursion 2
    if (length <= 0) {
        return ''
    }

    let oneText = str[length-1]
    // console.log(str, length)
    return oneText +''+reverseString3(str, length-1)
}

let james = reverseString3('yoyo mastery')
console.log(james === 'yretsam oyoy', james)
//should return: 'yretsam oyoy'