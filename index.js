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
 
  return res.json( {
    imageUrl: "https://www.w3schools.com/howto/howto_js_image_comparison.asp",
    platform: "slack",
    type: 3
  });
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
