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
    "A passionate Computer Engineer 🚀 with a love for"
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
  subTitle: "AND SOME COOL TECH I LOVE USING",
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
  subtitle: "SOME PROJECTS I WORKED ON INDIVIDUALLY AND WITH FRIENDS",
  projects: [
    {
      image: require("./assets/images/my_trainer.png"),
      projectName: "My Trainer",
      projectDesc: "My Trainer helps you follow along training videos by using computer vision to superpose your skeleton on the trainer's skeleton. It tells the user if their joints' positions are right/wrong according to the training video, so that they can adjust their movements.",
      footerLink: [
        {
          name: "Check out the Website",
          url: "https://eliedabdo.github.io/CodeJam/"
        }, 
        {
          name: "Check out the Github",
          url: "https://github.com/elieDabdo/CodeJam"
        }
      ]
    },
    {
      image: require("./assets/images/rate.png"),
      projectName: "Rate My Fit",
      projectDesc: "Rate My Fit uses computer vision to rate people's outfits based on color coordination, mood/aesthetic, appropriateness for the current weather, and the combination of complementary textures",
      footerLink: [
        {
          name: "Check out the Github",
          url: "https://github.com/elieDabdo/McHacks2023"
        }
      ]
    },
    {
      image: require("./assets/images/melo.png"),
      projectName: "Melo-Gen",
      projectDesc: "Melo-Gen is powered by a Recurrent Neural Network model that generates notes in sequences, thus creating melodies. The user interface features intuitive controls, including play, pause, and navigation buttons, and allows users to interact with the AI by inputting notes to start of the melodies to be generated.",
      footerLink: [
        {
          name: "Check out the Dev Post",
          url: "https://devpost.com/software/melogen-hj083w"
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
    "Achievements and Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "1st Place Robohacks 2023",
      subtitle:
        "RoboHacks is a student competition where the goal is to develop a simplistic robot in 24 hours - March 2023.",
      image: require("./assets/images/robohacks.png"),
      footerLink: [
        {
          name: "Check it out",
          url: "https://www.facebook.com/robohacks/"
        }
      ]
    },
    {
      title: "2nd Place MAIS Hacks 2023",
      subtitle:
        "MAIS Hacks is a hackathon run by McGill Artificial Intelligence Society - October 2023.",
      image: require("./assets/images/mais.jpg"),
      footerLink: [
        {
          name: "Check it out",
          url: "https://maishacks.com/"
        }
      ]
    },
    {
      title: "RoboSub 2023 Semi-Finalist",
      subtitle:
        "RoboSub is an international student competition. Student teams from around the world design and build robotic submarines, otherwise known as AUV - August 2023.",
      image: require("./assets/images/robosub.png"),
      footerLink: [
        {
          name: "Check it out",
          url: "https://robosub.org/programs/2023/"
        }
      ]
    },

    {
      title: "Top 5 McHacks 2023",
      subtitle: "For 24 hours, over 500 of the boldest young minds across the globe come together for a jam-packed weekend of epic hacking - January 2023.",
      image: require("./assets/images/mchacks.png"),
      footerLink: [
        {
          name: "Check it out",
          url: "https://mchacks10.devpost.com/"
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
