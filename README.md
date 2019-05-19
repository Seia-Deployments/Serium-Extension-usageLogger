# Serium-Extension-usageLogger

To log the usage of Serium.

**Deprecated Warning**

This package won't work on latest version of Serium.

----

# Installation

## Cloning into yours

```
cd ./path/to/your/project/.../extensions
git clone https://github.com/Seia-Deployments/Serium-Extension-usageLogger.git

...

Cloning into Serium-Extension-usageLogger...

...

mv Serium-Extension-usageLogger usageLogger
```

## Registering extension

```js
// NOTE: file: ./extensions/index.js
const extensions = Object.values({
  usageLogger: require('./usageLogger')
})

module.exports.fetch = (client, message, options) => {
  extensions.forEach(extension => extension(client, message, options))
}
```

```js
// NOTE: file: ./index.js
let assets = {
  users: JSON.parse(fs.readFileSync('./assets/users.json', 'utf8')),
  guilds: JSON.parse(fs.readFileSync('./assets/guilds.json', 'utf8')),

  thirdparties: {
    usageLogger: {
      usage: JSON.parse(fs.readFileSync('./assets/thirdparties/usageLogger/usage.json', 'utf8'))
    }
  },

  handle: data
}
```

## Create file for logs

```
echo "{}" >> ./assets/thirdparties/usageLogger/usage.json
```
