/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "AHMED86",
  title: "Hi! I'm Abdirahman Ahmed",
  subTitle: emoji(
    "A passionate Cybersecurity student and enthusiast, developing deep understanding of network security, cloud computing, and ethical hacking."
  ),
  subTitle2: emoji(
    "I have hands-on experience building and managing home labs focused on cybersecurity concepts such as SOC operations, Security Monitoring, EDR, and Malware Analysis. I'm particularly interested in Network Security, Cloud Security, and Penetration Testing."
  ),
  resumeLink: "", // Add your resume link here
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ahmed86-star",
  linkedin: "https://linkedin.com/in/abdirahman-ahmed-77142623a",
  gmail: "&#97;&#103;&#104;&#101;&#101;&#119;&#97;&#108;&#64;&#97;&#115;&#117;&#46;&#101;&#100;&#117;",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://dav1c11.medium.com",
  BTLO: "https://blueteamlabs.online/home/user/55da551ee807effa9fb733",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CYBERSECURITY ENTHUSIAST WHO LOVES EXPLORING SECURITY CONCEPTS AND BUILDING SECURE SYSTEMS",
  skills: [
    emoji(
      "⚡ Network Security, Cloud Security, Penetration Testing, SOC Operations, Security Monitoring, EDR, Malware Analysis"
    ),
    emoji("⚡ Operating Systems: Windows Server, Ubuntu Server, Kali Linux"),
    emoji(
      "⚡ Tools: Proxmox, VirtualBox, Wireshark, pfSense, Python, Bash scripting, SQL"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/ASULogo.jpg"),
      subHeader: "Master of Science in Computer Science (Cybersecurity specialization)", 
      duration: "August 2022 - May 2023",
      desc: "GPA: 4.00",
      descBullets: [
        "CSE 466: Computer System Security",
        "CSE 469: Computer and Network Forensics", 
        "CSE 539: Applied Cryptography",
        "CSE 543: Information Assurance & Security",
        "CSE 545: Software Security",
        "CSE 548: Advanced Computer Network Security",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    // {
    //   Stack: "Frontend/Design", //Insert stack or technology you have experience in
    //   progressPercentage: "90%" //Insert relative proficiency in percentage
    // },
    // {
    //   Stack: "Backend",
    //   progressPercentage: "70%"
    // },
    // {
    //   Stack: "Programming",
    //   progressPercentage: "60%"
    // }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Teaching Assistant",
      company: "Arizona State University",
      companylogo: require("./assets/images/ASULogo.jpg"),
      date: "August 2023 – Present",
      desc: "CSE 469: Computer and Network Forensics",
      descBullets: [
        "Collaborating with the professor to optimize course assignment content and learning outcomes",
        "Delivering general assistance and clarifying course material for the class of 150 students"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "Arizona State University",
      companylogo: require("./assets/images/ASULogo.jpg"),
      date: "July 2023 - August 2023",
      desc: "CSE 365: Information Assurance",
      descBullets: [
        "Foundation to offensive security techniques",
        "Lead 25 practical applications and problem-solving sessions  helping students increase their score by 30%",
        "Facilitated engaging classroom discussions and 1-on-1 doubt solving sessions for the class of 20 students"
      ]
    },
    {
      role: "Associate Software Development Engineer",
      company: "Publicis Sapient",
      companylogo: require("./assets/images/PS.png"),
      date: "May 2021 - May 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Developed a network library using React Native and TypeScript for REST, GraphQL, and SSL API calls",
        "Automated installation and configuration with CLI commands in React Native and Shell Script",
        "Reduced integration time for modules to under 30 minutes, enhancing efficiency",
        "Optimized major modules for improved navigation, state management, offline sync, and authentication"

      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY KEY PROJECTS AND EXPERIMENTS",
  projects: [
    {
      // image: require("./assets/images/project1.png"), // Comment out until you have the image
      projectName: "Secure Chat Application",
      projectDesc: [
        "Built using Java and BouncyCastle for encryption",
        "Implemented secure communication protocols",
        "Focus on end-to-end encryption and secure data transfer"
      ]
    },
    {
      // image: require("./assets/images/project2.png"), // Comment out until you have the image
      projectName: "Virtualization Lab Environment",
      projectDesc: [
        "Implemented Proxmox and TrueNAS for virtualization and storage",
        "Created isolated networks for security testing",
        "Deployed various security tools and monitoring solutions"
      ]
    },
    {
      // image: require("./assets/images/project3.png"), // Comment out until you have the image
      projectName: "BEC Detection System",
      projectDesc: [
        "Developed Business Email Compromise detection system",
        "Implemented machine learning algorithms for threat detection",
        "Created automated alert system for suspicious activities"
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "CompTIA CySA+",
      subtitle: "",
      image: require("./assets/images/Comptia_CySA_2Bce.png"),
      imageAlt: "CompTIA CySA+ Logo",
      footerLink: [
        {
          name: "Certification", 
          url: "https://www.credly.com/badges/9d1121a8-a483-40a7-bfde-7d7932dd9ed6/public_url"
      }
      ]
    },
    {
      title: "CompTIA Security+",
      subtitle:
        "",
      image: require("./assets/images/SecurityPlus Logo Certified CE.png"),
      imageAlt: "CompTIA Security+ Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/ba4e7953-05c9-484a-bae3-a19bd656bb17/public_url"
        },
      ]
    },
    {
      title: "(ISC)2 Certified in Cybersecurity",
      subtitle:
        "",
      image: require("./assets/images/isc2cc.png"),
      imageAlt: "(ISC)2 CC Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/b2583088-4a95-4c1a-ab1b-50a3ff243c46/public_url"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Along with Love for Cybersecurity, I also love to write and share my experience.",
    site: "https://dav1c11.medium.com",
    linkText: "dav1c11.medium.com",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://dav1c11.medium.com/breaking-down-cysa-a-students-guide-to-crushing-the-cysa-exam-b648a693c33f",
      title: "Breaking Down CySA+: A Student’s Guide to Crushing the CySA+ Exam!",
      description:
        "I conquered the CompTIA CySA+ exam! In this blog, I’ll share my preparation strategy, centered around the Sybex Study Guide and a formidable 1000-question practice test book"
    },
    {
      url: "https://dav1c11.medium.com/security-unlocked-my-journey-to-passing-the-exam-up-next-cysa-ed8368ee46bc",
      title: "Security+ Unlocked: My Journey to Passing the Exam! Up Next, CySA+",
      description:
        "I passed the Security+ exam! In this blog, I’ll provide a review of my preparation strategy and share valuable insights into tackling the Security+ exam."
    },
    {
      url: "https://dav1c11.medium.com/defcon-31-revelation-my-epic-leap-into-cybersecurity-magic-and-chaos-9db48666eed",
      title: "DEFCON 31 Revelation: My Epic Leap into Cybersecurity Magic And Chaos!",
      description:
        "As a first-time attendee, I embarked on an adventure that took me from the comfort of my introverted shell to the vibrant chaos of DEFCON."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "&#97;&#103;&#104;&#101;&#101;&#119;&#97;&#108;&#64;&#97;&#115;&#117;&#46;&#101;&#100;&#117;"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
