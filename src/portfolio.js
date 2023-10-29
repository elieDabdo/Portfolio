/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Elie Abdo",
  title: "Hello, I'm Elie",
  subTitle: emoji(
    "A passionate Computer Engineer 🚀 with a deep-rooted love for software development, robotics, and artificial intelligence."
  ),
  resumeLink:
    "https://docs.google.com/drawings/d/1hKSdRsLyIPpL684eFNNqWjrkrhZmJLEKobRFeE8Iw8A/edit", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/elieDabdo",
  linkedin: "https://www.linkedin.com/in/elie-dimitri-abdo123/",
  gmail: "elie.ad@outlook.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I enjoy doing",
  subTitle: "__________________________________________________________________________ ",
  skills: [
    emoji(
      "👉 Proficient in developing full-stack web applications that prioritize user satisfaction, from elegant front-end interfaces to robust back-end functionality."
    ),
    emoji("👉 Skilled in writing software to control and manage robotic systems, enabling them to perform tasks and interact with the physical world effectively."),
    emoji(
      "👉 Harness the power of machine learning and artificial intelligence to devise solutions for modern challenges."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-text-width"
    },
    {
      skillName: "ROS",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-star"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "McGill University",
      logo: require("./assets/images/mcgill_logo.jpg"),
      subHeader: "Bachelor of Computer Engineering, Minor in Artificial Intelligence",
      duration: "September 2020 - Current",
      desc: "CGPA: 3.7/4.0",
    },
    {
      schoolName: "Lycée Louis Massignon",
      logo: require("./assets/images/llm.jpg"),
      subHeader: "Baccalauréat Français, Filière S",
      duration: "September 2017 - July 2020",
      desc: "Grade 18.3/20, Felicitation du Jury",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Trolley",
      companylogo: require("./assets/images/trolley_logo.jpg"),
      date: "May 2023 – August 2023",
      rlink: "https://trolley.com/",
      descBullets: [
        "Implemented multiple new API endpoints and BE features based on specifications and requirements from product managers/ clients.",
        "Implemented a webhook sending services to alert customers about updates to data.",
        "Integrated the Platform/Tax developer teams and participated in regular sprints attending stand-ups, grooming, retrospectives and sprint planning sessions."
      ]
    },
    {
      role: "Project Manager",
      company: "McGill Robotics",
      companylogo: require("./assets/images/mcgill_robotics.jpg"),
      date: "September 2022 – Present",
      rlink: "https://mcgillrobotics.com/",
      descBullets: [
        "Implemented computer vision for underwater object detection using YOLOv8 model.",
        "Created PID packages to improve controls and stability in movement of the robot.",
        "Defined overall vision of the new mechanical design of the AUV.",
        "Organized team meetings, recruitment of new members and budgeting."
      ],
    },
    {
      role: "Technical Engineer",
      company: "The Cube Labs",
      companylogo: require("./assets/images/cube_lab.jpg"),
      date: "September 2022 – Present",
      descBullets: [
        "Slice and format CAD models using Cura and FormLabs to satisfy customers’ requirements and deliver high-quality 3D prints.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to chat?",
  number: "+514 887-8855",
  email_address: "elie.ad@outlook.com"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable
};
