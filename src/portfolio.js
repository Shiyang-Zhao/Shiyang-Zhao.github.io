import resumePDF from '../src/files/Shiyang Zhao Resume.pdf'
import transcriptPDF from '../src/files/Transcript.pdf'
import pet1 from '../src/files/Pet/pet (1).jpg'
import pet2 from '../src/files/Pet/pet (2).jpg'
import pet3 from '../src/files/Pet/pet (3).jpg'
import pet4 from '../src/files/Pet/pet (4).jpg'
import pet5 from '../src/files/Pet/pet (5).jpg'
import pet6 from '../src/files/Pet/pet (6).jpg'
import pet7 from '../src/files/Pet/pet (7).jpg'
import pet8 from '../src/files/Pet/pet (8).jpg'
import pet9 from '../src/files/Pet/pet (9).jpg'
import pet10 from '../src/files/Pet/pet (10).jpg'
import volunteer1 from '../src/files/Volunteer/volunteer (1).jpg'
import volunteer2 from '../src/files/Volunteer/volunteer (2).jpg'
import volunteer3 from '../src/files/Volunteer/volunteer (3).jpg'
import volunteer4 from '../src/files/Volunteer/volunteer (4).jpg'
import volunteer5 from '../src/files/Volunteer/volunteer (5).jpg'
import volunteer6 from '../src/files/Volunteer/volunteer (6).jpg'
import travel1 from '../src/files/Travel/travel (1).jpg'
import travel2 from '../src/files/Travel/travel (2).jpg'
import travel3 from '../src/files/Travel/travel (3).jpg'
import travel4 from '../src/files/Travel/travel (4).jpg'
import travel5 from '../src/files/Travel/travel (5).jpg'
import travel6 from '../src/files/Travel/travel (6).jpg'
import travel7 from '../src/files/Travel/travel (7).jpg'
import travel8 from '../src/files/Travel/travel (8).jpg'
import travel9 from '../src/files/Travel/travel (9).jpg'
import travel10 from '../src/files/Travel/travel (10).jpg'
import travel11 from '../src/files/Travel/travel (11).jpg'
import travel12 from '../src/files/Travel/travel (12).jpg'
import travel13 from '../src/files/Travel/travel (13).jpg'
import travel14 from '../src/files/Travel/travel (14).jpg'
import travel15 from '../src/files/Travel/travel (15).jpg'
import travel16 from '../src/files/Travel/travel (16).jpg'
import travel17 from '../src/files/Travel/travel (17).jpg'
import travel18 from '../src/files/Travel/travel (18).jpg'
import hobbies1 from '../src/files/Hobbies/hobbies (1).jpg'
import hobbies2 from '../src/files/Hobbies/hobbies (2).jpg'
import hobbies3 from '../src/files/Hobbies/hobbies (3).jpg'
import hobbies4 from '../src/files/Hobbies/hobbies (4).jpg'
import hobbies5 from '../src/files/Hobbies/hobbies (5).jpg'
import hobbies6 from '../src/files/Hobbies/hobbies (6).jpg'
import hobbies8 from '../src/files/Hobbies/hobbies (8).jpg'
import hobbies9 from '../src/files/Hobbies/hobbies (9).jpg'
import hobbies10 from '../src/files/Hobbies/hobbies (10).jpg'
import hobbies12 from '../src/files/Hobbies/hobbies (12).jpg'
import hobbies13 from '../src/files/Hobbies/hobbies (13).jpg'
import hobbies14 from '../src/files/Hobbies/hobbies (14).jpg'
import hobbies15 from '../src/files/Hobbies/hobbies (15).jpg'
import hobbies16 from '../src/files/Hobbies/hobbies (16).jpg'
import hobbies17 from '../src/files/Hobbies/hobbies (17).jpg'
import hobbies18 from '../src/files/Hobbies/hobbies (18).jpg'
import profileImageLight from './files/ProfileImage/profileImageLight.jpg'
import profileImageDark from './files/ProfileImage/profileImageDark.jpg'


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
    degree: 'B.S. Computer Science',
    startDate: 'January 2020',
    endDate: 'December 2022',
    GPA: '3.92',
    honor: ['New American University Scholarship UG', 'Dean List']
  }
  // {
  //   university: 'Arizona State University',
  //   degree: 'B.S. Computer Science',
  //   startDate: 'January 2020',
  //   endDate: 'December 2022',
  //   GPA: '3.92',
  //   honor: ['New American University Scholarship UG', 'Dean List']
  // }
]


