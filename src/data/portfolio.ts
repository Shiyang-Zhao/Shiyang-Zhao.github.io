const resumePDF = "/assets/files/Resume.pdf";
const transcriptPDF = "/assets/files/Transcript.pdf";
const profileImageLight = "/assets/images/ProfileImage/profileImageLight.webp";
const profileImageDark = "/assets/images/ProfileImage/profileImageDark.webp";

const header = {
  homepage: "/",
  title: "Shawn",
};

const about = {
  name: "Shiyang Zhao",
  role: "Software Engineer",
  description:
    "Computer Science Bachelor graduated from Arizona State University with experience in Full-Stack Development and Machine Learning",
  resume: resumePDF,
  transcript: transcriptPDF,
  social: {
    linkedin: "https://www.linkedin.com/in/shiyang-zhao/",
    github: "https://github.com/Shiyang-Zhao",
    instagram: "https://www.instagram.com/shawn_zhao0/",
  },
};

const education = [
  {
    university: "University of Illinois Urbana-Champaign",
    logo: "/assets/images/Logo/uiuc.webp",
    url: "https://illinois.edu/",
    degree: "Master of Computer Science",
    startDate: "08/2024",
    endDate: "12/2025",
    GPA: "4.0/4.0",
    honor: ["Coming soon"],
  },
  {
    university: "Arizona State University",
    logo: "/assets/images/Logo/asu.webp",
    url: "https://www.asu.edu/",
    degree: "B.S. Computer Science",
    startDate: "01/2020",
    endDate: "12/2022",
    GPA: "3.9/4.0",
    honor: [
      "Summa Cum Laude",
      "New American University Scholarship UG",
      "Dean's List",
    ],
  },
];

const work = [
  {
    jobTitle: "Software Engineer",
    company: "RND4IMPACT INC.",
    logo: "/assets/images/Logo/rnd4impact.webp",
    url: "https://www.rnd4impact.com/",
    startDate: "03/2023",
    endDate: "03/2024",
    location: "690 Saratoga Ave #100, San Jose, CA 95129",
    description: [
      "•	Developed full-stack web applications that utilize technologies such as Java, Python, and JavaScript including Spring Boot, React.js, Django",
      "•	Collaborated with a team of 5 members to gather requirements, design system architectures, and deliver solutions",
      "•	Streamlined project tracking using Scrum methodologies and Jira, while maintaining version control via Git",
      "•	Enhanced website performance by 30%, leading to improved load times and superior user experience",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "React.js",
      "Node.js",
      "Python",
      "Django",
      "MySQL",
      "Heroku",
      "AWS",
      "Selenium",
      "Jenkins",
    ],
  },
  {
    jobTitle: "Guest Experience Associate",
    company: "HOPE CHURCH MOVEMENT",
    logo: "/assets/images/Logo/hopechurch.webp",
    url: "https://hopechurchmovement.com/",
    startDate: "04/2020",
    endDate: "12/2022",
    location: "730 N Mill Ave, Tempe, AZ 85288",
    description: [
      "•	Developed effective communication and leadership within a guest experience team of 30",
      "•	Delivered exceptional experiences to over 250 guests consistently",
      "•	Collaborated with cross-functional teams to distribute tasks efficiently, resulting in a 23% increase in efficiency",
    ],
    skills: [
      "Leadership",
      "Communication",
      "Problem-Solving",
      "Teamwork",
      "Time Management",
      "Positive Attitude",
      "Time Management",
    ],
  },
];

const projects = [
  {
    name: "Metasphere",
    description: [
      "•	Developed Metasphere individually, a dynamic social media web application utilizing Python, Django, React.js, PostgreSQL, and Docker",
      "•	Fostered user interaction with a robust search, file sharing, commenting, private messaging, and group chats via WebSocket and Django Channels",
      "•	Streamlined the development process by integrating Jenkins with Github Webhooks and automating the CI/CD pipeline with Selenium",
      "•	Enhanced file-sharing efficiency by 20% and amplified user engagement by a notable 40%",
    ],
    stack: [
      "Python",
      "Django",
      "JavaScript",
      "React.js",
      "Docker",
      "Bootstrap",
      "Selenium",
      "Jenkins",
      "Git",
      "Github",
    ],
    sourceCode: "https://github.com/Shiyang-Zhao/Metasphere",
    livePreview: "https://github.com/Shiyang-Zhao/Metasphere",
  },
  {
    name: "EmploVerse",
    description: [
      "•	Collaborated with a team of 5 members to build EmploVerse, a Java Spring-based web application, complemented with React.js and MySQL",
      "•	Developed CRUD operations, attendance tracking for 5 departments, RBAC across 4 levels, and JWT authentication",
      "•	Introduced real-time chat via WebSocket, cutting down email correspondence by 30% for internal communications",
      "•	Deployed and maintained on AWS and Heroku, ensuring scalability, security, and backend efficiency",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "React.js",
      "WebScket",
      "MySQL",
      "Heroku",
      "AWS",
    ],
    sourceCode: "https://github.com/Shiyang-Zhao/EmploVerse-Backend",
    livePreview: "https://github.com/Shiyang-Zhao/EmploVerse-Backend",
  },
  {
    name: "Sales Prediction of Walmart",
    description: [
      "•	Utilized Python, linear regression, and Machine Learning techniques to predict sales across various Walmart departments",
      "•	Analyzed historical markdown data from 45 Walmart stores to understand the impact of holiday markdown events",
      "•	Leveraged NumPy and Pandas for data manipulation and Scikit-Learn for dimensionality reduction, significantly boosting the predictive accuracy of the model",
      "•	Achieved a 20% improvement in sales forecasting accuracy with the model implementation",
    ],
    stack: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Machine Learning"],
    sourceCode: "https://github.com/Shiyang-Zhao?tab=repositories",
    livePreview: "https://github.com/Shiyang-Zhao?tab=repositories",
  },
  // {
  //   name: 'Python Crawler',
  //   description: ['• Developed a python crawler to simplify the process of gathering and organizing information about graduate admission requirements for various universities and institutions.'],
  //   stack: ['Python', 'Scrapy'],
  //   sourceCode: 'https://github.com/Shiyang-Zhao?tab=repositories',
  //   livePreview: 'https://github.com/Shiyang-Zhao?tab=repositories',
  // },
];

