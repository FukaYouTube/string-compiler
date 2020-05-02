# String-Compiler v0.0.2 beta
This script compiles javascript code from a string and using a pattern string  

## Install:
```
$ npm install string-compiler
```

## Import packages:
```javascript
const { StringParser } = require('string-compiler')

StringParser.rules(/* text */, /* data */)
```

## Testing commands:
```
$ npm test
```

## Testing: ./test/test.*.js

JSON parse and use string-compiler  

```javascript
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
```

Use string and use string-compiler  

```javascript
const { StringParser } = require('../')

// Template strings are changed to transmitted data
console.log(StringParser.rules('New message to the world: ${name}', { name: 'Hello World!' }))
// Output: "New message to the world: Hello World!"

// Or if there is no template line in the text and transfer data, then this data will be ignored
console.log(StringParser.rules('I am a programmer and I am writing?', { name: 'Hello World' }))
// Output: "I am a programmer and I am writing?"

// Plain text output
console.log(StringParser.rules('It turns out that { I } write hello world? $'))
// Output: "It turns out that { I } write hello world? $"
```