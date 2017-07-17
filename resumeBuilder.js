$("#main").append(["ABHISHEK"]);
var awesomeThoughts="i am ABHISHEK and i am AWESOME!"
var funThoughts= awesomeThoughts.replace("AWESOME!","FUN");
$("#main").append(funThoughts);
var formattedName=HTMLheaderName.replace("%data%", "ABHISHEK SINGH");
var role="Web Developer";
var formattedRole=HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var skills=["aewomeness", "reading", "internet browsing", "JS"]
$("#main").append(skills);
//$("#main").append(skills[0]);
var work={};
work.position="Course Developer";
work.employer="Samvid";
work.years= 0-1;
var education= {};
education["name"]="Mumbai University";
education["years"]="2005 to 2013"
education["city"]="Mumbai";
$("#main").prepend(work["position"]);
$("#main").prepend(education.name);
var bio = {
  "name":"ABHISHEK",
 "role":"developer",
  "contact":{
  "Phone no.":"9029100717",
 "email":"as7340064@gmail.com",
  "github":"as7340064",
  "location":"mumbai"
},
  "Welcome message":"lore apsum etc etc",
  "skills":["reading","writing","internet browsing","gaming"],
"biopic":"images/fry.jpg"
};

//$("header").append(HTMLbioPic);
$("#main").append(JSON.stringify(bio));

var education={
  "schools":[
    {
      "name":"Mumbai university",
      "location":"Mumabi India",
      "degree":"Masters",
      "majors":["CS"],
      "dates":2013,
      "url":"http//example1.com"
    },
    {
      "name":"Gujrat university",
      "location":"Gujrat India",
      "degree":"Masters",
      "majors":["CS"],
      "dates":2016,
      "url":"http//example1.com"
    }
  ],
"online courses":[{
  "title":"Javascript Syntax",
  "school":"Udacity",
  "dates":"2017",
  "url":"http//udacity.com"
}]
}


var work={
  "jobs":[
    {
      "employeer":"Planet Express",
      "title":"Delivery Boy",
      "dates":"January 3000-failure",
      "description":"lorem epsun dhfjd moebd svey aftde ahsu awfst eddhdh sjeids"
    },
    {
      "employeer":"Panucii,s Pizza",
      "title":"Delivery Boy",
      "dates":"1998 -December 31,1999",
      "description":"lorem epsun dhfjd moebd svey aftde ahsu awfst eddhdh sjeids"
    }
  ]
}
var projects={
  "projects":[
  {
    "title":"Sample Project 1",
    "dates":"2014",
    "Description":"Lorem epsum shsji ahsgg sftqtas."},
    {
      images:[
     "http//husidp.com",
      "http//jdhd.in"
    ]
  }
  ]
  }


if(bio.skills.length>0){
  $("#header").append(HTMLskillsStart);
  var  formattedSkill=HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill=HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill=HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
  $("#skills").append(formattedSkill);
}

for(job in work.jobs){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employeer);
  var formattedTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);
  var formattedEmployerTitle=formattedEmployer + formattedTitle;
  $(".work-entry:last").append(
  formattedEmployerTitle);
  var formattedDate=HTMLworkDates.replace("%data%",work.jobs[job].dates);
  $(".work-entry:last").append(
  formattedDate);
  var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
  $(".work-entry:last").append(
  formattedDescription);
}
   function displayWork(){
     for(job in work.jobs){
       $("#workExperience").append(HTMLworkStart);
       var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employeer);
       var formattedTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);
       var formattedEmployerTitle=formattedEmployer + formattedTitle;
       $(".work-entry:last").append(
       formattedEmployerTitle);
       var formattedDate=HTMLworkDates.replace("%data%",work.jobs[job].dates);
       $(".work-entry:last").append(
       formattedDate);
       var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
       $(".work-entry:last").append(
       formattedDescription);

   }
}
displayWork();
         function inName(name){
         name=name.trim().split(" ");
         console.log(name);
         name[1]=name[1].toUpperCase();
         name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
         return name[0]+" "+name[1];
           }
        $('#main').prepend(internationalizeButton);

        projects.display=function(){
          for (projects in projects.projects){
            $("#projects").append(HTMLprojectStart);
            var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[projects].title);
            $(".projects-entry:last").append(formattedTitle);
            var formattedDate=HTMLprojectDates.replace("%data%",projects.projects[projects].date);
              $(".projects-entry:last").append(formattedDate);
              var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[projects].Description);
                $(".projects-entry:last").append(formattedDescription);

                if(projects.projects[projects].images.length>0)
                {
                  for (image in projects.projects[projects].images)
                  {
                    var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[projects].images[images]);
                    $(".projects-entry:last").append(formattedImage);
                  }
                }
                }
}