const _ = require('lodash')
const numbersFromJson = require('./readfile')

const numbers = numbersFromJson.numbersJson.number

function concat(arr) {
    return _.concat(arr, numbers)
}

module.exports.concat = concat