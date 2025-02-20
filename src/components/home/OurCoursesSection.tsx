import React from 'react';
import { Button } from '../ui/button';

import Image from '@/components/Image';


const coursesData = [
  {
    id: 1,
    image: '/online-education-website/images/ourCourses/Web-Design-Fundamentals.png',
    title: 'Web Design Fundamentals',
    description:
      'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
    duration: '4 weeks',
    level: 'beginner',
    author: 'By John Doe',
  },
  {
    id: 2,
    image: '/online-education-website/images/ourCourses/UI-UX-Design.png',
    title: 'UI/UX Design',
    description:
      'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.',
    duration: '6 weeks',
    level: 'Intermediate',
    author: 'By Emily Johnson',
  },
  {
    id: 3,
    image: '/online-education-website/images/ourCourses/Mobile-App-Development.png',
    title: 'Mobile App Development',
    description:
      'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.',
    duration: '8 weeks',
    level: 'Intermediate',
    author: 'By David Brown',
  },
  {
    id: 4,
    image: '/online-education-website/images/ourCourses/Graphic-Design.png',
    title: 'Graphic Design for Beginners',
    description:
      'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.',
    duration: '10 weeks',
    level: 'Beginner',
    author: 'By Michael Adams',
  },
  {
    id: 5,
    image: '/online-education-website/images/ourCourses/Front-End-Web-Development.png',
    title: 'Front-End Web Development',
    description:
      'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.',
    duration: '10 weeks',
    level: 'Intermediate',
    author: 'By Michael Adams',
  },
  {
    id: 6,
    image: '/online-education-website/images/ourCourses/Advanced-JavaScript.png',
    title: 'Advanced JavaScript',
    description:
      'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.',
    duration: '6 weeks',
    level: 'Advanced',
    author: 'By Jennifer Wilson',
  },
];

function CourseCard({ course }: { course: (typeof coursesData)[number] }) {
  return (
    <div className="p-4 md:p-6 lg:p-[50px] flex flex-col gap-4 md:gap-6 lg:gap-[30px]">
      <div className="w-full">
        <Image
          path={course.image}
          alt={course.title}
          className="w-full h-auto"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="flex justify-between text-sm md:text-base whitespace-nowrap">
        <div className="flex gap-2 md:gap-[10px] whitespace-nowrap">
          <p className="whitespace-nowrap">{course.duration}</p>
          <p className="whitespace-nowrap">{course.level}</p>
        </div>
        <p className="whitespace-nowrap">{course.author}</p>
      </div>
      <div className="flex flex-col gap-3 md:gap-4 lg:gap-[14px]">
        <p className="font-semibold text-lg md:text-xl lg:text-2xl">
          {course.title}
        </p>
        <p className="text-sm md:text-base lg:text-md text-grey-30">
          {course.description}
        </p>
      </div>
      <Button className="w-full text-center text-sm md:text-base">
        Get it Now
      </Button>
    </div>
  );
}

export default function OurCoursesSection() {
  return (
    <section className="grid gap-20 w-[90%] md:w-[85%] lg:w-[80%] mx-auto py-16 ">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-10 ">
        {/* text section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl ">Our Courses</h1>
          <p className="text-sm md:text-lg pr-4 md:pr-10 text-grey-30 ">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <p className="whitespace-nowrap text-sm md:text-base">View All</p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-light-97 gap-4 py-4">
        {coursesData.map((course) => (
          <div key={course.id} className="bg-white md:min-h-[550px]">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </section>
  );
}
