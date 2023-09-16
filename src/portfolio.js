import resumePDF from '../src/files/Shiyang Zhao Resume.pdf'
import transcriptPDF from '../src/files/Transcript.pdf'
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

const nums = {
  volunteer: 6,
  hobby: 16,
  pet: 10,
  travel: 18
}

async function loadPhotos(category, count) {
  const photos = [];

  for (let i = 1; i <= count; i++) {
    const imageModule = await import(`../src/files/${category}/${category.toLowerCase()} (${i}).jpg`);
    photos.push(imageModule.default);
  }

  return photos;
}

const life = [
  {
    name: 'Volunteer',
    photos: await loadPhotos('Volunteer', nums.volunteer)
  },
  {
    name: 'Hobby',
    photos: await loadPhotos('Hobby', nums.hobby)
  },
  {
    name: 'Pet',
    photos: await loadPhotos('Pet', nums.pet)
  },
  {
    name: 'Travel',
    photos: await loadPhotos('Travel', nums.travel)
  }
];


const contact = {
  email: 'shiyang2575326696@gmail.com',
}

export { header, about, education, work, projects, skills, life, contact, profileImageLight, profileImageDark }