const work = [
  {
    jobTitle: 'Software Engineer',
    company: 'RND4IMPACT INC.',
    startDate: 'March 2023',
    endDate: 'Present',
    location: '690 Saratoga Ave #100, San Jose, CA 95129',
    description: ['• Developed full-stack web applications that utilize technologies such as Java, Python, JavaScript, and their libraries and frameworks',
      <br />,
      '•	Collaborated with cross-functional teams to gather requirements, design system architectures, and implement solutions',
      <br />,
      '• Utilized agile development methodologies, Scrum, to deliver high-quality software products within scheduled deadlines, achieving a 95% on-time project delivery rate',
      <br />,
      '• Improved overall website performance by 30%, resulting in faster loading times, smoother user interactions, and an enhanced user experience'],
    skills: ['Java', 'Spring Boot', 'JavaScript', 'React.js', 'Node.js', 'Python', 'Django', 'MySQL', 'Heroku', 'AWS', 'Selenium', 'Jenkins']
  }
]


const projects = [
  {
    name: 'EmploVerse',
    description: ['• Developed EmploVerse, an employee management web application using Java Spring, React.js, and MySQL with RBAC and JWT for secure authentication',
      <br />, <br />,
      '• Streamlined employee management processes, achieving up to 30% improvement in efficiency through seamless CRUD operations, advanced search capabilities, and simplified user access management',
      <br />, <br />,
      '• Implemented real-time chat functionality, resulting in a powerful 45% reduction in email correspondence for internal communication',
      <br />, <br />,
      '• Achieved a remarkable adoption rate, with 80% of the organization employees actively using EmploVerse for daily employee management tasks',
      <br />, <br />,
      '• Utilized AWS and Heroku to deploy and manage, ensuring seamless scalability, robust security, and efficient backend services'],
    stack: ['Java', 'Spring Boot', 'JavaScript', 'React.js', 'MySQL', 'Heroku', 'AWS'],
    sourceCode: 'https://github.com/Shiyang-Zhao?tab=repositories',
    livePreview: 'https://github.com/Shiyang-Zhao?tab=repositories',
  },
  {
    name: 'Metasphere',
    description: ['• Developed Metasphere, a dynamic social media web application utilizing Python, Django, PostgreSQL, Bootstrap, and Font Awesome',
      <br />, <br />,
      '• Implemented a robust search, file sharing, and lively comments, and fosters vibrant conversations through private messaging and group chats',
      <br />, <br />,
      '• Integrate Jenkins with GitHub using webhooks and Selenium to automate CI/CD pipeline',
      <br />, <br />,
      '• Increased the efficiency of file sharing by 20% and user engagement by 40%',
      <br />, <br />,
      '• Received positive feedback from users, with a 90% satisfaction rate reported in user surveys'],
    stack: ['Python', 'Django', 'Bootstrap', 'Font Awesome', 'Selenium', 'Jenkins', 'Git', 'Github'],
    sourceCode: 'https://github.com/Shiyang-Zhao?tab=repositories',
    livePreview: 'https://github.com/Shiyang-Zhao?tab=repositories',
  },
  {
    name: 'Python Crawler',
    description: ['• Developed a python crawler to simplify the process of gathering and organizing information about graduate admission requirements for various universities and institutions.'],
    stack: ['Python', 'Scrapy'],
    sourceCode: 'https://github.com/Shiyang-Zhao?tab=repositories',
    livePreview: 'https://github.com/Shiyang-Zhao?tab=repositories',
  },
]

const skills = [
  'Java', 'JavaScript', 'Python', 'C/C++', 'C#',
  'HTML', 'CSS', 'Bootstrap', 'React.js', 'Node.js', 'Django',
  'D3.js', 'Spring Boot', 'Git', 'GitHub', 'Postman', 'PostgreSQL',
  'MySQL', 'AWS', 'Heroku', '.NET Framwork', 'ASP.NET', 'Selenium', 'Jenkins'
]

const life = [
  {
    name: 'Volunteer',
    photos: [volunteer1, volunteer2, volunteer3, volunteer4, volunteer5, volunteer6]
  },
  {
    name: 'Hobbies',
    photos: [hobbies1, hobbies2, hobbies3, hobbies4, hobbies5, hobbies6, hobbies8, hobbies9, hobbies10, hobbies12, hobbies13, hobbies14, hobbies15, hobbies16, hobbies17, hobbies18]
  },
  {
    name: 'Pet',
    photos: [pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10]
  },
  {
    name: 'Travel',
    photos: [travel1, travel2, travel3, travel4, travel5, travel6, travel7, travel8, travel9, travel10, travel11, travel12, travel13, travel14, travel15, travel16, travel17, travel18]
  }
]

const contact = {
  email: 'shiyang2575326696@gmail.com',
}

export { header, about, education, work, projects, skills, life, contact, profileImageLight, profileImageDark }
