/*import config, { nodeEnv, logStars } from './config';

console.log(config, nodeEnv);

logStars("Something");*/

//import http from 'http';

/*https.get('https://www.lynda.com', res => {
    console.log('Response status code: ', res.statusCode);

    res.on('data', chink => {
        console.log(chink.toString());
    });
});*/

/*const server = http.createServer();

server.listen(8080);

server.on('request', (req, res) => {
    res.write("Hello HTTP\n");
    setTimeout(() => {
        res.write("I can stream!\n");
        res.end();
    }, 3000);
});*/
/*import config from './config';
import express from 'express';*/

const express = require('express');
const config = require('./config');
const apiRouter = require('./api');
const server = express();

/*server.get('/', (req, res) => {
    res.send("Hello Express");
}); 
*/

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index');
}); 

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, ()=> {
    console.log('Express listening on port: ', config.port);
});