const fs = require('fs')

const plugins = require('../../plugins')

let elements = Object.values(plugins)

module.exports = (client, message, data) => {
  if (!data.assets.thirdparties.usageLogger.usage[data.message.construct]) data.assets.thirdparties.usageLogger.usage[data.message.construct] = 0

  data.assets.thirdparties.usageLogger.usage[data.message.construct]++
  data.assets.handle.emit('modified', 'thirdparties/usageLogger/usage', data.assets.thirdparties.usageLogger.usage)
}
