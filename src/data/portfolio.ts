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
    company: "Civilience",
    logo: "/assets/images/Logo/civilience.webp",
    url: "https://civilience.social/solutions/",
    startDate: "08/2024",
    endDate: "Present",
    location: "Omaha, NE 68131",
    description: [
      "•	Developed and maintained web applications using React.js, enhancing user experience",
      "•	Integrated AWS services into web applications with AWS Amplify, streamlining deployment and reducing deployment time by 20%",
      "•	Implemented user authentication with AWS Cognito and managed databases using AWS DynamoDB and PostgreSQL for improved security and scalability",
      "•	Built and managed serverless APIs using AWS Lambda and API Gateway, reducing server costs by 25%",
    ],
    skills: [
      "Java",
      "React.js",
      "Next.js",
      "AWS Cognito",
      "AWS Amplify",
      "AWS Lambda",
      "AWS API Gateway",
      "AWS DynamoDB",
      "PostgreSQL",
    ],
  },
  {
    jobTitle: "Software Engineer",
    company: "RND4IMPACT INC.",
    logo: "/assets/images/Logo/rnd4impact.webp",
    url: "https://www.rnd4impact.com/",
    startDate: "03/2023",
    endDate: "03/2024",
    location: "690 Saratoga Ave #100, San Jose, CA 95129",
    description: [
      "•	Developed full-stack web applications using technologies such as Java, Python, and TypeScript, with frameworks like Spring Boot, Next.js, and Django",
      "•	Implemented RESTful APIs and integrated third-party services to enhance functionality and scalability",
      "•	Automated deployment processes using CI/CD pipelines with Jenkins, resulting in a 40% reduction in deployment time",
      "•	Optimized code quality and reduced bugs by 20% using Selenium for automated testing",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "TypeScript",
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
    "name": "Distributed Systems",
    "description": [
      "•	Developed a distributed system that combines a log querying service and a group membership service to improve debugging and system monitoring",
      "•	Implemented a Distributed Log Querier to execute grep commands across multiple virtual machines, enhancing speed and efficiency by performing local, parallel queries and ensuring fault tolerance, improving query performance by 40%",
      "•	Designed a Distributed Group Membership Service with two failure detection variants—Basic SWIM-style Ping-Ack and Ping-Ack with Suspicion—to maintain an updated list of connected machines and detect failures quickly, reducing detection time by 50%",
      "•	Integrated both services to log and query membership changes and failures, providing a scalable, efficient, and fault-tolerant system capable of handling multiple simultaneous machine failures. The solution was recognized as the best in Java by the professor for its optimal performance and design"
    ],
    "stack": [
      "Java",
      "Bash",
      "Distributed Systems",
      "SWIM Protocol",
      "Sockets",
      "Multiple threads",
      "CS VM Cluster",
      "Git"
    ],
    sourceCode: "https://courses.grainger.illinois.edu/cs425/fa2024/assignments.html",
    livePreview: "https://courses.grainger.illinois.edu/cs425/fa2024/MPDemos/mp1-java-fa24.tar.gz",
  },
  {
    name: "Metasphere",
    description: [
      "•	Developed Metasphere, a dynamic social media platform merging Reddit and Instagram features using Django and PostgreSQL",
      "•	Implemented posts, chat, comments, stories, and notifications with real-time updates via WebSocket, Django Channels, and task scheduling with Celery",
      "•	Streamlined CI/CD by integrating Jenkins with GitHub Webhooks and automating the pipeline with Selenium, ensuring efficient and reliable deployments",
      "•	Boosted performance by optimizing database queries, implementing caching, and refining backend processes, reducing server response times by 30% and increasing data processing efficiency by 25%",
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
      "•	Developed EmploVerse, an employee management application using Java Spring, Next.js, and MySQL",
      "•	Implemented attendance tracking, RBAC across 4 levels, secure JWT authentication, and performance management to automate administrative tasks by 45%",
      "•	Utilized real-time chat and notifications via WebSocket, improving internal communication by 30%",
      "•	Deployed on AWS, using S3 for storage, RDS for databases, EC2 for computing, and auto-scaling with load balancing for traffic management and efficiency",
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
    sourceCode: "https://github.com/Shiyang-Zhao/EmploVerse-Backend",
    livePreview: "https://github.com/Shiyang-Zhao/EmploVerse-Backend",
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
  profileImageLight,
  profileImageDark,
};
