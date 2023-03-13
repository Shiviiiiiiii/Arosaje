const debug = require('debug')('nodejs-starter:server');
const http = require('http');
const dotenv = require('dotenv');

dotenv.config({path: __dirname + '/../..env'});
const server = {
  httpServer: function(app) {
    const port = normalizePort(process.env.PORT || 4000);
    app.set('port', port);
    /**
     * Create HTTP server.
     */
    const server = http.createServer(app);
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);

    console.log('Running on port : ', port);

    process.on('SIGINT', () => {
      server.close(() => {
        console.info(`Server exiting at ${new Date()}`);
        process.exit();
      });
    });
    /**
     * Normalize a port into a number, string, or false.
     */

    function normalizePort(val) {
      var port = parseInt(val, 10);

      if (isNaN(port)) {
        // named pipe
        return val;
      }

      if (port >= 0) {
        // port number
        return port;
      }

      return false;
    }

    function onError(error) {
      if (error.syscall !== 'listen') {
        throw error;
      }

      var bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

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

    function onListening() {
      var addr = server.address();
      var bind = typeof addr === 'string' ?
          'pipe ' + addr :
          'port ' + addr.port;
      debug('Listening on ' + bind);
      console.info('Server Http Listening on ' + bind);
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
