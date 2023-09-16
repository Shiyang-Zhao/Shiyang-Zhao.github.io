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
  { name: 'Java', url: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-1024.png' },
  { name: 'JavaScript', url: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-1024.png' },
  { name: 'Python', url: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-1024.png' },
  { name: 'C/C++', url: 'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/404/c_logo-1024.png' },
  { name: 'C#', url: 'https://static.cdnlogo.com/logos/c/68/c-sharp-350x350.png' },
  { name: 'HTML', url: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-1024.png' },
  { name: 'CSS', url: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-1024.png' },
  { name: 'Sass', url: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-1024.png' },
  { name: 'Bootstrap', url: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' },
  { name: 'Tailwind CSS', url: 'https://user-images.githubusercontent.com/98990/89711240-4172a200-d989-11ea-8d51-4aaf922fa407.png' },
  { name: 'React.js', url: 'https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-1024.png' },
  { name: 'Node.js', url: 'https://www.svgrepo.com/show/376337/node-js.svg' },
  { name: 'Django', url: 'https://www.svgrepo.com/show/353657/django-icon.svg' },
  { name: 'D3.js', url: 'https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-1/15/d3-1024.png' },
  { name: 'Spring Boot', url: 'https://www.svgrepo.com/show/354379/spring.svg' },
  { name: 'Git', url: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-1024.png' },
  { name: 'GitHub', url: 'https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-1024.png' },
  { name: 'Postman', url: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
  { name: 'PostgreSQL', url: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png' },
  { name: 'MySQL', url: 'https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-1024.png' },
  { name: 'AWS', url: 'https://www.svgrepo.com/show/448266/aws.svg' },
  { name: 'Heroku', url: 'https://www.svgrepo.com/show/355052/heroku.svg' },
  { name: '.NET Framwork', url: 'https://static.wikia.nocookie.net/logopedia/images/c/c7/Microsoft_.NET_StartupImage.svg' },
  { name: 'Selenium', url: 'https://seeklogo.com/images/S/selenium-logo-A1B53CEFB0-seeklogo.com.png' },
  { name: 'Jenkins', url: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_jenkins_icon_130515.png' }
];


const nums = {
  volunteer: 6,
  hobby: 16,
  pet: 10,
  travel: 18
}

const importPhotos = async (category, count) => {
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
    photos: await importPhotos('Volunteer', nums.volunteer)
  },
  {
    name: 'Hobby',
    photos: await importPhotos('Hobby', nums.hobby)
  },
  {
    name: 'Pet',
    photos: await importPhotos('Pet', nums.pet)
  },
  {
    name: 'Travel',
    photos: await importPhotos('Travel', nums.travel)
  }
];


const contact = {
  email: 'shiyang2575326696@gmail.com',
}

export { header, about, education, work, projects, skills, life, contact, profileImageLight, profileImageDark }
