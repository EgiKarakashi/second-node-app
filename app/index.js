const SortedArray = require('sorted-array-async')

const concat = require('./concat')
const sum = require('./sum')

const numbersToConcat = [6, 7, 10, 8, 9]
const numbersToAdd = [6, 7, 10, 8, 9]

const result = concat.concat(numbersToConcat)

setTimeout(() => {
    const result2 = sum.sum(numbersToAdd)
    console.log(`The result of the sum is: ${result2}`)
}, 3000)


const instance = new SortedArray(result)

let sortedArray;


instance.getArray().then(array => {
    sortedArray = array
    console.log(`The result of the concat array sorted is: [ ${sortedArray.toString()} ]`)
    console.log('Printing the sum of the array with a timeout...')
})


console.log(`The result of the concat is: [ ${result} ]`)
