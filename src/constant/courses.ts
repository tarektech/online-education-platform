//https://ik.imagekit.io/tarektech/online-education-website/images/Courses/Mobile-App-Development-1.png?updatedAt=1739980835217
export const courses = [
  {
    id: 1,
    title: 'Web Design Fundamentals',
    description:
      'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
    image: {
      image1: '/online-education-website/images/Courses/web-design-1.png',
      image2: '/online-education-website/images/Courses/web-design-2.png',
      image3: '/online-education-website/images/Courses/web-design-3.png',
    },
    duration: '4 weeks',
    level: 'Beginner',
    author: 'By John Doe',
    Curriculum: {
      week1: 'Introduction to HTML',
      week2: 'styling with CSS',
      week3: 'Introduction to Responsive Design',
      week4: 'Design Principles for web',
      week5: 'Building a Basic website',
    },
  },
  {
    id: 2,
    title: 'UI/UX Design Fundamentals',
    description:
      'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.',
    image: {
      image1: '/online-education-website/images/Courses/UI-UX-Design-1.png',
      image2: '/online-education-website/images/Courses/UI-UX-Design-2.png',
      image3: '/online-education-website/images/Courses/UI-UX-Design-3.png',
    },
    duration: '6 weeks',
    level: 'Intermediate',
    author: 'By Emily Smith',
    Curriculum: {
      week1: 'Introduction to UI/UX Design',
      week2: 'User Research and Personas',
      week3: 'Wireframing and Prototyping',
      week4: 'Visual Design and Branding',
      week5: 'Usability Testing and Iteration',
    },
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description:
      'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.',
    image: {
      image1:
        '/online-education-website/images/Courses/Mobile-App-Development-1.png',
      image2:
        '/online-education-website/images/Courses/Mobile-App-Development-2.png',
      image3:
        '/online-education-website/images/Courses/Mobile-App-Development-3.png',
    },
    duration: '8 weeks',
    level: 'Intermediate',
    author: 'By David Brown',
    Curriculum: {
      week1: 'Introduction to Mobile App Development',
      week2: 'Fundamentals of Swift Programming (iOS)',
      week3: 'Fundamentals of Kotlin Programming (Android)',
      week4: 'State Management and Data Persistence',
      week5: 'App Deployment and Testing',
    },
  },
  {
    id: 4,
    title: 'Graphic Design for Beginners',
    description:
      'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.',
    image: {
      image1:
        '/online-education-website/images/Courses/Graphic-Design-1.png',
      image2: '/online-education-website/images/Courses/Graphic-Design-2.png',
      image3: '/online-education-website/images/Courses/Graphic-Design-3.png',
    },
    duration: '6 weeks',
    level: 'Beginner',
    author: 'By Sarah Thompson',
    Curriculum: {
      week1: 'Introduction to Graphic Design',
      week2: 'Typography and Color Theory',
      week3: 'Layout Design and Composition',
      week4: 'Image Editing and Manipulation',
      week5: 'Designing for Print and Digital Media',
    },
  },
  {
    id: 5,
    title: 'Front-End Web Development',
    description:
      'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.',
    image: {
      image1: '/online-education-website/images/Courses/Front-End-Web-1.png',
      image2: '/online-education-website/images/Courses/Front-End-Web-2.png',
      image3: '/online-education-website/images/Courses/Front-End-Web-3.png',
    },
    duration: '10 weeks',
    level: 'Intermediate',
    author: 'By Michael Adams',
    Curriculum: {
      week1: 'HTML Fundamentals',
      week2: 'CSS Styling and Layouts',
      week3: 'JavaScript Basics',
      week4: 'Building Responsive Websites',
      week5: 'Introduction to Bootstrap and React',
    },
  },
];


export type courseType = typeof courses;
