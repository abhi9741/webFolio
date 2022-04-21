/* Change this file to get your personal Porfolio */
// export NODE_OPTIONS=--openssl-legacy-provider
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vishal's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Vishal Gade Portfolio",
    type: "website",
    url: "http://vishalgade.me",
  },
};

//Home Page
const greeting = {
  title: "Vishal Gade",
  logo_name: "Vishal Gade",
  nickname: "gvr27",
  subTitle:
    "A passionate individual who likes to build things, especially Robots.",
  resumeLink:
    "https://drive.google.com/file/d/1WtR3FXH4Vuf3t775ccSOQK6n0_9Ue9mX/view?usp=sharing",
  portfolio_repository: "https://github.com/vishal-gade/webFolio",
  githubProfile: "https://github.com/vishal-gade",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/vishal-gade",
  // linkedin: "https://www.linkedin.com/in/vishalgade/",
  // gmail: "gvr2799@gmail.com",
  // facebook: "https://www.facebook.com/gvr27/",
  // instagram: "https://www.instagram.com/gvr027/",

  {
    name: "Github",
    link: "https://github.com/vishal-gade",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vishalgade/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:gvr2799@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/gvr27/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/gvr027/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Mobile Robotics",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designing and developing application specific autonomous mobile robots",
        "⚡ Programmed features including Sensor Fusion, SLAM (Simultaneous Localization and Mapping), Path Planning, Obstacle Avoidance, HRI (Human Robot Interactions)",
        "⚡ Experience in formulating application specific algorithms and working with hardware components",
      ],
      softwareSkills: [
        {
          skillName: "ROS",
          fontAwesomeClassname: "simple-icons:ros",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "cib:linux",
          style: {
            backgroundColor: "transparent",
            // color: "#D00000",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "file-icons:c",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "akar-icons:python-fill",
          style: {
            backgroundColor: "transparent",
            // color: "#3776AB",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "file-icons:opencv",
          style: {
            backgroundColor: "transparent",
            // color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Embedded System Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "micro-controllers",
          fontAwesomeClassname: "fa-microchip",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Communication Protocols",
          fontAwesomeClassname: "carbon:load-balancer-network",
          style: {
            backgroundColor: "transparent",
            // color: "#000000",
          },
        },
        {
          skillName: "Internet Of Things",
          fontAwesomeClassname: "eos-icons:iot",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "file-icons:matlab",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Sensors",
          fontAwesomeClassname: "flat-color-icons:electrical-sensor",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of California Irvine",
      subtitle: "Professional Masters in Embedded and Cyber-physical Systems",
      logo_path: "UCI_logo.png",
      alt_name: "UC Irvine",
      duration: "2021 - Present",
      descriptions: [
        "⚡ Courses: Embedded Systems Modeling and Design, Wireless Sensor and Actuator Networks, Machine Learning and Data Mining, Embedded System Software, Security and Privacy Issues in CPS.",
        "⚡ Apart from this, I am also a mentor to Embedded systems team in Electric racing car project ",
        "⚡ CGPA 3.90/4.0.",
      ],
      website_link: "https://uci.edu/",
    },
    {
      title: "Mahindra University",
      subtitle:
        "Bachelor of Technology in Electrical and Electronics Engineering",
      logo_path: "MU_logo.png",
      alt_name: "MU",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Courses: Microprocessors and Micro-controllers, Autonomous connected & Intelligent Vehicles.",
        "⚡ Apart from this, I was the lead of two funded autonomous mobile robot projects ",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college.",
      ],
      website_link: "https://www.mahindrauniversity.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Control of Mobile Robots",
      subtitle: "Georgia Institute of Technology",
      logo_path: "georgia_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/B3Y756DRLAHS",
      alt_name: "Georgia Institute of Technology",
      color_code: "#8C151599",
    },
    {
      title: "Introduction to Self-Driving Cars",
      subtitle: "University of Toronto",
      logo_path: "toronto_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/D4ZY3WJE8U3Z",
      alt_name: "University of Toronto",
      color_code: "#00000099",
    },
    {
      title: "Motion Planning for Self-Driving Cars",
      subtitle: "University of Toronto",
      logo_path: "toronto_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/MJFGXZY4MGHE",
      alt_name: "University of Toronto",
      color_code: "#0C9D5899",
    },
    {
      title: "Visual Perception for Self-Driving Cars",
      subtitle: "University of Toronto",
      logo_path: "toronto_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/RE3NYX43C6Y2",
      alt_name: "University of Toronto",
      color_code: "#1F70C199",
    },
    {
      title: "State Estimation and Localization for Self-Driving Cars",
      subtitle: "University of Toronto",
      logo_path: "toronto_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/TK968C366JKA",
      alt_name: "University of Toronto",
      color_code: "#D83B0199",
    },
    {
      title: "Python for Everybody",
      subtitle: "University of Michigan",
      logo_path: "michigan_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/BKWT65VN2MG4",
      alt_name: "University of Michigan",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I am a graduate student at University of California, Irvine seeking opportunity for professional challenges and growth in the field of Embedded Systems and Robotics.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    // {
    //   title: "Research Associate",
    //   company: "Mahindra University",
    //   company_url: "https://www.mahindrauniversity.edu.in/",
    //   logo_path: "MU_logo.png",
    //   duration: "July 2020 - October 2020",
    //   location: "Hyderabad, India",
    //   description:
    //     "Built an autonomous UV disinfection robot. Formulated an algorithm for disinfecting a place by navigating from one waypoint to another and activating the UV lights based on required dosage. Integrated Human Robot Interaction features to make the robot work alongside humans. Coordinated with a four-person team comprised of three professors",
    //   color: "#0879bf",
    // },
    // {
    //   title: "Android and ML Developer",
    //   company: "Muffito Incorporation",
    //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //   logo_path: "muffito_logo.png",
    //   duration: "May 2018 - Oct 2018",
    //   location: "Pune, Maharashtra",
    //   description:
    //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //   color: "#9b1578",
    // },
    // {
    //   title: "Android Developer",
    //   company: "FreeCopy Pvt. Ltd.",
    //   company_url: "https://www.linkedin.com/company/freecopy/about/",
    //   logo_path: "freecopy_logo.png",
    //   duration: "Nov 2017 - Dec 2017",
    //   location: "Ahmedabad, Gujarat",
    //   description:
    //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //   color: "#fc1f20",
    // },
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Research Associate",
          company: "Mahindra University",
          company_url: "https://www.mahindrauniversity.edu.in/",
          logo_path: "MU_logo.png",
          duration: "July 2020 - October 2020",
          location: "Hyderabad, India",
          description:
            "Built an autonomous UV disinfection robot. Formulated an algorithm for disinfecting a place by navigating from one waypoint to another and activating the UV lights based on required dosage. Integrated Human Robot Interaction features to make the robot work alongside humans. Coordinated with a four-person team comprised of three professors",
          color: "#0879bf",
        },
        {
          title: "Summer Intern",
          company: "Indian Institute of Technology",
          company_url: "https://www.delhivery.com/",
          logo_path: "IIT_logo.png",
          duration: "May 2019 - July 2019",
          location: "Delhi, India",
          description:
            "Devised and assembled two robots - Autonomous mobile platform and a Stewart platform. Collaborated with a team of 2 peers to design, fabricate and assemble everything from scratch.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer",
          company: "DD-Robocon - Asia-Pacific Broadcasting Union (ABU)",
          company_url: "http://www.ddrobocon.in/",
          logo_path: "robocon.jpg",
          duration: "July 2019",
          location: "Delhi, India",
          description: "",
          color: "#4285F4",
        },
        {
          title: "Organizing Member",
          company: "IEEE Symposium on Smart Electronic Systems (iSES)",
          company_url: "https://ieee-ises.org/2018/",
          logo_path: "ieee_logo.png",
          duration: "July 2019",
          location: "Hyderabad, Telangana",
          description: "",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
