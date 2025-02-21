import CourseCard from "./CourseCard";
import Courses from "./Courses";
import { courses } from "@/constant/courses";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Courses',
  description: 'SkillBridge is a platform that helps you learn new skills and get paid for them.',
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-light-97">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Courses /> 
        <CourseCard course={courses} />
      </div>
    </div>
  );
}
