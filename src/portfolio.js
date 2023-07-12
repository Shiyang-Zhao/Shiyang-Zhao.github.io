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
import volunteer7 from '../src/files/Volunteer/volunteer (7).jpg'
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
import hobbies7 from '../src/files/Hobbies/hobbies (7).jpg'
import hobbies8 from '../src/files/Hobbies/hobbies (8).jpg'
import hobbies9 from '../src/files/Hobbies/hobbies (9).jpg'
import hobbies10 from '../src/files/Hobbies/hobbies (10).jpg'
import hobbies11 from '../src/files/Hobbies/hobbies (11).jpg'
import hobbies12 from '../src/files/Hobbies/hobbies (12).jpg'
import hobbies13 from '../src/files/Hobbies/hobbies (13).jpg'
import hobbies14 from '../src/files/Hobbies/hobbies (14).jpg'
import hobbies15 from '../src/files/Hobbies/hobbies (15).jpg'
import hobbies16 from '../src/files/Hobbies/hobbies (16).jpg'
import hobbies17 from '../src/files/Hobbies/hobbies (17).jpg'
import hobbies18 from '../src/files/Hobbies/hobbies (18).jpg'

const header = {
  homepage: '/',
  title: 'Portfolio',
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
      '• Optimized performance by reducing API calls by 40% and using memorization to prevent unnecessary re-renders by 55%',
      <br />,
      '• Improved overall website performance by 30% resulting in a better user experience'],
    skills: ['Java', 'Spring Boot', 'JavaScript', 'React.js', 'Node.js', 'Python', 'Django', 'MySQL', 'Heroku', 'AWS']
  }
]


const projects = [
  {
    name: 'Employee Management System',
    description: 'Developed EmploVerse, an employee management web application using Java Spring, React.js, and MySQL with RBAC and JWT for secure authentication',
    stack: ['Java', 'Spring Boot', 'JavaScript', 'React.js', 'MySQL', 'Heroku', 'AWS'],
    sourceCode: 'https://github.com/Shiyang-Zhao?tab=repositories',
    livePreview: 'https://github.com/Shiyang-Zhao?tab=repositories',
  },
  {
    name: 'Social Media Web Application',
    description: 'Built a social media web application utilizing Python, Django, Bootstrap, and Font Awesome that allows users to connect, engage, and share their moments with a vibrant community',
    stack: ['Python', 'Django', 'Bootstrap', 'Font Awesome'],
    sourceCode: 'https://github.com/Shiyang-Zhao?tab=repositories',
    livePreview: 'https://github.com/Shiyang-Zhao?tab=repositories',
  },
  {
    name: 'Shiyang Zhao Portfolio',
    description: 'Created the portfolio website in minimalist style utilizing JavaScript, React.js, Bootstrap to showcase my skills and creativity',
    stack: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap'],
    sourceCode: 'https://github.com/Shiyang-Zhao?tab=repositories',
    livePreview: 'https://github.com/Shiyang-Zhao?tab=repositories',
  },
]

const skills = [
  'Java', 'JavaScript', 'Python', 'C/C++', 'C#',
  'HTML', 'CSS', 'Bootstrap', 'React.js', 'Node.js', 'Django',
  'D3.js', 'Spring Boot', 'Git', 'GitHub', 'Postman', 'PostgreSQL',
  'MySQL', 'AWS', 'Heroku', '.NET Framwork', 'ASP.NET'
]

const life = [
  {
    name: 'Volunteer',
    photos: [volunteer1, volunteer2, volunteer3, volunteer4, volunteer5, volunteer6, volunteer7]
  },
  {
    name: 'Hobbies',
    photos: [hobbies1, hobbies2, hobbies3, hobbies4, hobbies5, hobbies6, hobbies7, hobbies8, hobbies9, hobbies10, hobbies11, hobbies12, hobbies13, hobbies14, hobbies15, hobbies16, hobbies17, hobbies18]
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

export { header, about, education, work, projects, skills, life, contact }
