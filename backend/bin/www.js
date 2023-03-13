const app = require('../app'),
config = require('./../app/database/config');

const httpServer = require('./httpServer');
const httpsServer = require('./httpsServer');

if (config.https_server.enable_https === 'true') {
  /**
   *create HTTPS server
   */
  httpsServer.httpsServer(options, app);
} else {
  /**
   * create HTTP server
   */
  httpServer.httpServer(app);
  console.debug("If you need to use Https server you must enable https and set path to key.pem and server.crt in config.properties");
}
