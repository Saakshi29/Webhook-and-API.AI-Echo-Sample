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
  var speech ='hello navendu';
 var cse='The Computer Science and Engineering Department is the most versatile department '+
' of college and caters to the needs of other departments as well.'+ 
 'The department aims at developing the fundamental conceptual knowledge along with the total'+
  'personality, which helps computer engineers to face the challenges of rapidly changing software industry.'+ 
 'Technical skills, teamwork and specialized knowledge prepare these young engineers to adopt and continuously'+
' learn new technologies. Regular updation and expansion of the labs is done as per the requirement of the industry. '+
    ' Exposure to latest developments and technologies is a mandatory exercise for both faculty and students.'
 'Continuous research work and live projects are taken up by the department. Numerous professional '+
  'activities are conducted to improve interaction between students, faculty, other academic institutions and industries.';
 var ece='The department aims to impart quality technical education to the students aspiring for a career in the field of'+
    ' electronics and communications engineering. The department also caters to the needs of other engineering disciplines'+
     'where electronics is taught either as an essential or an elective subject. The department offers subjects like basic'+
     'electronics, EMT theory, communications, VLSI, microwave engg, digital signal processing, optical communications, advanced'+
  'microprocessor and other related subjects' ;
  var it='Department of IT aims to prepare students to undertake careers involving innovation and problem solving using IT,'+
  'or to undertake advanced studies for research careers in IT. It aims to emerge as a centre of excellence in leveraging '+
  'information technology to stimulate the exchange and creation of knowledge for intellectual, social, political, moral'+
 ' and material development of the society.   The teaching pedagogy in the department aims to bridge the gap between principles'+
'  and applications with the goal to apply knowledge of computing sciences for solving real world problems.';
  var me='Besides giving a through grounding in basic sciences and engineering subjects  the curriculum  in mechanical and '+
  'automation engineering emphasises on deep understanding of applied mechanics, microprocessors, machine design, heat transfer,'+
   ' refrigeration and air conditioning, machine tools, metrology, robotics and CAD(CAM) etc.  The department has well-equipped '+
  'laboratories in related fields and'+
  'students are exposed to various modern equipment in the area of mechanical and automation .';


  if(req.body.result.parameters.stream=="CSE")
  {
  
  return res.json({
  speech: cse,
  displayText: cse,
  source: "Webhook",
  });}
  else if(req.body.result.parameters.department=="ECE")
  {
  
  
  return res.json({
  speech: speech,
  displayText: ece,
  source: "Webhook",
  });
  }
  
});





restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
