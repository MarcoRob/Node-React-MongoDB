const axios = require('axios');

const fetchContest = function(contestId) {
    return (axios.get(`/api/contests/${contestId}`)
                .then(resp => resp.data));
};

module.exports = fetchContest;
