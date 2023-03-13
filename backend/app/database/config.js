require("dotenv").config({path: `${__dirname}/../../.env`});

module.exports = {
    port: process.env.SQL_PORT,
    host: process.env.SQL_HOST,
    username: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    dialect: "mysql",
    logging: false,
    //the options to enable HTTPS server
    https_server: {
        enable_https: process.env.ENABLE_HTTPS,
        key_pem: process.env.KEY_PEM,
        server_crt: process.env.SERVER_CRT,
    }
}
