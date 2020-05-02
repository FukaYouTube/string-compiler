const fs = require('fs')
const { StringParser } = require('../')

let message = JSON.parse(fs.readFileSync('./test/messages/text.json', 'utf8'))

// Template strings are changed to transmitted data
console.log(StringParser.rules(message['test1'], { data: 'Hello World' }))
// Output: "Testing lib: Hello World"

// Or if there is no template line in the text and transfer data, then this data will be ignored
console.log(StringParser.rules(message['test2'], { data: 'Hello World' }))
// Output: "Testing lib!"

// Plain text output
console.log(StringParser.rules(message['test3']))
// Output: "Testing lib!"

// -- use more keys

console.log(StringParser.rules(message['go']['to']['name1'], { name: 'JavaScript' }))
// Output: "Hello JavaScript"
console.log(StringParser.rules(message['go']['to']['name2'], { name: 'JavaScript' }))
// Output: "Hello!"
console.log(StringParser.rules(message['go']['to']['name3']))
// Output: "Hello!"