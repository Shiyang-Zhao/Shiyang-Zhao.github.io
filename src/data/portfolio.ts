const resumePDF = "/assets/files/Shawn Zhao Resume.pdf";
const transcriptPDF = "/assets/files/Unofficial Transcript.pdf";
const profileImage = "/assets/images/ProfileImage/profileImage.webp";

const header = {
  homepage: "/",
  title: "Shawn",
};

const about = {
  name: "Shawn Zhao",
  role: "Software Engineer",
  motto: "Learning and Labor",
  description:
    "Master's in CS at UIUC, focused on software engineering and machine learning",
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
    GPA: "3.8/4.0",
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
    jobTitle: "Graduate Researcher",
    company: "University of Illinois Urbana-Champaign",
    logo: "/assets/images/Logo/uiuc logo.webp",
    url: "https://illinois.edu/",
    startDate: "01/2025",
    endDate: "Present",
    location: "Champaign, IL 61820",
    description: [
      "Conducted research on energy-aware routing and power optimization for inter-satellite links (ISLs) with Prof. Indranil Gupta, in collaboration with PhD students Xiaojuan Ma and Shashwat Jaiswal",
      "Simulated dynamic LEO satellite constellations using StarryNet to evaluate latency, bandwidth, and routing performance under realistic orbital movement",
      "Developed routing modules in StarryNet using Python, Docker, and BIRD, and built a modular BandwidthManager for adaptive ISL configuration",
      "Implemented demand-aware bandwidth allocation with BandwidthManager, saving up to 25% energy while keeping latency within 10% of baseline"
    ],
    skills: [
      "Inter-Satellite Links (ISLs)",
      "Energy-Efficient Routing",
      "Power Management",
      "Transmission Power Control",
      "Sleep Scheduling",
    ],
  },
  {
    jobTitle: "Software Engineer Intern",
    company: "Civilience",
    logo: "/assets/images/Logo/civilience.webp",
    url: "https://civilience.social/solutions/",
    startDate: "08/2024",
    endDate: "04/2025",
    location: "Omaha, NE 68131",
    description: [
      "Built serverless RESTful APIs with AWS Lambda, Python (Flask), and Node.js (Express), improving average response times by 22%",
      "Migrated legacy APIs to microservices architecture, decreasing request latency from 150ms to 105ms and saving $1,200 annually in server costs",
      "Secured authentication with AWS Cognito and managed large-scale data using DynamoDB and RDS",
      "Automated 30+ IAM role assignments for AWS EC2 and Amplify, saving 30 hours of manual effort each month",
    ],
    skills: [
      "Python",
      "JavaScript",
      "Node.js",
      "Express.js",
      "React.js",
      "Next.js",
      "AWS",
      "PostgreSQL",
    ],
  },
  {
    jobTitle: "Software Engineer",
    company: "Rnd4impact",
    logo: "/assets/images/Logo/rnd4impact.webp",
    url: "https://www.rnd4impact.com/",
    startDate: "02/2023",
    endDate: "07/2024",
    location: "San Jose, CA 95129",
    description: [
      "Developed scalable APIs with Django and PostgreSQL, boosting query time from 350ms to 200ms",
      "Built Spring Boot microservices with AWS RDS and S3, enabling scalable storage for 100 GB of structured and unstructured data",
      "Improved software reliability by automating regression tests with Selenium, resolving 20+ production bugs",
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
      "PostgreSQL",
      "Selenium",
      "Jenkins",
    ],
  }
];

const projects = [
  {
    name: "GEMstack 3D Log Viewer",
    startDate: "01/2025",
    endDate: "05/2025",
    description: [
      "Contributed to the open-source GEMstack by building a React-Three-Fiber 3D viewer for autonomous vehicle logs",
      "Created a TypeScript log parser and timeline builder with Zustand for real-time multi-agent visualization",
      "Achieved 60 FPS playback with smooth interpolation, camera controls, and optimized client-side rendering",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "React.js",
      "Three.js",
      "Zustand",
    ],
    sourceCode: "https://github.com/krishauser/GEMstack/pulls?q=is%3Apr+is%3Aclosed+author%3AShiyang-Zhao",
    livePreview: "https://github.com/krishauser/GEMstack/pulls?q=is%3Apr+is%3Aclosed+author%3AShiyang-Zhao",
  },
  {
    name: "RainStorm",
    startDate: "08/2024",
    endDate: "12/2024",
    description: [
      "Built a membership-list protocol with gossip heartbeats, leader election, and node view for P2P coordination",
      "Developed a multithreaded P2P file system with chunk replication and dynamic discovery for reliable data transfer",
      "Implemented a real-time Java stream processing system with optimized pipelines (+15% throughput), 2s failure detection/recovery, and dynamic task rescheduling",
    ],
    stack: [
      "Java",
      "Distributed Systems",
      "Multithreading",
      "Socket Programming",
    ],
    sourceCode: "https://github.com/Shiyang-Zhao/rainstorm",
    livePreview: "https://github.com/Shiyang-Zhao/rainstorm",
  },
  {
    name: "Metasphere",
    startDate: "03/2024",
    endDate: "06/2024",
    description: [
      "Built a social platform with Reddit-style posts and Instagram-like stories using Django and PostgreSQL",
      "Implemented real-time comments, stories, chat, and notifications with WebSocket and Celery",
    ],
    stack: [
      "Python",
      "Django",
      "React.js",
      "PostgreSQL",
      "Selenium",
    ],
    sourceCode: "https://github.com/Shiyang-Zhao/metasphere",
    livePreview: "https://github.com/Shiyang-Zhao/metasphere",
  },
  {
    name: "EmploVerse",
    startDate: "12/2023",
    endDate: "02/2024",
    description: [
      "Built an employee management platform with attendance tracking, payroll, RBAC, and reviews",
      "Reduced manual workload by 45% through automation, increasing efficiency and streamlining administrative tasks",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Next.js",
      "WebScket",
      "MySQL",
      "AWS",
    ],
    sourceCode: "https://github.com/Shiyang-Zhao/emploverse",
    livePreview: "https://github.com/Shiyang-Zhao/emploverse",
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
