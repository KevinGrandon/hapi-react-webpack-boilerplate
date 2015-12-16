var Hapi = require('hapi')
var debug = require('debug')('server')

var profile = process.env.NODE_ENV || 'development'
var runtime = {
  profile,
  config: require('../config/server.config.' + profile + '.js'),
}

var server = new Hapi.Server()
server.connection({ port: runtime.config.port })

server.register(require('inert'), function (err) {
  if (err) {
      throw err;
  }

  // Serve react from node_modules
  var reactPath = '/node_modules/react/dist/react-with-addons.js'
  server.route({
    method: 'GET',
    path: reactPath,
    handler: {
      file: __dirname + '/..' + reactPath
    }
  })

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: __dirname + '/../client/',
        index: true
      }
    }
  })

  server.start(err => {
    if (err) {
      debug('unable to start server', err)
      throw err
    }

    debug('webserver started', {
      protocol: server.info.protocol,
      address: server.info.address,
      port: runtime.config.port
    })
  })
})
