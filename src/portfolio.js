import resumePDF from '../src/files/Shiyang Zhao Resume.pdf'
import transcriptPDF from '../src/files/Transcript.pdf'
import profileImageLight from './files/ProfileImage/profileImageLight.jpg'
import profileImageDark from './files/ProfileImage/profileImageDark.jpg'
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
    startDate: 'January 2020',
    endDate: 'December 2022',
    GPA: '3.92',
    honor: ['New American University Scholarship UG', 'Dean List']
  }
]


const work = [
  {
    jobTitle: 'Software Engineer',
    company: 'RND4IMPACT INC.',
    logo: 'https://images.givelively.org/nonprofits/71ce9c26-4781-4f44-af1b-ad089973ccd1/logos/rnd4impact-inc_processed_553b1224b4c1f3473d32cdb4cf53ce0eec45319d72dc4b55bd93fb21a99bdf4a_logo.png',
    url: 'https://www.rnd4impact.com/',
    startDate: 'March 2023',
    endDate: 'Present',
    location: '690 Saratoga Ave #100, San Jose, CA 95129',
    description: [
      '•	Developed full-stack web applications that utilize technologies such as Java, Python, JavaScript including Spring Boot, React.js, Django',
      <br />,
      '•	Collaborated with a team of 5 members to gather requirements, design system architectures, and implement solutions',
      <br />,
      '•	Utilized Scrum, Jira to track the progress of the project, and Git for version control, achieving a 95% on-time project delivery rate',
      <br />,
      '•	Improved overall website performance by 30%, resulting in faster loading times, smoother user interactions, and an enhanced user experience'],
    skills: ['Java', 'Spring Boot', 'JavaScript', 'React.js', 'Node.js', 'Python', 'Django', 'MySQL', 'Heroku', 'AWS', 'Selenium', 'Jenkins']
  },


  {
    jobTitle: 'Guest Experience Associate',
    company: 'HOPE CHURCH MOVEMENT AT ASU',
    logo: 'https://media.licdn.com/dms/image/C560BAQEC8Rbyw7vvvw/company-logo_200_200/0/1674601450872?e=1703116800&v=beta&t=k4ibJLH907S374BclLpFllZOOCzMXUQOwUb497f2aKg',
    url: 'https://career.asu.edu/organizations/hope-church-movement-at-asu/',
    startDate: 'April 2020',
    endDate: 'December 2022',
    location: '730 N Mill Ave, Tempe, AZ 85288',
    description: [
      '•	Developed interpersonal skills and leadership within a guest experience team of 30',
      <br />,
      '•	Created an immersive, inviting experience for 250 guests every time',
      <br />,
      '•	Collaborated with cross-functional teams to identify opportunities for enhancing efficiency in processes, resulting in a 23% increase in efficiency',
      <br />],
    skills: ['Leadership', 'Communication', 'Problem-Solving', 'Teamwork', 'Time Management', 'Positive Attitude', 'Time Management']
  }
]


const projects = [
  {
    name: 'EmploVerse',
    description: [
      '•	Built EmploVerse, an employee management web application using Java Spring, React.js, and MySQL, with RBAC and JWT for secure authentication',
      <br />, <br />,
      '•	Developed CRUD operations, attendance tracking, RBAC, and payroll system, resulting in a 35% improvement in efficiency in employee management',
      <br />, <br />,
      '•	Implemented real-time chat functionality using WebSocket, resulting in a powerful 30% reduction in email correspondence for internal communication',
      <br />, <br />,
      '•	Utilized AWS and Heroku to deploy and manage, ensuring seamless scalability, robust security, and efficient backend services',
      <br />],
    stack: ['Java', 'Spring Boot', 'JavaScript', 'React.js', 'WebScket', 'MySQL', 'Heroku', 'AWS'],
    sourceCode: 'https://github.com/Shiyang-Zhao?tab=repositories',
    livePreview: 'https://github.com/Shiyang-Zhao?tab=repositories',
  },
  {
    name: 'Metasphere',
    description: [
      '•	Developed Metasphere, a dynamic social media web application utilizing Python, Django, React.js, PostgreSQL, Bootstrap, and Docker',
      <br />, <br />,
      '•	Implemented a robust search, file sharing, and lively comments, and fosters vibrant conversations by private messaging and group chats utilizing WebSocket and Django Channels',
      <br />, <br />,
      '•	Integrated Jenkins with Webhooks in Github and Selenium to automate CI/CD pipeline',
      <br />, <br />,
      '•	Increased the efficiency of file sharing by 20% and user engagement by 40%',
      <br />],
    stack: ['Python', 'Django', 'JavaScript', 'React.js', 'Docker', 'Bootstrap', 'Selenium', 'Jenkins', 'Git', 'Github'],
    sourceCode: 'https://github.com/Shiyang-Zhao?tab=repositories',
    livePreview: 'https://github.com/Shiyang-Zhao?tab=repositories',
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

const life = ['Volunteer', 'Hobby', 'Pet', 'Travel'];

const contact = {
  email: 'shiyang2575326696@gmail.com',
}

export { header, about, education, work, projects, skills, life, contact, profileImageLight, profileImageDark }
