const resumePDF = "/assets/files/Resume.pdf";
const transcriptPDF = "/assets/files/Transcript.pdf";
const profileImage = "/assets/images/ProfileImage/profileImage.webp";

const header = {
  homepage: "/",
  title: "Shawn",
};

const about = {
  name: "Shiyang Zhao",
  role: "Software Engineer",
  motto: '"Learning and Labor"',
  description:
    "Pursuing a Master's in Computer Science at UIUC, with a passion for software engineering and machine learning",
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
    jobTitle: "Backend Software Engineer Intern",
    company: "Civilience",
    logo: "/assets/images/Logo/civilience.webp",
    url: "https://civilience.social/solutions/",
    startDate: "08/2024",
    endDate: "Present",
    location: "Omaha, NE 68131",
    description: [
      "• Built serverless RESTful APIs with AWS Lambda, Python (Flask), and Node.js (Express), reducing response time by 50ms and cutting server costs by 14%",
      "• Migrated legacy APIs to a microservices architecture, reducing system latency by 30%",
      "• Implemented real-time monitoring and alerts using AWS CloudTrail and CloudWatch",
      "• Secured authentication with AWS Cognito and managed large-scale data using DynamoDB and RDS",
      "• Automated 100+ IAM role assignments for AWS EC2 and Amplify, enhancing access control efficiency by 16% and reducing manual errors by 25%"
    ],
    skills: [
      "Java",
      "JavaScript",
      "Node.js",
      "React.js",
      "Next.js",
      "AWS",
      "MySQL",
    ],
  },
  {
    jobTitle: "Full Stack Software Engineer",
    company: "RND4IMPACT INC.",
    logo: "/assets/images/Logo/rnd4impact.webp",
    url: "https://www.rnd4impact.com/",
    startDate: "03/2023",
    endDate: "03/2024",
    location: "690 Saratoga Ave #100, San Jose, CA 95129",
    description: [
      "• Built backend services with Django and PostgreSQL, delivering secure APIs with role-based access control",
      "• Developed Spring Boot microservices with AWS RDS and S3, enabling scalable data and file storage",
      "• Created responsive frontend applications using Next.js and TypeScript, enhancing user engagement",
      "• Automated CI/CD pipelines in Jenkins with unit tests and containerization, cutting deployment time by 26%",
      "• Improved software reliability with Selenium regression tests, reducing production bugs by 21%"
    ],
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "Spring Boot",
      "Django",
      "Node.js",
      "React.js",
      "AWS",
      "MySQL",
      "Heroku",
      "Selenium",
      "Jenkins",
    ],
  },
  // {
  //   jobTitle: "Guest Experience Associate",
  //   company: "HOPE CHURCH MOVEMENT",
  //   logo: "/assets/images/Logo/hopechurch.webp",
  //   url: "https://hopechurchmovement.com/",
  //   startDate: "04/2020",
  //   endDate: "12/2022",
  //   location: "730 N Mill Ave, Tempe, AZ 85288",
  //   description: [
  //     "•	Developed effective communication and leadership within a guest experience team of 30",
  //     "•	Delivered exceptional experiences to over 250 guests consistently",
  //     "•	Collaborated with cross-functional teams to distribute tasks efficiently, resulting in a 23% increase in efficiency",
  //   ],
  //   skills: [
  //     "Leadership",
  //     "Communication",
  //     "Problem-Solving",
  //     "Teamwork",
  //     "Time Management",
  //     "Positive Attitude",
  //     "Time Management",
  //   ],
  // },
];

const projects = [
  {
    name: "Distributed Stream Processing System - RainStorm",
    description: [
      "• Built HyDFS, a distributed file system with caching, achieving 4x faster reads on a 10-VM cluster",
      "• Designed RainStorm for real-time processing, surpassing Spark Streaming by 15% in throughput",
      "• Improved resilience with 2-second fault detection, state recovery, and dynamic task rescheduling",
    ],
    stack: [
      "Java",
      "Bash",
      "Distributed Systems",
      "SWIM Protocol",
      "Cassandra",
      "Sockets",
      "Multithreading",
      "LRU Cache",
      "Git",
      "GitLab",
    ],
    sourceCode: "https://github.com/Shiyang-Zhao/Distributed-Stream-Processing-System-RainStorm",
    livePreview: "https://github.com/Shiyang-Zhao/Distributed-Stream-Processing-System-RainStorm",
  },
  {
    name: "Social Media Web Application - Metasphere",
    description: [
      "• Built a social platform with Reddit-style posts and Instagram-like stories using Django and PostgreSQL",
      "• Enabled real-time interactions with posts, chat, and notifications using WebSocket and Celery",
      "• Improved backend performance, boosting speed by 22% and reducing server costs by 13%"
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
    name: "Employee Management System - EmploVerse",
    description: [
      "• Built a feature-rich employee management app using Java Spring, Next.js, and MySQL",
      "• Automated 45% of administrative tasks, including attendance tracking, RBAC, and reviews",
      "• Deployed on AWS (S3, RDS, EC2) with auto-scaling for efficient traffic and resource management"
    ],
    stack: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "WebScket",
      "MySQL",
      "Heroku",
      "AWS",
    ],
    sourceCode: "https://github.com/Shiyang-Zhao/Employee-Management-EmploVerse",
    livePreview: "https://github.com/Shiyang-Zhao/Employee-Management-EmploVerse",
  },
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
  profileImage,
};
