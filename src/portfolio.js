import resumePDF from '../src/files/Shiyang Zhao Resume.pdf'
import transcriptPDF from '../src/files/Transcript.pdf'
import profileImageLight from './files/ProfileImage/profileImageLight.webp'
import profileImageDark from './files/ProfileImage/profileImageDark.webp'
import React from 'react';

const header = {
  homepage: '/',
  title: 'Shawn',
}

const about = {
  name: 'Shiyang Zhao',
  role: 'Software Engineer',
  description:
    'Computer Science Bachelor graduated from Arizona State University with experience in full-stack development',
  resume: resumePDF,
  transcript: transcriptPDF,
  social: {
    linkedin: 'https://www.linkedin.com/in/shiyang-zhao-0a3a411a0/',
    github: 'https://github.com/Shiyang-Zhao',
    instagram: 'https://www.instagram.com/shawn_zhao0/'
  },
}

const education = [
  {
    university: 'Arizona State University',
    logoLight: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/ASU_Athletics_Logo.svg/2560px-ASU_Athletics_Logo.svg.png',
    logoDark: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmp4anVzYmxmMW1tbXd4cXBqNG9neGE2c3k1cTRzajFrM3B1aDl3dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/jtvEC41AVdyfZVbGKj/giphy.gif',
    url: 'https://www.asu.edu/',
    degree: 'B.S. Computer Science',
    startDate: '01/2020',
    endDate: '12/2022',
    GPA: '3.92',
    honor: ['Summa Cum Laude', 'New American University Scholarship UG', 'Dean List']
  },
  {
    university: 'Coming soon',
    logoLight: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/ASU_Athletics_Logo.svg/2560px-ASU_Athletics_Logo.svg.png',
    logoDark: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmp4anVzYmxmMW1tbXd4cXBqNG9neGE2c3k1cTRzajFrM3B1aDl3dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/jtvEC41AVdyfZVbGKj/giphy.gif',
    url: 'https://www.asu.edu/',
    degree: 'Coming soon',
    startDate: '01/2020',
    endDate: '12/2022',
    GPA: 'Coming soon',
    honor: ['Coming soon']
  }
]


const work = [
  {
    jobTitle: 'Software Engineer',
    company: 'RND4IMPACT INC.',
    logo: 'https://images.givelively.org/nonprofits/71ce9c26-4781-4f44-af1b-ad089973ccd1/logos/rnd4impact-inc_processed_553b1224b4c1f3473d32cdb4cf53ce0eec45319d72dc4b55bd93fb21a99bdf4a_logo.png',
    url: 'https://www.rnd4impact.com/',
    startDate: '03/2023',
    endDate: '03/2024',
    location: '690 Saratoga Ave #100, San Jose, CA 95129',
    description: [
      '•	Developed full-stack web applications that utilize technologies such as Java, Python, and JavaScript including Spring Boot, React.js, Django',
      <br />,
      '•	Collaborated with a team of 5 members to gather requirements, design system architectures, and deliver solutions',
      <br />,
      '•	Streamlined project tracking using Scrum methodologies and Jira, while maintaining version control via Git',
      <br />,
      '•	Enhanced website performance by 30%, leading to improved load times and superior user experience'],
    skills: ['Java', 'Spring Boot', 'JavaScript', 'React.js', 'Node.js', 'Python', 'Django', 'MySQL', 'Heroku', 'AWS', 'Selenium', 'Jenkins']
  },


  {
    jobTitle: 'Guest Experience Associate',
    company: 'HOPE CHURCH MOVEMENT',
    logo: 'https://yt3.googleusercontent.com/3T1BqVBZ7K6q0FJclQDswhAJxAvcCWtwkSCeomd5dHLfV8h3PDUFtMXgyBUSA440ixmIEUa6=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://hopechurchmovement.com/',
    startDate: '04/2020',
    endDate: '12/2022',
    location: '730 N Mill Ave, Tempe, AZ 85288',
    description: [
      '•	Developed effective communication and leadership within a guest experience team of 30',
      <br />,
      '•	Delivered exceptional experiences to over 250 guests consistently',
      <br />,
      '•	Collaborated with cross-functional teams to distribute tasks efficiently, resulting in a 23% increase in efficiency',
      <br />],
    skills: ['Leadership', 'Communication', 'Problem-Solving', 'Teamwork', 'Time Management', 'Positive Attitude', 'Time Management']
  }
]


