/* Change this file to get your personal Porfolio */
// export NODE_OPTIONS=--openssl-legacy-provider
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abhinav's Portfolio",
  description: "Machine Learning | Computer Vision ",
  og: {
    title: "Abhinav Reddy Portfolio",
    type: "website",
    url: "http://abhinavreddy.tech",
  },
};

//Home Page
const greeting = {
  title: "Abhinav Reddy Nimma",
  logo_name: "Abhinav Reddy Nimma",
  nickname: "abhi",
  subTitle: "Machine Learning | Computer Vision ",
  resumeLink:
    "https://studntnu-my.sharepoint.com/:b:/g/personal/abhinavn_ntnu_no/EdUws1NE7-pNlBOxqdFH-_YBbzTS1Ft5AkFn8_FKSYcYXQ?e=3crdLY",
  portfolio_repository: "https://github.com/abhi9741/webFolio",
  githubProfile: "https://github.com/abhi9741",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/abhi9741",
  // linkedin: "https://www.linkedin.com/in/abhinavreddyn/",
  // gmail: "abhinavreddyn@stud.ntnu.no",
  // instagram: "https://www.instagram.com/abhinavreddynimma/",

  {
    name: "Github",
    link: "https://github.com/abhi9741",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhinavreddyn/",
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
    link: "mailto:abhinavreddyn@stud.ntnu.no",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  //{
  //  name: "Facebook",
  //  link: "https://www.facebook.com/gvr27/",
  // fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  // backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  //},
  {
    name: "Instagram",
    link: "https://www.instagram.com/abhinavreddynimma/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Computer Vision",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designing and developing Deep Learning based systems for computer vision tasks",
        "⚡ Implemented systems for acquiring, processing, analyzing images and videos",
        "⚡ Experience in implementing end-to-end Deep Learning systems in Python, PyTorch",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos:pytorch-icon",
          style: {
            backgroundColor: "transparent",
            // color: "#D00000",
          },
        },
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            backgroundColor: "transparent",
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
        {
          skillName: "Linux",
          fontAwesomeClassname: "flat-color-icons:linux",
          style: {
            backgroundColor: "transparent",
            // color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Machine Learning",
      fileName: "FullStackImg",
      skills: [
        "⚡ Well versed with various machine learning algorithms ",
        "⚡ Experienced in implementing Data-pipelines, extracting patterns from data",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "file-icons:r",
          style: {
            backgroundColor: "transparent",
            // color: "#000000",
          },
        },
        {
          skillName: "Data Viz",
          fontAwesomeClassname: "wpf:statistics",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "DBMS",
          fontAwesomeClassname: "vscode-icons:file-type-sql",
          style: {
            backgroundColor: "transparent",
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
      title:
        "Erasmus Mundus Joint Master's Degree in Computational Colour and Spectral Imaging ",
      //subtitle: "Erasmus Mundus Joint Master's Degree in Computational Colour and Spectral Imaging ",
      logo_path: "cosi_logo.webp",
      alt_name: "cosi",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ Two-year scientific Erasmus Mundus Joint Master’s Degree offered by the consortium of 4 universities, aiming to train the next generation of highly-skilled industrial experts in applied Colour Science, in various cutting-edge industries (Image Processing, Vision, Graphics, Spectral Imaging, Computer Graphics, Optics, Photonics)",
      ],
      website_link: "https://cosi-master.eu/cosi-master-degree/",
    },
    {
      //title: "Erasmus Mundus Joint Master's Degree in Computational Colour and Spectral Imaging ",
      subtitle:
        "Specialization in Computational Colour & Visual Computing, Norwegian University of Science and Technology (NTNU) ",
      logo_path: "erasmus_logo.webp",
      alt_name: "erasmus",
      duration: "Aug 2021 - Dec 2021",
      descriptions: [
        "⚡ Courses : Image Processing and Analysis, Computer Graphics Fundamentals and Applications, Introduction to Research on Colour and Visual Computing, Cross-media Color Reproduction",
      ],
      //website_link: "https://cosi-master.eu/cosi-master-degree/",
    },
    {
      //title: "Erasmus Mundus Joint Master's Degree in Computational Colour and Spectral Imaging ",
      subtitle:
        "Specialization in Photonics, Image and Vision, Universidad de Granada ",
      logo_path: "ugr_logo.png",
      alt_name: "ugr",
      duration: "Jan 2022 - June 2022",
      descriptions: [
        "⚡ Courses : Computer vision, Data science, Remote Imaging and Sensing, Human perception and cognition, Advanced colour and spectral imaging, Advanced optoelectronics",
      ],
      //website_link: "https://cosi-master.eu/cosi-master-degree/",
    },
    {
      //title: "Erasmus Mundus Joint Master's Degree in Computational Colour and Spectral Imaging ",
      subtitle:
        "Specialization in Colour and Visual Computing, Norwegian University of Science and Technology (NTNU)  ",
      logo_path: "ntnu_logo.png",
      alt_name: "ntnu",
      duration: "Aug 2022 - Dec 2022",
      descriptions: [
        "⚡ Courses : Deep learning for visual computing, Specialisation in video processing, Specialisation in colour imaging, AAppearance, perception and measurement",
      ],
      //website_link: "https://cosi-master.eu/cosi-master-degree/",
    },
    {
      title: "Mahindra University",
      subtitle: "Bachelor of Technology in Computer Science and Engineering",
      logo_path: "MU_logo.png",
      alt_name: "MU",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Courses: Deep Learning, Machine Learning, Advanced Data Analytics.",
        "⚡ Scholorship for academic excellence in 2017-18 & in 2018-19  ",
      ],
      website_link: "https://www.mahindrauniversity.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  // description:
  //"I am a graduate student at University of California, Irvine seeking opportunity for professional challenges and growth in the field of Embedded Systems and Robotics.",
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
          title: "Machine Learning Intern",
          company: "Picterus AS",
          company_url: "https://www.picterus.com/",
          logo_path: "picterus.png",
          duration: "July 2022 - Aug 2022",
          location: "Trondheim, Norway",
          description:
            "Responsible for designing & implementing deep learning based system for Spectral Reconstruction of Skin from Smartphone Images. ",
          color: "#D83B01",
        },
        {
          title: "Software Developer Intern",
          company: "Dell Technologies",
          company_url: "https://www.dell.com/en-in",
          logo_path: "dell.jpg",
          duration: "Jan 2020 - Mar 2020",
          location: "Hyderabad, India",
          description:
            " Responsible for creating Automation Scripts for Business Intelligence Team, Dell Financial Services. ",
          color: "#0879bf",
        },
        {
          title: "Research Intern",
          company: "The Norwegian Colour and Visual Computing Lab",
          company_url: "https://www.ntnu.edu/colourlab#/view/about",
          logo_path: "Colourlab.png",
          duration: "Jun 2019 - Aug 2019",
          location: "Gjovik, Norway",
          description:
            "Responsible for building a system to Detect defects (potholes & cracks) on road surfaces using Computer Vision and AI with The Norwegian Colour and Visual Computing Laboratory.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer",
          company:
            "The International Conference on Machine Learning and Data Science",
          company_url: "http://icmlds.com/",
          logo_path: "icmlds.png",
          duration: "December 2019",
          location: "Hyderbad, India",
          description: "",
          color: "#4285F4",
        },
        // {
        //   title: "Organizing Member",
        //   company: "IEEE Symposium on Smart Electronic Systems (iSES)",
        //   company_url: "https://ieee-ises.org/2018/",
        //   logo_path: "ieee_logo.png",
        //   duration: "July 2019",
        //   location: "Hyderabad, Telangana",
        //   description: "",
        //   color: "#D83B01",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Interested in designing & developing Intelligent Systems, that learn autonomously from data, with a focus on Computer Vision & Imaging applications. ",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  //description:
  //"I am the First Author for two research papers which are presented in HCI International conferences held in 2020 and 2021.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "abhi.jpg",
    description:
      "I am available on almost every social media. Feel free to message me.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    // link: "https://ashutoshhathidara.wordpress.com",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    //title: "Address",
    //subtitle: "10 Via Ricasol, Apt A227, Irvine, CA - 92612",
    //avatar_image_path: "address_image.svg",
    //location_map_link:
    //"https://www.google.com/maps/place/10+Via+Ricasol,+Irvine,+CA+92612/@33.6689089,-117.852646,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcde610a555823:0x2cfba1ba61e83dbc!8m2!3d33.6689089!4d-117.8504573",
  },
  phoneSection: {
    //title: "Phone Number",
    //subtitle: "+1 (949)228-7532",
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
