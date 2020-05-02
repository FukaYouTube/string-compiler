const vm = require('vm')

function escape(template){
    const regex = /`/gm
    return `\`${template.replace(regex, '\\`')}\``
}

module.exports = {
    compiler: (template, defaultContext, options) => {
        if(typeof template !== 'string') throw new Error('Template must be a string')

        const option = Object.assign({ timeout: 500 }, options)
        const script = new vm.Script(escape(template))

        return ctx=> {
            try {
                return script.runInNewContext(Object.assign({}, defaultContext, ctx), option)
            }catch(error){
                throw new Error('Failed to compile template', error)
            }
        }
    }
}