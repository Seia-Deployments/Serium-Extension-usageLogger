const fs = require('fs')

const initialize = require('./initialize')
const plugins = require('../../plugins')

let elements = Object.values(plugins)
let __init = 0

module.exports = (client, message, data) => {
  if (__init = 0) {
    const i = elements.forEach(plugin => data.thirdparties.usageLogger.usage[plugin] = data.thirdparties.usageLogger.usage[plugin] || 0)

    data.handle.emit('modified', 'thirdparties/usageLogger/usage', JSON.stringify(i))
    __init++
  }

  data.thirdparties.usageLogger.usage[plugin]++
  data.handle.emit('modified', 'thirdparties/usageLogger/usage', JSON.stringify(data.thirdparties.usageLogger.usage)
}
