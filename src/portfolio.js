/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Walter Maffione",
  title: "Hi everyone, I'm Walter",
  subTitle: emoji(
    "A passionate AI Software Engineer 🚀  having experience building advanced AI Computer Vision software and applications with Python.\nI'm also actively learning to program on Bitcoin and Lightning Network ⚡️"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1fPNK_f2YKkXI-ACv8viMfWjVzFY4g37gUQnZf_p7z9U/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/waltermaffy",
  linkedin: "https://www.linkedin.com/in/walter-maffione/",
  gmail: "waltermaffione@gmail.com",
  medium: "https://medium.com/@waltermaffy",
  kaggle: "https://www.kaggle.com/waltermaffy",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I explore and develop the most advanced technologies hoping to improve people's lives ",
  skills: [
    emoji("⚡ Create and usege of Deep Neural Networks to solve Computer Vision problems"),
    emoji("⚡ Multi-process scalable applications of data analysis using Python-Django-MongoDB"),
    emoji("⚡ Developing and deploying of software architecures using Docker containers "),
    emoji("⚡ Runnig a Bitcoin full-node and studying advancement in Lightning Network"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Tensorflow\nPytorch",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Bitcoin",
      fontAwesomeClassname: "fab fa-bitcoin"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "SQL/MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Javascript",
      fontAwesomeClassname: "fab fa-js"
    },

    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Software Engineer",
      company: "Addfor Industriale",
      companylogo: require("./assets/images/ADF_w.png"),
      date: "May 2020 – Present",
      desc: "I'm developing and deploying industrial Computer Vision software by using state-of-the-art Deep Learning models",
      descBullets: [
        "I take care with most aspects of the software life-cycle, from the research of the best AI model, to the design of the software architecture and finally to the development and testing of the solution before the deployment",
        "Developed a solution to automatically recognize and classify items on retail's shelves from videos, using an advanced CV data pipeline, achieving 97% of accuracy",
        "Developed and tested a multi-camera detection analysis software in a smart security environment"
      ]
    }
  ]
};


const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Politecnico di Torino",
      logo: require("./assets/images/polito.png"),
      subHeader: "MSc, Computer Engineering (Data Science)",
      duration: "March 2018 - March 2020",
      desc: "Master Thesis on generating synthetic data for autonomous driving",
      descBullets: [
        "Machine Learning and Deep learning, Big Data analytics" ,
        "Data science and database technologies",
        "Cybersecurity, Computer Networks, System programming, Mobile Development"
      ]
    },
    {
      schoolName: "Politecnico di Torino",
      logo: require("./assets/images/polito.png"),
      subHeader: "Bachelor’s Degree in Computer Engineering",
      duration: "October 2014 - March 2018",
      descBullets: [
        "Algorithms and Programming, Operating Systems, Computer Architecture",
        "Automatic Controls, Complex systems and networks, Electronics",
        "Mathematical analysis and linear algebra"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Algorithms and Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning and Deep Learning", 
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Database",
      progressPercentage: "70%"
    },
    {
      Stack: "Bitcoin, Blockchains",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "BITPolito",
  subtitle: "Student team with the aim to disclosure, research and development in the field of Bitcoin",
  projects: [
    {
      image: require("./assets/images/logo_bitpolito_textonly_white.png"),
      projectName: "I'm helping in Bitcoin full-node administration and Lightning Network research",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://bitpolito.it/"
        }
        //  you can add extra buttons here.
      ]
    },
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
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
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
    "Discuss a project or just want to ask something? My Inbox is open",
  email_address: "waltermaffione@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
