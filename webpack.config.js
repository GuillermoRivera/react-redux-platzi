const server = require('./webpack-files/webpack.server.config.js')
const client = require('./webpack-files/webpack.client.config.js')

module.exports = [
  server,
  client
]