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