const skills = [
  {
    name: "Java",
    url: "/assets/images/Logo/java.webp",
    destination: "https://www.java.com/zh-CN/",
  },
  {
    name: "JavaScript",
    url: "/assets/images/Logo/js.webp",
    destination: "https://www.javascript.com/",
  },
  {
    name: "Python",
    url: "/assets/images/Logo/python.webp",
    destination: "https://www.python.org/",
  },
  {
    name: "C/C++",
    url: "/assets/images/Logo/cplusplus.webp",
    destination: "https://cplusplus.com/",
  },
  {
    name: "C#",
    url: "/assets/images/Logo/csharp.webp",
    destination: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    name: "Sass",
    url: "/assets/images/Logo/sass.webp",
    destination: "https://sass-lang.com/",
  },
  {
    name: "Bootstrap",
    url: "/assets/images/Logo/bootstrap.webp",
    destination: "https://getbootstrap.com/",
  },
  {
    name: "Tailwind CSS",
    url: "/assets/images/Logo/tailwind.webp",
    destination: "https://tailwindcss.com/",
  },
  {
    name: "React.js",
    url: "/assets/images/Logo/react.webp",
    destination: "https://react.dev/",
  },
  {
    name: "Next.js",
    url: "/assets/images/Logo/nextjs.webp",
    destination: "https://nextjs.org/",
  },
  {
    name: "Node.js",
    url: "/assets/images/Logo/nodejs.webp",
    destination: "https://nodejs.org/en",
  },
  {
    name: "Django",
    url: "/assets/images/Logo/django.webp",
    destination: "https://www.djangoproject.com/",
  },
  {
    name: "D3.js",
    url: "/assets/images/Logo/d3.webp",
    destination: "https://d3js.org/",
  },
  {
    name: "Spring Boot",
    url: "/assets/images/Logo/spring.webp",
    destination: "https://spring.io/",
  },
  {
    name: "Git",
    url: "/assets/images/Logo/git.webp",
    destination: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    url: "/assets/images/Logo/github.webp",
    destination: "https://github.com/",
  },
  {
    name: "Postman",
    url: "/assets/images/Logo/postman.webp",
    destination: "https://www.postman.com/",
  },
  {
    name: "PostgreSQL",
    url: "/assets/images/Logo/postgresql.webp",
    destination: "https://www.postgresql.org/",
  },
  {
    name: "MySQL",
    url: "/assets/images/Logo/mysql.webp",
    destination: "https://www.mysql.com/",
  },
  {
    name: "Docker",
    url: "/assets/images/Logo/docker.webp",
    destination: "https://www.docker.com/",
  },
  {
    name: "AWS",
    url: "/assets/images/Logo/aws.webp",
    destination: "https://aws.amazon.com/cn/",
  },
  {
    name: "Heroku",
    url: "/assets/images/Logo/heroku.webp",
    destination: "https://dashboard.heroku.com/login",
  },
  {
    name: "Selenium",
    url: "/assets/images/Logo/selenium.webp",
    destination: "https://selenium.dev",
  },
  {
    name: "Jenkins",
    url: "/assets/images/Logo/jenkins.webp",
    destination: "https://www.jenkins.io/",
  },
  {
    name: "VS Code",
    url: "/assets/images/Logo/vscode.webp",
    destination: "https://code.visualstudio.com/",
  },
];

const contact = {
  email: "shiyang2575326696@gmail.com",
};

export {
  header,
  about,
  education,
  work,
  projects,
  skills,
  contact,
  profileImageLight,
  profileImageDark,
};
