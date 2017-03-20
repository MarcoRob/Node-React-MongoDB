const axios = require('axios');
const config = require('./config');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./src/components/App');

const getApiUrl = contestId => {
    if(contestId){
        return `${config.serverUrl}/api/contests/${contestId}`;
    }
    return `${config.serverUrl}/api/contests`;
};

const getInitialData = (contestId, apiData) => {
    
    if(contestId) {
        return {
            currentContestId : apiData.id,
            contests: {
                [apiData.id] : apiData
            }
        };
    }
    return {
        contests : apiData.contests
    };
};
    

const serverRender = (contestId) =>
//var serverRender = '';
    axios.get(getApiUrl(contestId))
        .then(resp => {
            const initialData = getInitialData(contestId, resp.data);
            return {
                initialMarkup : ReactDOMServer.renderToString(<App initialData={initialData} />),
                initialData
            };
            //serverRender = resp.data.contests;
            console.log(resp.data);
        });


module.exports = serverRender;