const express = require('express');
const data = require('../src/testData');
const router = express.Router();


const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

router.get('/contests', (req, res) => {
    res.send({
      contests : contests
    });
});

router.get('/contests/:contestId', (req, res) => {
    let  contest = contests[req.params.contestId];
    contest.description = 'Non labore veniam ad nostrud est proident velit fugiat dolore ut ullamco ipsum. Qui enim ipsum id exercitation minim ex proident ex qui anim nisi non laboris dolore. Eu duis tempor laborum quis veniam. Fugiat dolor velit sit amet deserunt aliquip. Ut aliqua ut nulla ullamco anim duis pariatur.';
    res.send(contest);
})

module.exports = router;
