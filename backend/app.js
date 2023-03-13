require('dotenv').config({path: `${__dirname}/.env`});
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const routes = require('./app/routers')()

/**
 * Variable for basedir to project source
 */

global.__basedir = __dirname;

/**
 * Server/Express config
 */

const app = express();

app.use(logger('dev'))
app.use(express.urlencoded({extended: true}));
app.use(express.json({limit: '10mb', extended: true})) // extend size of json receipt or send

/**
 * CORS options for request
 */

const corsOptions = {
    credentials: true,
    httpOnly: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Origin', 'Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Set-Cookie', 'cache-control'],
    contentType: 'application/json; charset=utf-8',
    origin: true
}

/**
 * CORS origins allowed for production
 */

if (process.env.NODE_ENV !== 'production') {
    const allowOrigins = [process.env.FRONT_URL];

    corsOptions.origin = (origin, callback) => {
        if (!origin || allowOrigins.indexOf(origin) !== -1) callback(null, true)
        else callback(new Error('Not allowed by CORS'))
    }
}

/**
 * Other configurations
 */

app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store')
    next()
})
app.use(cors(corsOptions));

/**
 * Set all routes of API here
 */

app.use('/api', routes);

module.exports = app;
