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
var aap='The Department of Architecture and Planning started in 2015 as a step towards social equity and gender parity'+
'in technical professions, having a vision that architectural education should empower students to become protagonist of positive '+
'change by exploring, learning and practicing a sustainable form of architecture. The architectural education must, besides imparting'+ 
'knowledge, also endeavor to create opportunities for students to engage with real life issues, so that they can reflect on their'+
'role in creating a better world. Further, it is also important that students are empowered to make informed choices, which are more'+
'life-sustaining. The department aims at development of the individual girl as a responsible member of peaceful, '+
'pluralist and inclusive society by learning to explore and practicing quality, sustainable form of architecture. ';
var general='Teaching in the university is achieved through various specialized departments. Each department through HOD '+
'ensures that the mechanisms are in place to promote regular contact between academics, support staff graduate/post-graduate'+
 ' students and Research Scholars. Department facilitates the availability of resources and facilities to the students for the '+
  'smooth conduction of the academics.Department builds the guidelines & policies for the effective and timely management of the'+
  'academics in the institution.  The various departments are CSE, IT, ECE, MAE, AAP.';
  if(req.body.result.parameters.stream=="CSE")
  {
  
  return res.json({
  speech: cse,
  displayText: cse,
  source: "Webhook",
  });}
  else if(req.body.result.parameters.stream=="ECE")
  {
  
  
  return res.json({
  speech: ece,
  displayText: ece,
  source: "Webhook",
  });
  }
  else if(req.body.result.parameters.stream=="IT")
  {
  
  
  return res.json({
  speech: it,
  displayText: it,
  source: "Webhook",
  });
  }
  
  else if(req.body.result.parameters.stream=="electrical")
  {
  
  
  return res.json({
  speech: ece,
  displayText: ece,
  source: "Webhook",
  });
  }
  
  else if(req.body.result.parameters.stream=="mech")
  {
  
  
  return res.json({
  speech: me,
  displayText: me,
  source: "Webhook",
  });
  }
  
  else if(req.body.result.parameters.stream=="ASH")
  {
  
  
  return res.json({
  speech: ece,
  displayText: ece,
  source: "Webhook",
  });
  }
  
  else if(req.body.result.parameters.stream=="AAP")
  {
  
  
  return res.json({
  speech: ece,
  displayText: ece,
  source: "Webhook",
  });
  }
  else
  {
  
  
  
  
    
  return res.json({
  speech: general,
  displayText: general,
  source: "Webhook",
  });
  
  }
  
});





restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
