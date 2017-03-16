const express = require('express');
const router = express.Router();

const AWS = require('aws-sdk');
AWS.config.update({
  region:"us-west-2",
  endpoint: "https://dynamodb.us-west-2.amazonaws.com"
});

const docClient = new AWS.DynamoDB.DocumentClient();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup');
});

//get member specific
router.get('/:id', function(req, res, next) {
  // res.send(""+req.params.id+" profile!");

  //getItem from DynamoDB
  // console.log("Querying for ID.");

  var params = {
      TableName : "groups-dev",
      KeyConditionExpression: "#query = :member",
      ExpressionAttributeNames:{
          "#query": "id"
      },
      ExpressionAttributeValues: {
          ":member":(req.params.id)
      }
  };

  docClient.query(params, function(err, data) {
      if (err) {
          return next(new Error("Unable to query. Error:", JSON.stringify(err, null, 2)));
      } else {
        res.render('signup', data);
          // console.log("Query succeeded.");
          // data.Items.forEach(function(item) {
          //     console.log(" -", item.id + ": " + item.amount + ", interval: " + item.interval + " " + ", due: " + item.firstPaymentDue );
          // });
      }
  });
});

router.post('/:id', function (req, res, next){

});

module.exports = router;
