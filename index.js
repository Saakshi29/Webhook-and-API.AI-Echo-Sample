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
   {
  "speech": "",
  "displayText": "",
  "data": {

  },
  "contextOut": [

  ],
  "source": "Webhook",
  "messages": [
    {
      "type": 4,
      "platform": "skype",
      "speech": "",
      "payload": {
        "skype": {
          "attachmentLayout": "list",
          "attachments": [
            {
              "contentType": "application\/vnd.microsoft.card.hero",
              "content": {
                "title": "Unit 2A",
                "subtitle": "",
                "text": "These timeslots are available for 2017-10-16",
                "images": [

                ],
                "buttons": [
                  {
                    "type": "imBack",
                    "title": "from 13:00 until 14:00 Unit 2A",
                    "value": "from 13:00 until 14:00 Unit 2A"
                  },
                  {
                    "type": "imBack",
                    "title": "from 14:00 until 15:00 Unit 2A",
                    "value": "from 14:00 until 15:00 Unit 2A"
                  },
                  {
                    "type": "imBack",
                    "title": "from 15:00 until 16:00 Unit 2A",
                    "value": "from 15:00 until 16:00 Unit 2A"
                  }
                ]
              }
            },
            {
              "contentType": "application\/vnd.microsoft.card.hero",
              "content": {
                "title": "Unit 1",
                "subtitle": "",
                "text": "These timeslots are available for 2017-10-16",
                "images": [

                ],
                "buttons": [
                  {
                    "type": "imBack",
                    "title": "from 13:00 until 14:00 Unit 1",
                    "value": "from 13:00 until 14:00 Unit 1"
                  },
                  {
                    "type": "imBack",
                    "title": "from 14:00 until 15:00 Unit 1",
                    "value": "from 14:00 until 15:00 Unit 1"
                  },
                  {
                    "type": "imBack",
                    "title": "from 15:00 until 16:00 Unit 1",
                    "value": "from 15:00 until 16:00 Unit 1"
                  },
                  {
                    "type": "imBack",
                    "title": "from 16:00 until 17:00 Unit 1",
                    "value": "from 16:00 until 17:00 Unit 1"
                  }
                ]
              }
            }
          ]
        }
      }
    }
  ]
}

  });
});





restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
