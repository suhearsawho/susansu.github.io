(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),i=(a(85),a(25)),c=a(30),s=a(77),m=a(153),u=a(140),d=a(147),h=a(148),p=a(149),b=a(55),g=a(150),f=a(155),E=a(78),y=a(146),v=a(72),w=a.n(v),k=a(143),j=a(144),x=a(145),S=a(141),O=a(154),C=Object(u.a)(function(e){return{toolbar:e.mixins.toolbar,drawer:{flexShrink:0},link:{color:e.palette.primary.main}}});function N(e){var t=e.container,a=C(),n=r.a.useState(!1),o=Object(E.a)(n,2),l=o[0],c=o[1],s=["/","/portfolio","/about","/resume","/contact"];function m(){c(!l)}var u=r.a.createElement("div",null,r.a.createElement("div",{className:a.toolbar}),r.a.createElement(S.a,null),r.a.createElement(k.a,null,["Home","Portfolio","About","Resume","Contact"].map(function(e,t){return r.a.createElement(i.b,{to:s[t],className:a.link,key:e},r.a.createElement(j.a,{button:!0,key:e},r.a.createElement(x.a,{primary:e})))})));return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{color:"inherit","aria-label":"Open drawer",edge:"start",onClick:m},r.a.createElement(w.a,null)),r.a.createElement("nav",{className:a.drawer,"aria-label":"folders"},r.a.createElement(O.a,{container:t,variant:"temporary",anchor:"top",open:l,onClose:m,onClick:m,ModalProps:{keepMounted:!0}},u)))}var A=Object(u.a)(function(e){return{root:{},title:{flexGrow:1,textAlign:"left",color:"black"},sectionMobile:{display:"flex"},color:{backgroundImage:"linear-gradient(#46844b, #75b477)",color:e.palette.primary.contrastText},noColor:{backgroundColor:"rgba(255, 255, 255, 1)",boxShadow:"none",color:e.palette.primary.main},link:{textDecoration:"none",color:"inherit"}}});function B(){var e=A();return r.a.createElement("div",{className:e.root},r.a.createElement(h.a,{position:"static",className:e.noColor},r.a.createElement(p.a,null,r.a.createElement(b.a,{variant:"h6",className:e.title},"Susan Su"),r.a.createElement(f.a,{xsDown:!0},r.a.createElement(i.b,{to:"/",className:e.link},r.a.createElement(g.a,{color:"inherit"},"Home")),r.a.createElement(i.b,{to:"/portfolio",className:e.link},r.a.createElement(g.a,{color:"inherit"},"Portfolio")),r.a.createElement(i.b,{to:"/about",className:e.link},r.a.createElement(g.a,{color:"inherit"},"About")),r.a.createElement(i.b,{to:"/resume",className:e.link},r.a.createElement(g.a,{color:"inherit"},"Resume")),r.a.createElement(i.b,{to:"/contact",className:e.link},r.a.createElement(g.a,{color:"inherit"},"Contact"))),r.a.createElement(f.a,{smUp:!0},r.a.createElement(N,null)))))}var I=a(5),T=a(151),D=a(152),L=a(75),M=a.n(L),J=Object(u.a)(function(e){var t,a,n,r;return r={root:{flexGrow:1,margin:"1rem"},image:(t={},Object(I.a)(t,e.breakpoints.up("md"),{height:"30rem"}),Object(I.a)(t,"height","15rem"),t),info:(a={display:"flex",justifyContent:"center",alignItems:"center"},Object(I.a)(a,e.breakpoints.down("xs"),{textAlign:"center"}),Object(I.a)(a,"textAlign","left"),a)},Object(I.a)(r,"image",(n={},Object(I.a)(n,e.breakpoints.down("xs"),{width:"150px",height:"150px"}),Object(I.a)(n,"width","200px"),Object(I.a)(n,"height","200px"),Object(I.a)(n,"margin","1rem"),n)),Object(I.a)(r,"imageBack",{width:"100%",display:"flex",justifyContent:"center"}),r});function H(){var e=J();return r.a.createElement("div",{className:e.root},r.a.createElement(T.a,{container:!0,spacing:1,className:e.info},r.a.createElement(T.a,{item:!0,xs:12,sm:4},r.a.createElement("div",{className:e.imageBack},r.a.createElement(D.a,{alt:"Susan Su",src:M.a,className:e.image}))),r.a.createElement(T.a,{item:!0,xs:12,sm:8},r.a.createElement(b.a,{variant:"h4",gutterBottom:!0},"Hi, I'm Susan."),r.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"I am a Mechanical Engineer turned Fullstack Software Engineer based in San Francisco Bay Area."),r.a.createElement(b.a,{variant:"p",gutterBottom:!0},"Welcome to my portfolio!"))))}var P=a(111),F=Object(u.a)(function(e){var t;return{root:(t={},Object(I.a)(t,e.breakpoints.up("md"),{margin:"2rem"}),Object(I.a)(t,"margin","0.5rem"),Object(I.a)(t,"paddingTop","2rem"),t),one:{backgroundColor:e.palette.secondary.main,color:"white",padding:e.spacing(5),height:"20rem",display:"flex",flexDirection:"column",justifyContent:"center"},two:{backgroundColor:e.palette.third,color:"white",padding:e.spacing(5),height:"20rem",display:"flex",flexDirection:"column",justifyContent:"center"},three:{backgroundColor:e.palette.primary.main,color:"white",padding:e.spacing(5),height:"20rem",display:"flex",flexDirection:"column",justifyContent:"center"},four:{backgroundColor:e.palette.fourth,color:"white",padding:e.spacing(5),height:"20rem",display:"flex",flexDirection:"column",justifyContent:"center"},button:{color:"white",marginTop:"1rem",borderColor:"white"},link:{color:"white",textDecoration:"underline"}}}),W=Object(u.a)(function(e){return{button:{color:"white",marginTop:"1rem",borderColor:"white"},container:{display:"flex"}}});function _(e){var t=W(),a=e.link,n=e.learnMore,o=e.siteLink,l=4;return null==o&&(l=6),r.a.createElement(T.a,{container:!0,spacing:3},r.a.createElement(T.a,{item:!0,xs:l},r.a.createElement("a",{href:n},r.a.createElement(g.a,{variant:"outlined",fullWidth:!0,className:t.button},"Learn More"))),o,r.a.createElement(T.a,{item:!0,xs:l},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g.a,{variant:"outlined",fullWidth:!0,className:t.button},"Github Link"))))}function Q(){var e=F();return r.a.createElement("div",{className:e.root},r.a.createElement(T.a,{container:!0,spacing:6},r.a.createElement(T.a,{item:!0,xs:12,sm:6},r.a.createElement(P.a,{classes:{root:e.two}},r.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"Job Odyssey"),r.a.createElement(b.a,{variant:"p",gutterBottom:!0},"Job Odyssey is a web application aimed to gamify and optimize the job search. Soon after completion, it was revamped to be incorporated into Holberton School as an official, internal tool for students."),r.a.createElement(_,{learnMore:"/portfolio#job",link:"https://github.com/suhearsawho/jobodyssey",siteLink:r.a.createElement(T.a,{item:!0,xs:4},r.a.createElement("a",{href:"https://jobodyssey.hbtn.io",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g.a,{variant:"outlined",fullWidth:!0,className:e.button},"Website Link")))}))),r.a.createElement(T.a,{item:!0,xs:12,sm:6},r.a.createElement(P.a,{classes:{root:e.three}},r.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"Foodventures"),r.a.createElement(b.a,{variant:"p",gutterBottom:!0},'Inspired by "foodie culture", Foodventures is a web application that generates travel itineraries around food! It integrates the features of Yelp and Google APIs to calculate the efficient and customized travel plans for users.'),r.a.createElement(_,{learnMore:"/portfolio#foodventures",link:"https://github.com/suhearsawho/foodventures"}))),r.a.createElement(T.a,{item:!0,xs:12,sm:6},r.a.createElement(P.a,{classes:{root:e.four}},r.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"Air-Bnb Clone"),r.a.createElement(b.a,{variant:"p",gutterBottom:!0},"The Air-Bnb Clone, a project at Holberton School, is a team-based project that integrates a Python backend, a MySQL database, and a HTML/CSS with Javascript frontend to create a simple clone of the popular site, Air-Bnb."),r.a.createElement(_,{learnMore:"/portfolio#airbnb",link:"https://github.com/suhearsawho/AirBnB_clone_v4"}))),r.a.createElement(T.a,{item:!0,xs:12,sm:6},r.a.createElement(P.a,{classes:{root:e.two}},r.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"Challenge Timer"),r.a.createElement(b.a,{variant:"p",gutterBottom:!0},"The Challenge Timer is a web application that takes a twist on the classical Pomodoro approach by allowing users to set timed challenges for each task. Users can create accounts and save their data."),r.a.createElement(_,{learnMore:"/portfolio#timer",link:"https://github.com/suhearsawho/challenge_timer_web_app"})))))}var G=a(76),z=a.n(G),V=a(74),R=a(32),U=(a(107),a(11)),q=Object(u.a)(function(e){return{}});function Y(){q();var e=Object(V.a)();return r.a.createElement("div",null,r.a.createElement(R.VerticalTimeline,{layout:"one-column"},r.a.createElement(R.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"July 2019 to Present",iconStyle:{background:e.palette.primary.main,color:"#fff"},icon:r.a.createElement(U.g,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"Software Engineer at Dor Technologies"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"San Francisco, CA"),r.a.createElement("p",null,"Dor Technologies is a startup in San Francisco that creates thermal sensor devices to monitor foot traffic.")),r.a.createElement(R.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"June 2019 to July 2019",iconStyle:{background:e.palette.secondary.main,color:"#fff"},icon:r.a.createElement(U.g,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"Fullstack Software Engineer @ Job Odyssey with Holberton School"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"San Francisco, CA"),r.a.createElement("p",null,"Incorporating Job Odyssey, a web application designed within a span of two weeks, into Holberton School for use as an internal tool. Job Odyssey was created with the aim of consolidating and gamifying the job search.")),r.a.createElement(R.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"September 2018 to June 2019",iconStyle:{background:e.palette.third,color:"#fff"},icon:r.a.createElement(U.c,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"Software Engineer Student @ Holberton School"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"San Francisco, CA"),r.a.createElement("p",null,"Studied at Holberton School, a school that offers a project-based curriculum to become a software engineer.")),r.a.createElement(R.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"July 2017 to May 2018",iconStyle:{background:e.palette.fourth,color:"#fff"},icon:r.a.createElement(U.f,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"System Integration and Test Engineer @ Lockheed Martin"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Sunnyvale, CA"),r.a.createElement("p",null,"Organized assessment of spacecraft systems to verify if parts pass tolerances stated in GD&T drawings.")),r.a.createElement(R.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"June 2016 to December 2016",iconStyle:{background:e.palette.secondary.main,color:"#fff"},icon:r.a.createElement(U.h,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"Mechanical Engineer Intern @ Los Angeles Department of Water & Power (LADWP) "),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Los Angeles, CA"),r.a.createElement("p",null,"Rendered 3D models and P&ID diagrams of existing and upcoming water systems in Los Angeles.")),r.a.createElement(R.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"September 2013 to June 2017",iconStyle:{background:e.palette.primary.main,color:"#fff"},icon:r.a.createElement(U.b,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"B.S. Mechanical Engineer @ UCLA"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Los Angeles, CA"),r.a.createElement("p",null,"Earned a B.S. Degree in Mechanical Engineering at UCLA, studying the fundamentals of topics such as materials, thermodynamics, and mechanics."))))}var K=Object(u.a)(function(e){var t,a,n;return{root:(t={},Object(I.a)(t,e.breakpoints.up("sm"),{margin:"1rem"}),Object(I.a)(t,"margin","1rem"),Object(I.a)(t,"paddingTop","2rem"),Object(I.a)(t,"textAlign","left"),t),image:(a={maxWidth:"90%"},Object(I.a)(a,e.breakpoints.up("md"),{maxHeight:"25rem"}),Object(I.a)(a,"maxHeight","20rem"),Object(I.a)(a,"objectFit","contain"),Object(I.a)(a,"margin","1rem"),Object(I.a)(a,"borderRadius","2rem"),a),info:(n={display:"flex"},Object(I.a)(n,e.breakpoints.up("sm"),{flexDirection:"row",alignItems:"center",flexWrap:"noWrap",justifyContent:"center"}),Object(I.a)(n,e.breakpoints.up("md"),{flexDirection:"column",flexWrap:"wrap"}),Object(I.a)(n,"flexDirection","column"),Object(I.a)(n,"flexWrap","wrap"),Object(I.a)(n,"alignItems","center"),Object(I.a)(n,"justifyContent","flex-start"),Object(I.a)(n,"borderColor",e.palette.secondary.main),n),intro:{padding:"1rem"},timeline:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"flex-start",backgroundColor:"#77c9d454"}}});function $(){var e=K();return r.a.createElement("div",{className:e.root},r.a.createElement(T.a,{container:!0,spacing:2},r.a.createElement(T.a,{item:!0,xs:12,md:4},r.a.createElement(P.a,{className:e.info},r.a.createElement("img",{src:z.a,className:e.image}),r.a.createElement("p",{className:e.intro},"Hi there! I am Susan Su, a mechancial engineer turned software engineer located in San Francisco Bay Area.",r.a.createElement("br",null),r.a.createElement("br",null),"I graduated from UCLA with a B.S. Mechanical Engineering and began working at Lockheed Martin shortly after college. Because of my work ethic and dependability, I was chosen to lead testing on a classified spacecraft system.",r.a.createElement("br",null),r.a.createElement("br",null),"After I departed this job, I joined Holberton School of Software Engineering. In my last weeks of the program, I created a web application at jobodyssey.com with the aim of gamifying and optimizing the job search. Holberton School quickly asked to incorporate this application into their school as an internal tool for current and future students to use.",r.a.createElement("br",null),r.a.createElement("br",null),"Two weeks after I completed my first year curriculum at Holberton School, I joined Dor Technologies, a startup in San Francisco, as a software engineer in a three-month contract. In a short span of time with the company, I have picked up several new technologies, including AWS and Docker, and contributed to the codebase. One of my recent tasks included creating new Python classes and functions that would support algoritm testing through the creation and management of MySQL Docker containers.",r.a.createElement("br",null),r.a.createElement("br",null),"One of my biggest drives is aiming to make a positive impact at the companies that I work for. I strive to produce excellent work to support the company I represent to the best of my abilities. As a team player, I understand the importance of clear communication and support. Overall, I hope that I can be a great fit for your company!"))),r.a.createElement(T.a,{item:!0,xs:12,md:8},r.a.createElement(P.a,{className:e.timeline},r.a.createElement(Y,null)))))}var X=Object(u.a)(function(e){var t;return{root:(t={},Object(I.a)(t,e.breakpoints.up("md"),{margin:"3rem"}),Object(I.a)(t,"margin","1rem"),Object(I.a)(t,"paddingTop","2rem"),t),one:{backgroundColor:e.palette.secondary.main,color:"white",padding:e.spacing(5),height:"40rem",display:"flex",flexDirection:"column",textAlign:"left"},two:{backgroundColor:e.palette.third,color:"white",padding:e.spacing(5),height:"32rem",display:"flex",flexDirection:"column",textAlign:"left"},three:{backgroundColor:e.palette.primary.main,color:"white",padding:e.spacing(5),height:"32rem",display:"flex",flexDirection:"column",textAlign:"left"},four:{backgroundColor:e.palette.fourth,color:"white",padding:e.spacing(5),height:"32rem",display:"flex",flexDirection:"column",textAlign:"left"},white:{color:"white",textDecoration:"underline"},button:{color:"white",marginTop:"1rem",borderColor:"white"}}});function Z(e){var t=X(),a=e.numLink,n=e.first,o=e.second,l=e.github,i=6;return 2===a&&(i=4),r.a.createElement(T.a,{container:!0,spacing:3,justify:"center"},n&&r.a.createElement(T.a,{item:!0,xs:i},n),o&&r.a.createElement(T.a,{item:!0,xs:i},o),r.a.createElement(T.a,{item:!0,xs:i},r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g.a,{variant:"outlined",fullWidth:!0,className:t.button},"Github Link"))))}function ee(){return r.a.createElement(d.a,{in:!0},r.a.createElement(te,null))}function te(e){var t=X();return r.a.createElement("div",Object.assign({className:t.root},e),r.a.createElement(T.a,{container:!0,spacing:3},r.a.createElement(T.a,{item:!0,xs:12,id:"jobHolberton"},r.a.createElement(P.a,{classes:{root:t.one}},r.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"Job Odyssey"),r.a.createElement(b.a,{variant:"body1",gutterBottom:!0},"Job Odyssey is a web application that gamifies and optimizes the job search through a reward system where users earn points through applying to jobs and tracking job applications. Job searches can seem like an endless grind, and Job Odyssey aims to keep users going!",r.a.createElement("br",null),r.a.createElement("br",null),"Holberton School of Software Engineering saw the potential in this product and asked to incorporate Job Odyssey for use as an official, internal tool for their students to use. Now, it is available for current and future students to use in their job search!",r.a.createElement("br",null),r.a.createElement("br",null),"I wore many hats in this two-person project. Some of my roles are as follows:",r.a.createElement("ul",null,r.a.createElement("li",null,"Designed and structured frontend to achieve a responsive, mobile-friendly site"),r.a.createElement("li",null,"Implemented Python classes and functions to support and save user transactions with site."),r.a.createElement("li",null,"Pair-programmed backend components involving task-scheduling with Christopher Choe, my teammate."),r.a.createElement("li",null,"Created a RESTful API backend that is responds to frontend calls and produces subsequent changes in MySQL database."))),r.a.createElement(b.a,{variant:"body2",gutterBottom:!0},r.a.createElement("b",null,"Languages"),": Python, Javascript, HTML, CSS"),r.a.createElement(b.a,{variant:"body2",gutterBottom:!0},r.a.createElement("b",null,"Tech Stack"),": Flask, React, Material UI, SQLAlchemy, AWS, cron"),r.a.createElement(Z,{github:"https://github.com/suhearsawho/jobodyssey",first:r.a.createElement("a",{href:"https://jobodyssey.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g.a,{variant:"outlined",fullWidth:!0,className:t.button},"Original Version")),second:r.a.createElement("a",{href:"https://jobodyssey.hbtn.io",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g.a,{variant:"outlined",fullWidth:!0,className:t.button},"Holberton Version")),numLink:2}))),r.a.createElement(T.a,{item:!0,xs:12,id:"foodventures"},r.a.createElement(P.a,{classes:{root:t.two}},r.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"Foodventures"),r.a.createElement(b.a,{variant:"body1",gutterBottom:!0},"Ever wanted a travel plan that revolved around a must-try restaurant in the new area you're visiting? Look no further - Foodventures is the web application that generates travel itineraries around food!",r.a.createElement("br",null),r.a.createElement("br",null),'Foodventures was inspired from the dominant "foodie" culture in SF and the never-ending list of things to explore in the Bay Area.',r.a.createElement("br",null),r.a.createElement("br",null),"This project is still ongoing. Tasks included:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Programming backend that utilizes Google Distance Matrix API to calculate most efficient routes for travel itineraries."),r.a.createElement("li",null,"Reducing time spent on travel-related algorithms through Asynchronous Calls in Python."),r.a.createElement("li",null,"Creating a responsive frontend site with Google's Javascript Maps API to visualize travel itineraries for users.")),r.a.createElement(b.a,{variant:"body2",gutterBottom:!0},r.a.createElement("b",null,"Languages"),": Python, Javascript, HTML, CSS"),r.a.createElement(b.a,{variant:"body2",gutterBottom:!0},r.a.createElement("b",null,"Tech Stack"),": Flask, React, Material UI, jQuery, SQLAlchemy, Yelp Fusion API, Google Maps Javascript API, Google Distance Matrix API"),r.a.createElement(Z,{github:"https://github.com/suhearsawho/foodventures"}))),r.a.createElement(T.a,{item:!0,xs:12,id:"airbnb"},r.a.createElement(P.a,{classes:{root:t.three}},r.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"Air-Bnb Clone"),r.a.createElement(b.a,{variant:"body1",gutterBottom:!0},"The Air-Bnb Clone was a series of multiple projects at Holberton school where students switched partners for each portion of the project. Some of the major lessons learned from this project are as follows:",r.a.createElement("ul",null,r.a.createElement("li",null,"Developed a web application that uses serialization/deserialization to store and use data."),r.a.createElement("li",null,"Created a command line console to simplify troubleshooting and development process."),r.a.createElement("li",null,"Developed a frontend powered by Javascript, jQuery, CSS, and HTML."))),r.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"Languages: Python, Javascript, HTML, CSS"),r.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"Tech Stack: Flask, jQuery, SQLAlchemy, Nginx"),r.a.createElement(Z,{github:"https://github.com/suhearsawho/AirBnB_clone_v4"}))),r.a.createElement(T.a,{item:!0,xs:12,id:"timer"},r.a.createElement(P.a,{classes:{root:t.four}},r.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"Challenge Timer"),r.a.createElement(b.a,{variant:"body1",gutterBottom:!0},"The Challenge Timer takes a twist on the traditional Pomodoro timer. Instead of 25 minute intervals, users set time-based tasks for themselves with the goal of achieving it before the alarm rings.",r.a.createElement("br",null),r.a.createElement("br",null),"This application was created as a result of the personal methods that I use to motivate myself when working and the lack of existing applications that support this method.",r.a.createElement("br",null),r.a.createElement("br",null),"Important features of the project are as follows:",r.a.createElement("ul",null,r.a.createElement("li",null,"Implemented and interacted with MySQL database with raw MySQL queries."),r.a.createElement("li",null,"Designed a dashboard that allows users to monitor and track their productivity"))),r.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"Languages: Python, Javascript, HTML, CSS, SQL"),r.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"Tech Stack: Flask, jQuery, MySQL"),r.a.createElement(Z,{github:"https://github.com/suhearsawho/challenge_timer_web_app"})))))}function ae(){return r.a.createElement("div",null,"Email: susansu.software@gmail.com")}var ne=Object(u.a)(function(e){var t,a;return{root:(t={},Object(I.a)(t,e.breakpoints.up("sm"),{margin:"1rem"}),Object(I.a)(t,"margin","1rem"),Object(I.a)(t,"paddingTop","2rem"),Object(I.a)(t,"display","flex"),Object(I.a)(t,"justifyContent","center"),t),container:(a={},Object(I.a)(a,e.breakpoints.up("sm"),{width:"40%"}),Object(I.a)(a,"width","100%"),a),icon:{height:"40px",width:"40px",color:e.palette.primary.main},credits:{paddingTop:"1rem"}}});function re(){var e=ne();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.container},r.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"Social Media"),r.a.createElement(T.a,{container:!0,spacing:2},r.a.createElement(T.a,{item:!0,xs:4},r.a.createElement("a",{href:"https://github.com/suhearsawho",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(U.a,{className:e.icon}))),r.a.createElement(T.a,{item:!0,xs:4},r.a.createElement("a",{href:"https://www.linkedin.com/in/susansu1/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(U.d,{className:e.icon}))),r.a.createElement(T.a,{item:!0,xs:4},r.a.createElement("a",{href:"https://medium.com/@susansu.meche",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(U.e,{className:e.icon}))),r.a.createElement(T.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"body1",className:e.credits},"Designed and Developed by Susan Su")))))}var oe=Object(u.a)(function(e){return{}});function le(){oe();return r.a.createElement("div",null,r.a.createElement("iframe",{src:"https://drive.google.com/file/d/183TmG60HDvDAb1upmzMF-Y_6V9fl-8WK/preview",style:{width:"80%",height:"45rem"}}))}a(108);var ie=Object(s.a)({palette:{primary:{main:"#57bc90"},secondary:{main:"#77c9d4"},third:"#015249",fourth:"#a5a5af"},typography:{fontFamily:"'Quicksand', sans-serif"}}),ce=Object(u.a)(function(e){return{body:{position:"absolute",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",width:"98%",marginTop:"1rem",marginBottom:"1rem"}}});function se(e){return r.a.createElement("div",e,r.a.createElement(H,null),r.a.createElement(Q,null))}var me=function(){var e=ce();return r.a.createElement(i.a,null,r.a.createElement(m.a,{theme:ie},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:e.body},r.a.createElement(B,null),r.a.createElement(c.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{in:!0,style:{transitionDelay:"200ms"}},r.a.createElement(se,null)))}}),r.a.createElement(c.a,{exact:!0,path:"/about",component:$}),r.a.createElement(c.a,{exact:!0,path:"/portfolio",component:ee}),r.a.createElement(c.a,{exact:!0,path:"/contact",component:ae}),r.a.createElement(c.a,{exact:!0,path:"/resume",component:le}),r.a.createElement(re,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,t,a){e.exports=a.p+"static/media/main.1a9fba35.png"},76:function(e,t,a){e.exports=a.p+"static/media/aboutme.14141185.jpg"},80:function(e,t,a){e.exports=a(109)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.13aedd51.chunk.js.map