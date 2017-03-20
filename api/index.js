const express = require('express');
//const data = require('../src/testData');
const router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const config = require('../config');

/*const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});*/

router.get('/contests', (req, res) => {
    let contests = {};
    mongoClient.connect(config.mongodbUri, (err, db) => {
      assert.equal(null, err);
      if(err) {
      console.log("Opps! Error");
      } else {
        console.log("Connected successfully to Mongo server");
        db.collection('contests').find()
          .project({
            id: 1,
            categoryName: 1,
            contestName : 1
          })
          .each((err, contest) => {
              assert.equal(null, err);
              if(!contest){ //no more contests
                res.send({contests});
                return;
              }
            contests[contest.id] = contest;
          })
      }
    })
});


router.get('/contests/:contestId', (req, res) => {
   mongoClient.connect(config.mongodbUri, (err, db) => {
      assert.equal(null, err);
      if(err){
        console.log('Opps, Error');
      } else {
        db.collection('contests').findOne({
          id : Number(req.params.contestId)
        })
        .then(contest => res.send(contest))
        .catch(console.error)
      }

   })
});

router.get('/names/:namesIds', (req, res) => {

    
    const nameIds = req.params.namesIds.split(',').map(Number);
    let names = {};
    mongoClient.connect(config.mongodbUri, (err, db) => {
      assert.equal(null, err);
      if(err) {
      console.log("Opps! Error");
      } else {
        console.log("Connected successfully to Mongo server");
        db.collection('names').find({id: {$in : nameIds}})
          .each((err, name) => {
              assert.equal(null, err);
              if(!name){ //no more contests
                res.send({names});
                return;
              }
            names[name.id] = name;
          })
      }
    })
});

module.exports = router;
