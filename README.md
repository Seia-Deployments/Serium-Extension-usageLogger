# Serium-Extension-usageLogger

----

To log the usage of Serium.

# Installation

To install this extension, clone the project from GitHub.

```
cd ./path/to/your/project/.../extensions
git clone https://github.com/Seia-Deployments/Serium-Extension-usageLogger.git

...

Cloning into Serium-Extension-usageLogger...

...

mv Serium-Extension-usageLogger usageLogger
```

And the next step is registering the plugin.

```js
// NOTE: file: ./extensions/index.js
const extensions = Object.values({
  usageLogger: require('./usageLogger')
})

module.exports.fetch = (client, message, options) => {
  extensions.forEach(extension => extension(client, message, options))
}
```
