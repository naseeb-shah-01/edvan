"use client";
import { useState } from 'react';
import CourseCard from '@/components/course/CourseForm';
import CourseSection from '@/components/course/CourseSection';
import { useAdminCourse } from '@/hooks/use-admin-course';


const CoursesPage = () => {


  const { courseData, handleUpdateCourseDetails, handleAddCourse, loading,sections, courseSection, handleUpdateCourseSectionDetails, handleAddCourseSection } = useAdminCourse({
    title: "",
    description: "",
    category: "",
    instructor_id: 1,
    price: 0,
    duration: 0,
    is_published: false
  })






  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Course Management</h1>
          <p className="text-gray-600">Edit and manage your courses and sections</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Course Details</h2>
              {courseData?.id && <CourseCard
                title={courseData.title}
                description={courseData.description}
                category={courseData.category}
                price={courseData.price}
                duration={courseData.duration}
                is_published={courseData.is_published}
                instructor_id={courseData.instructor_id}
                isEditable={false} />}


              {/* Add New Course Form */}
              {!courseData?.id &&
                <div className="mt-6 bg-white p-6 rounded-xl border border-blue-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Create New Course</h3>
                  <form className="space-y-4" >
                    <input
                      type="text"
                      value={courseData.title}
                      onChange={handleUpdateCourseDetails}
                      name='title'
                      placeholder="Course Title"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      value={courseData.category}
                      onChange={handleUpdateCourseDetails}
                      name='category'
                      placeholder="Course Category"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      placeholder="Description"
                      name='description'
                      value={courseData.description}
                      onChange={handleUpdateCourseDetails}
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      onClick={handleAddCourse}
                      className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Create Course
                    </button>
                  </form>
                </div>}
            </div>
          </div>

          {/* Right Column - Sections */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">Course Curriculum</h2>
                  <p className="text-gray-600">Manage sections and their order</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  + Add Section
                </button>
              </div>
            </div>

             <div className="space-y-4">
              {sections.map((section, index) => (
                <CourseSection
                  key={index}
                  {...section}
                  onClick={() => console.log(`Clicked section ${section.order}`)}
                  onUpdate={(data) =>{}}
                  isEditable={false}
                />
              ))}
            </div> 

            {/* Add New Section Form */}
            <div className="mt-8 bg-white rounded-xl p-6 border-2 border-dashed border-blue-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Section</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={courseSection.title}
                    onChange={handleUpdateCourseSectionDetails}
                    name='title'
                    placeholder="Section Title"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    value={courseSection.order}
                    onChange={handleUpdateCourseSectionDetails}
                    name='order'
                    placeholder="Order"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <textarea
                  placeholder="Description"
                  rows={2}
                  value={courseSection.description}
                  onChange={handleUpdateCourseSectionDetails}
                  name='description'
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="grid grid-cols-2 gap-4">

                  <input
                    type="number"
                    value={courseData?.id}
                    disabled={!!courseData?.id}
                    onChange={handleUpdateCourseSectionDetails}
                    placeholder="Course ID"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  onClick={handleAddCourseSection}
                  className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Section
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;