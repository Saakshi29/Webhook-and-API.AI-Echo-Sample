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
            "title": channel.get('title'),
            "title_link": channel.get('link'),
            "color": "#36a64f",

            "fields": [
                {
                    "title": "Condition",
                    "value": "Temp " + condition.get('temp') +
                             " " + units.get('temperature'),
                    "short": "false"
                },
                {
                    "title": "Wind",
                    "value": "Speed: " + channel.get('wind').get('speed') +
                             ", direction: " + channel.get('wind').get('direction'),
                    "short": "true"
                },
                {
                    "title": "Atmosphere",
                    "value": "Humidity " + channel.get('atmosphere').get('humidity') +
                             " pressure " + channel.get('atmosphere').get('pressure'),
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
