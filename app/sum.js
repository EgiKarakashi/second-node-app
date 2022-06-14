const numbersFromJson = require('./readfile')

const numbers = numbersFromJson.numbersJson.number

const sumJson = numbers.reduce((sum, nums) => sum + nums, 0)

function sum(arr) {
    return arr.reduce(function(a, b) {
        return a + b
    }, sumJson)
}

module.exports.sum = sum