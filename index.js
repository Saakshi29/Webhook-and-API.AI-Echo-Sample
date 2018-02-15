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

restService.post("/", function(req, res) {
  var speech ='https://www.youtube.com/results?search_query=sending+pdf+and+links+in+response+of+diologflow';
 
  return res.json({
    
    source: "webhook-echo-sample",
   "data": {"slack": {
    "text": speech,
    "attachments": [
        {
            "title": "hello",
            "title_link": "navendu",
            "color": "#36a64f",

            "fields": [
                {
                    "title": "Condition",
                    "value": "Temp ",
                    "short": "false"
                },
                {
                    "title": "Wind",
                    "value": "speed",
                    "short": "true"
                },
                {
                    "title": "Atmosphere",
                    "value": "H",
                    "short": "true"
                }
            ],

            "thumb_url": "http://l.yimg.com/a/i/us/we/52/" + condition.get('code') + ".gif"
        }
    ]
}},

  });
});





restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
