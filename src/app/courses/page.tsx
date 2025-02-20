import CourseCard from "./CourseCard";
import Courses from "./Courses";
import { courses } from "@/constant/courses";

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
