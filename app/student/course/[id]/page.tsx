"use client";
import { useState } from 'react';
import CourseCard from '@/components/course/CourseForm';
import CourseSection from '@/components/course/CourseSection';
import useStudentLearning from '@/hooks/use-student-course';
import EnrollmentDetails from '@/components/course/enrollment';


const CoursesPage = () => {

const {enrollmentDetails,loading,error}=useStudentLearning(3)



  const [courseData, setCourseData] = useState({
    title: "waxing",
    description: "Learn React f swkakakakrom basics to advanced withs",
    category: "Waxing",
    instructor_id: 1,
    price: 19,
    duration: 12,
    is_published: false
  });

  const [sections, setSections] = useState([
    { 
      title: "Complete React Course", 
      description: "Learn React from basics to advanced", 
      course_id: 1, 
      price: 1999, 
      order: 3,
      isActive: false,
      isCompleted: false
    },
    { 
      title: "Introduction to React", 
      description: "Get started with React fundamentals", 
      course_id: 1, 
      price: 0, 
      order: 1,
      isActive: true,
      isCompleted: false
    },
    { 
      title: "Components & Props", 
      description: "Learn about components and props", 
      course_id: 1, 
      price: 0, 
      order: 2,
      isActive: false,
      isCompleted: true
    },
  ]);

  const handleCourseUpdate = (updatedData: any) => {
    setCourseData(updatedData);
    console.log('Course updated:', updatedData);
  };

  const handleSectionUpdate = (updatedData: any, index: number) => {
    const newSections = [...sections];
    newSections[index] = updatedData;
    setSections(newSections);
    console.log('Section updated:', updatedData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
     {!loading&&<EnrollmentDetails data={enrollmentDetails!} />}
    </div>
  );
};

export default CoursesPage;