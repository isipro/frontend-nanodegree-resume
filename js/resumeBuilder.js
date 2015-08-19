/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
    "name": "Ivan Ivanov",
    "role": "Web Developer",
    "contacts": {
        "mobile": "0876 999 209",
        "email": "isipro@gmail.com",
        "location": "Sofia",
    },
    "welcomeMessage": "This is the online profile of Ivan Ivanov",
    "skills": [
        "awesomeness", "web design and architecture", "web development", "system administration", "networking"
    ],
    "bioPic": "img/ivan_ivanov.jpg"
};

var education = {
    "schools": [
        {
        "name": "New Bulgarian University",
        "city": "Sofia",
        "degree": "BA",
        "major": "CompSci",
    },
    {
        "name": "English Language School",
        "city": "Vidin",
        "degree": "High School Dipoloma",
        "major": "Enlgish and German",
    }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": 2014,
            "url": "www.udacity.com",
        },
        {
            "title": "SaaS",
            "school": "Edx",
            "dates": 2013,
            "url": "www.edx.org",
        }
    ]
};

var work = {
    "jobs": [
        {
        "employer": "LandMark",
        "title": "System Administrator",
        "dates": "May 2014 - present",
        "description": "monitoring and system administration of LandMark systems",
    },
    {
        "employer": "Hostway",
        "title": "Team Manager(Supervisor - Technical Support)",
        "dates": "May 2014 - present",
        "description": "managing team of 10-12 people: training, schedule, supervisoion, performance aprisal; operational duties: monitoring work flow (phones and chat), \n\
                        rescheduling agents to different channels and queues, taking escalation calls, taking ownership of second and third level escalated cases",
    },
    ]
};

var projects = {
    "websites": [
        {
            "name": "ivoniko.com",
            "technology": "HTML5, PHP, MySQL, MVC",
            "description": "website for a construction company",
        },
        {
            "name": "kantora-hadjiiski.com",
            "technology": "HTML5, PHP ",
            "description": "website for a law firm",
        }
    ]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

if(bio.hasOwnProperty("skills") && bio.skills.length > 0){
    $('#header').append(HTMLskillsStart);
    
    var propLength = bio.skills.length;
    var formattedProp;
    
    for(var i = 0; (i < propLength - 1); i++){
        formattedProp = HTMLskills.replace("%data%", bio.skills[i]);
        $('#skills').append(formattedProp);
    }
}

function displayWork(){
    if(work.hasOwnProperty("jobs") && work.jobs.length > 0){
    
        var formattedEmployer;
        var formattedJobTitle;
        var formattedDates;
        var formattedDescription
    
        for(job in work.jobs){

            $('#workExperience').append(HTMLworkStart);

            formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

            $('.work-entry:last').append(formattedEmployer + formattedJobTitle);

            formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $('.work-entry:last').append(formattedDates);

            formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $('.work-entry:last').append(formattedDescription);
        }
    }   
};
displayWork();