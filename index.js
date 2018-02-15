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
  var speech =
    req.body.result.metadata.intentName ;
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});*/
restService.post("/", function(req, res) {
  var speech =
    req.body.result.metadata.intentName ;
  return res.json({
    "buttons": [
      {
        "postback":"https://www.youtube.com/results?search_query=sending+pdf+and+links+in+response+of+diologflow",
        "text": "Card Link Title"
      }
    ],
    "imageUrl": "http://urltoimage.com",
    "platform": "facebook",
    "subtitle": "Card Subtitle",
    "title": "Card Title",
    "type": 1
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