const projects = [
  {
    name: 'Sales Prediction of Walmart',
    description: [
      '•	Utilized Python, linear regression, and Machine Learning techniques to predict sales across various Walmart departments',
      <br />, <br />,
      '•	Analyzed historical markdown data from 45 Walmart stores to understand the impact of holiday markdown events',
      <br />, <br />,
      '•	Leveraged NumPy and Pandas for data manipulation and Scikit-Learn for dimensionality reduction, significantly boosting the predictive accuracy of the model',
      <br />, <br />,
      '•	Achieved a 20% improvement in sales forecasting accuracy with the model implementation',
      <br />],
    stack: ['Python', 'NumPy', 'Pandas', 'Scikit-Learn', 'Machine Learning'],
    sourceCode: 'https://github.com/Shiyang-Zhao?tab=repositories',
    livePreview: 'https://github.com/Shiyang-Zhao?tab=repositories',
  },
  {
    name: 'EmploVerse',
    description: [
      '•	Collaborated with a team of 5 members to build EmploVerse, a Java Spring-based web application, complemented with React.js and MySQL',
      <br />, <br />,
      '•	Developed CRUD operations, attendance tracking for 5 departments, RBAC across 4 levels, and JWT authentication',
      <br />, <br />,
      '•	Introduced real-time chat via WebSocket, cutting down email correspondence by 30% for internal communications',
      <br />, <br />,
      '•	Deployed and maintained on AWS and Heroku, ensuring scalability, security, and backend efficiency',
      <br />],
    stack: ['Java', 'Spring Boot', 'JavaScript', 'React.js', 'WebScket', 'MySQL', 'Heroku', 'AWS'],
    sourceCode: 'https://github.com/Shiyang-Zhao/EmploVerse-Backend',
    livePreview: 'https://github.com/Shiyang-Zhao/EmploVerse-Backend',
  },
  {
    name: 'Metasphere',
    description: [
      '•	Developed Metasphere individually, a dynamic social media web application utilizing Python, Django, React.js, PostgreSQL, and Docker',
      <br />, <br />,
      '•	Fostered user interaction with a robust search, file sharing, commenting, private messaging, and group chats via WebSocket and Django Channels',
      <br />, <br />,
      '•	Streamlined the development process by integrating Jenkins with Github Webhooks and automating the CI/CD pipeline with Selenium',
      <br />, <br />,
      '•	Enhanced file-sharing efficiency by 20% and amplified user engagement by a notable 40%',
      <br />],
    stack: ['Python', 'Django', 'JavaScript', 'React.js', 'Docker', 'Bootstrap', 'Selenium', 'Jenkins', 'Git', 'Github'],
    sourceCode: 'https://github.com/Shiyang-Zhao/Metasphere',
    livePreview: 'https://github.com/Shiyang-Zhao/Metasphere',
  },
  // {
  //   name: 'Python Crawler',
  //   description: ['• Developed a python crawler to simplify the process of gathering and organizing information about graduate admission requirements for various universities and institutions.'],
  //   stack: ['Python', 'Scrapy'],
  //   sourceCode: 'https://github.com/Shiyang-Zhao?tab=repositories',
  //   livePreview: 'https://github.com/Shiyang-Zhao?tab=repositories',
  // },
]

const skills = [
  { name: 'Java', url: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-1024.png', destination: 'https://www.java.com/zh-CN/' },
  { name: 'JavaScript', url: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-1024.png', destination: 'https://www.javascript.com/' },
  { name: 'Python', url: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-1024.png', destination: 'https://www.python.org/' },
  { name: 'C/C++', url: 'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/404/c_logo-1024.png', destination: 'https://cplusplus.com/' },
  { name: 'C#', url: 'https://static.cdnlogo.com/logos/c/68/c-sharp-350x350.png', destination: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
  { name: 'HTML', url: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-1024.png', destination: 'https://html.com/' },
  { name: 'CSS', url: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-1024.png', destination: 'https://www.w3.org/Style/CSS/Overview.en.html' },
  { name: 'Sass', url: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-1024.png', destination: 'https://sass-lang.com/' },
  { name: 'Bootstrap', url: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png', destination: 'https://getbootstrap.com/' },
  { name: 'Tailwind CSS', url: 'https://user-images.githubusercontent.com/98990/89711240-4172a200-d989-11ea-8d51-4aaf922fa407.png', destination: 'https://tailwindcss.com/' },
  { name: 'React.js', url: 'https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-1024.png', destination: 'https://react.dev/' },
  { name: 'Node.js', url: 'https://www.svgrepo.com/show/376337/node-js.svg', destination: 'https://nodejs.org/en' },
  { name: 'Django', url: 'https://www.svgrepo.com/show/353657/django-icon.svg', destination: 'https://www.djangoproject.com/' },
  { name: 'D3.js', url: 'https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-1/15/d3-1024.png', destination: 'https://d3js.org/' },
  { name: 'Spring Boot', url: 'https://www.svgrepo.com/show/354379/spring.svg', destination: 'https://spring.io/' },
  { name: 'Git', url: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-1024.png', destination: 'https://git-scm.com/' },
  { name: 'GitHub', url: 'https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-1024.png', destination: 'https://github.com/' },
  { name: 'Postman', url: 'https://www.svgrepo.com/show/354202/postman-icon.svg', destination: 'https://www.postman.com/' },
  { name: 'PostgreSQL', url: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png', destination: 'https://www.postgresql.org/' },
  { name: 'MySQL', url: 'https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-1024.png', destination: 'https://www.mysql.com/' },
  { name: 'Docker', url: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-1024.png', destination: 'https://www.docker.com/' },
  { name: 'AWS', url: 'https://www.svgrepo.com/show/448266/aws.svg', destination: 'https://aws.amazon.com/cn/' },
  { name: 'Heroku', url: 'https://www.svgrepo.com/show/355052/heroku.svg', destination: 'https://dashboard.heroku.com/login' },
  { name: '.NET Framwork', url: 'https://static.wikia.nocookie.net/logopedia/images/c/c7/Microsoft_.NET_StartupImage.svg', destination: 'https://dotnet.microsoft.com/en-us/download/dotnet-framework' },
  { name: 'Selenium', url: 'https://seeklogo.com/images/S/selenium-logo-A1B53CEFB0-seeklogo.com.png', destination: 'selenium.dev' },
  { name: 'Jenkins', url: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_jenkins_icon_130515.png', destination: 'https://www.jenkins.io/', },
  { name: 'VS Code', url: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png', destination: 'https://code.visualstudio.com/', }
];

const life = ['Volunteer', 'Hobby', 'Pet', 'Trip'];

const contact = {
  email: 'shiyang2575326696@gmail.com',
}

export { header, about, education, work, projects, skills, life, contact, profileImageLight, profileImageDark }
