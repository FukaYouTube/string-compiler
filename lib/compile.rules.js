const Compile = require('./compile.code')

module.exports = {
    rules: (message, object) => {
        if(message.includes("${")){
            let template = Compile.compiler(message)
            return template(object)
        }else{
            return message
        }
    }
}