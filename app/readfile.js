const fs = require('fs')

let numbersFromJson = fs.readFileSync('array.json')

let numbersJson = JSON.parse(numbersFromJson)

module.exports.numbersJson = numbersJson