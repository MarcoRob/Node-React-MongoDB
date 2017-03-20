const axios = require('axios');

const fetchContest = function(contestId) {
    return (axios.get(`/api/contests/${contestId}`)
                .then(resp => resp.data));
};

const fetchContestList = () => {
    return (axios.get(`/api/contests`)
                .then(resp => resp.data.contests));
};

const fetchNames = function(nameIds) {
    return (axios.get(`/api/names/${nameIds.join(',')}`)
                .then(resp => resp.data.names));
};


module.exports = {
    fetchContest,
    fetchContestList,
    fetchNames
};
