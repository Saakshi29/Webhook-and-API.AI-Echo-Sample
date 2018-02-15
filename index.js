"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());
/*
restService.post("/", function(req, res) {
  var speech ='https://www.youtube.com/results?search_query=sending+pdf+and+links+in+response+of+diologflow';
 
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});*/
restService.post("/", function(req, res) {
  var speech ='https://www.youtube.com/results?search_query=sending+pdf+and+links+in+response+of+diologflow';
 
  return res.json({
    speech: speech,
    platform: "slack",
    type: 0
  });
});




restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
