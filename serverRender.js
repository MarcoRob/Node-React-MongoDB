const axios = require('axios');
const config = require('./config');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./src/components/App');

const serverRender = () =>
//var serverRender = '';
    axios.get(`${config.serverUrl}/api/contests`)
        .then(resp => {
            return {
                initialMarkup : ReactDOMServer.renderToString(<App initialContests={resp.data.contests} />),
                initialData: resp.data
            };
            //serverRender = resp.data.contests;
            console.log(resp.data);
        });


module.exports = serverRender;