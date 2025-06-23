export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'design';
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
  level: number; // 1-10
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  image: string; 
  quote: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  percentage?: string;
}

export const projects: Project[] = [
  {
    id: 'loginpage',
    title: 'LoginPage',
    description: 'This is a simple login page with Sign In and Register options, allowing users to create accounts and log in securely as part of a basic authentication system. ',
    longDescription: 'This login page provides a user-friendly interface with Sign In and Register options, enabling users to create new accounts and securely log in to access protected content or services. It forms the foundational structure of an authentication system, handling user credentials, verifying identity, and maintaining session integrity to ensure a secure and personalized experience. Designed with simplicity and functionality in mind, it supports essential authentication workflows commonly used in web applications. ',
    image: 'https://www.flickr.com/photos/203044059@N04/54606995792/in/dateposted-public/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySql'],
    liveUrl: 'https://kuldeepbishnoi2005.github.io/LoginPage/',
    githubUrl: 'https://github.com/Kuldeepbishnoi2005/LoginPage',
    category: 'web',
    featured: true
  },
  {
    id: 'audioX',
    title: 'AudioX',
    description: 'AudioX is a responsive music streaming website featuring playlists, smooth playback controls, and a user-friendly design. ',
    longDescription: 'AudioX – A Smart and User-Friendly Music Platform. AudioX is a simple yet powerful music streaming website that offers a wide range of songs with easy-to-use playback controls, playlists, and a responsive design. This project highlights my passion for music and showcases my skills in web development. In the future, I plan to add more features like custom playlist creation, API integration, and improved functionality to make it even better for users.',
     image: 'https://www.flickr.com/photos/203044059@N04/54608174690/in/dateposted-public/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://kuldeepbishnoi2005.github.io/AudioX/',
    githubUrl: 'https://github.com/Kuldeepbishnoi2005/AudioX',
    category: 'web',
    featured: true
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React, TypeScript, Tailwind CSS, and Supabase. Features responsive design, animations, dark/light mode, and follows modern development best practices.',
    longDescription: 'This is my personal portfolio website designed to highlight my skills, projects, and professional background. It features a clean and modern design with smooth animations, a fully responsive layout that works seamlessly across devices, and an intuitive user interface. The website includes sections like About, Projects, Skills, and Contact, offering a complete overview of who I am and what I do. It’s built to create a lasting impression, provide an engaging experience for visitors, and serve as a central place to connect with me professionally.',
    image: 'https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vite','Supabase','Node.js','npm',],
    liveUrl: 'https://kuldeepbishnoi.netlify.app/',
    githubUrl: 'https://github.com/Kuldeepbishnoi2005/portfolio',
    category: 'web',
    featured: true
  }
];

export const skills: Skill[] = [
  {
    name: 'HTML',
    icon: 'html',
    category: 'frontend',
    level: 9
  },
  {
    name: 'CSS',
    icon: 'css',
    category: 'frontend',
    level: 8
  },
  
  {
    name: 'JavaScript',
    icon: 'javascript',
    category: 'frontend',
    level: 7
  },
  {
    name: 'React',
    icon: 'react',
    category: 'frontend',
    level: 6
  },
  {
    name: 'Tailwind CSS',
    icon: 'tailwind',
    category: 'frontend',
    level: 7
  },
  {
    name: 'MySQL',
    icon: 'mysql',
    category: 'backend',
    level: 6
  },
  {
    name: 'MongoDB',
    icon: 'mongodb',
    category: 'backend',
    level: 5
  },
  {
    name: 'Canva',
    icon: 'canva',
    category: 'design',
    level: 8
  },
  {
    name: 'Figma',
    icon: 'figma',
    category: 'design',
    level: 7
  },
  {
    name: 'Git',
    icon: 'git',
    category: 'tools',
    level: 8
  },
  {
    name: 'Vite',
    icon: 'vite',
    category: 'tools',
    level: 4
  }
];

export const testimonials: Testimonial[] = [
  {
  id: '1',
  name: 'Rohan Verma',
  position: 'Friend & Classmate',
  company: 'Shri Shankaracharya Technical Campus',
  image: 'https://ui-avatars.com/api/?name=Rohan+Verma&background=0D8ABC&color=fff' , // You can replace this with Rohan's actual photo or avatar
  quote: 'Kuldeep is the go-to guy in our class whenever someone gets stuck in web development. His designs are not only creative but also super user-friendly. He genuinely enjoys building cool stuff and helping others — which makes him a great team player.'
},
{
  id: '2',
  name: 'Aarav Sharma',
  position: 'Teammate & Classmate',
  company: 'Shri Shankaracharya Technical Campus',
  image: 'https://ui-avatars.com/api/?name=Aarav+Sharma&background=5A20CB&color=fff', // Replace with Aarav's photo or avatar if available
  quote: 'Working with Kuldeep on our mini-project was a great experience. He handled the frontend part so smoothly — from responsive layouts to clean design using React and Tailwind CSS. He always brought fresh ideas and kept the team motivated throughout.'
},
{
  id: '3',
  name: 'Sneha Patel',
  position: 'Classmate & Project Partner',
  company: 'Shri Shankaracharya Technical Campus',
  image:'https://ui-avatars.com/api/?name=Sneha+Patel&background=E91E63&color=fff', // Replace with Sneha’s image/avatar
  quote: 'Kuldeep did an amazing job in our Arduino mini-project where we built a temperature and humidity monitoring system using the DHT22 sensor. He handled the code logic, LCD display integration, and made sure everything worked smoothly. His problem-solving attitude and tech skills really stood out.'
}

]; 

export const experiences: Experience[] = [
  {
  id: '1',
  title: 'Frontend Developer (Fresher)',
  company: 'Personal & Academic Projects',
  location: 'Raipur, Chhattisgarh',
  startDate: 'August 2023',
  endDate: 'Present',
  description: [
    'Built responsive and interactive websites using React and modern frontend technologies as part of college and personal projects',
    'Transformed Figma and Canva mockups into fully functional web pages',
    'Collaborated with peers on group projects to ensure consistent UI/UX standards',
    'Wrote clean, well-documented code with a focus on usability and accessibility'
  ],
  technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Git']
}
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'Shri Shankaracharya Technical Campus, Bhilai',
    degree: 'B.Tech',
    field: 'CSE (AI Specialization)',
    startDate: '2023',
    endDate: '2027'
  },
  {
    id: '2',
    institution: 'Bharat Mata Higher Secondary School',
    degree: 'Higher Secondary (12th)',
    field: 'Science',
    startDate: '2022',
    endDate: '2023',
    percentage: '72.8%'
  },
  {
    id: '3',
    institution: 'Bharat Mata Higher Secondary School',
    degree: 'Secondary (10th)',
    field: 'General',
    startDate: '2020',
    endDate: '2021',
    percentage: '94.5%'
  }
];
