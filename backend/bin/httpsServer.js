var debug = require('debug')('nodejs-starter:server');
const https = require('https');

const server = {
  httpsServer: function(options, app) {
    const securePort = normalizeSecurePort(process.env.PORT || 4000);
    app.set('securePort', securePort)
    /**
     * Create secure HTTPS server
     */
    const secureServer = https.createServer(options, app)
    secureServer.listen(securePort);
    secureServer.on('error', onSecureError);
    secureServer.on('listening', onSecureListening);
    process.on('SIGINT', () => {
      secureServer.close(() => {
        console.info(`Server exiting at ${new Date()}`);
        process.exit();
      });

    });

    function normalizeSecurePort(val) {
      var securePort = parseInt(val, 10);

      if (isNaN(securePort)) {
        // named pipe
        return val;
      }
      if (securePort >= 0) {
        // port number
        return securePort;
      }
      return false;
    }

    function onSecureError(error) {
      if (error.syscall !== 'listen') {
        throw error;
      }

      var bind = typeof securePort === 'string' ?
        'Pipe ' + securePort :
        'Port ' + securePort;

      // handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;
        default:
          throw error;
      }
    }

    function onSecureListening() {
      var addr = secureServer.address();
      var bind = typeof secureServer === 'string' ?
          'pipe ' + addr :
          'port ' + addr.port;
      debug('Listening on ' + bind);
      console.info('Server Https Listening on ' + bind);
      console.log(`     ___      .______    __  
    /   \\     |   _  \\  |  | 
   /  ^  \\    |  |_)  | |  | 
  /  /_\\  \\   |   ___/  |  | 
 /  _____  \\  |  |      |  | 
/__/     \\__\\ | _|      |__| 
                             `)
      console.log("----------------------------------------");
    }
  }
}

module.exports = server
