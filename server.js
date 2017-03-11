const express = require('express');
const config = require('./config');
const apiRouter = require('./api');
const sass = require('node-sass-middleware');
const path = require('path');

const server = express();

server.use(sass({
    src: path.join(__dirname, 'public/css'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        content: '...'
    });
}); 

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, ()=> {
    console.log('Express listening on port: ', config.port);
});