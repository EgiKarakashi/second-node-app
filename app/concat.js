const _ = require('lodash')

const fs = require('fs')

let numbersJson = fs.readFileSync('array.json')

function concat(arr) {
    return _.concat(arr, numbersJson)
}

module.exports.concat = concat