// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mangesh Damre",
  title: "Hi all, I'm Mangesh",
  subTitle: emoji(
    "A passionate AI/ML Engineer with experience in building predictive analytics models, hate speech detection, and cloud integration."
  ),
  resumeLink: "https://drive.google.com/file/d/your_resume_link_here/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/mangeshdamre1999",
  linkedin: "https://www.linkedin.com/in/mangesh-damre-266a951bb",
  gmail: "mangeshdamre2001@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "Experienced AI/ML Engineer & Full-Stack Developer",
  skills: [
    emoji("⚡ Building ML models for predictive analytics and NLP tasks"),
    emoji("⚡ Implementing cloud-based solutions on AWS, IBM Cloud"),
    emoji("⚡ Developing full-stack applications with Node.js, Express, MongoDB")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "TensorFlow", fontAwesomeClassname: "fab fa-tensorflow" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Indian Institute of Information Technology, Allahabad",
      logo: require("./assets/images/iiitaLogo.png"),
      subHeader: "Master of Technology in Information Technology",
      duration: "2023 - Present",
      desc: "Focused on AI/ML research for detecting online hate speech in low-resource languages.",
    },
    {
      schoolName: "Prof. Ram Meghe Institute of Technology and Research, Amravati",
      logo: require("./assets/images/prmitrLogo.png"),
      subHeader: "Bachelor of Engineering in Information Technology",
      duration: "2019 - 2022",
      desc: "Graduated with a 9.21 GPA, engaging in projects that applied ML for practical solutions."
    }
  ]
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Developer",
      company: "LTIMindtree",
      companylogo: require("./assets/images/ltimindtreeLogo.png"),
      date: "July 2022 - August 2023",
      desc: "Developed predictive analytics models for vehicle health, leveraging AI/ML for real-time diagnostics and anomaly detection."
    }
  ]
};

// Projects
const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/learnSphereLogo.png"),
      projectName: "LearnSphere Ed-Tech Website",
      projectDesc: "An educational platform enhancing online learning experiences, using Node.js and MongoDB.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/mangeshdamre1999/learnsphere"
        }
      ]
    },
    {
      image: require("./assets/images/drowsyDriverLogo.png"),
      projectName: "Drowsy Driver Detection System",
      projectDesc: "Detects drowsiness in drivers using facial landmark detection and real-time monitoring with OpenCV.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/mangeshdamre1999/drowsy-driver-detection"
        }
      ]
    }
  ],
  display: true
};

// Achievements Section
const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Achievements and Certifications",
  achievementsCards: [
    {
      title: "Machine Learning Certification",
      subtitle: "Completed ML certification with hands-on projects.",
      image: require("./assets/images/mlCertificateLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://example.com/certificate"
        }
      ]
    }
  ],
  display: true
};

// Contact Information
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Reach out for collaboration or discussions on AI/ML projects.",
  number: "+91-7709953889",
  email_address: "mangeshdamre2001@gmail.com"
};

// Export all sections
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  achievementSection,
  contactInfo
};
