"use client";
import { useState } from 'react';
import CourseCard from '@/components/course/CourseForm';
import CourseSection from '@/components/course/CourseSection';


const CoursesPage = () => {
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Course Management</h1>
         
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Course Details</h2>
              <CourseCard 
                {...courseData} 
                onUpdate={handleCourseUpdate}
                isEditable={false}
              />
              
              {/* Add New Course Form */}
              
            </div>
          </div>

          {/* Right Column - Sections */}
          <div className="lg:col-span-2">
           

            <div className="space-y-4">
              {sections.map((section, index) => (
                <CourseSection
                  key={index}
                  {...section}
                  onClick={() => console.log(`Clicked section ${section.order}`)}
                  onUpdate={(data) => handleSectionUpdate(data, index)}
                  isEditable={false}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;