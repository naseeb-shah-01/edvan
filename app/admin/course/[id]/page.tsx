"use client";

import CourseCard from "@/components/course/CourseForm";
import CourseSection from "@/components/course/CourseSection";
import { useAdminCourse } from "@/hooks/use-admin-course";
import { AdminCourseService } from "@/services/admin.course.service";
import { CourseResponseWithAdditionalDetails } from "@/types/course";
import { useParams,useRouter } from "next/navigation";

import { useEffect, useState } from "react";


type PageProps = {
  params: {
    id: string;
  };
};

export default function CoursePage() {
  const goto=useRouter()
  const { id } = useParams();
  console.log("Course ID:", id);

  const [courseData, setCourseData] =
    useState<CourseResponseWithAdditionalDetails | null>(null);
  const { courseData : data, handleUpdateCourseDetails,setSections, handleAddCourse, loading,sections, courseSection, handleUpdateCourseSectionDetails, handleAddCourseSection } = useAdminCourse({
    title: courseData?.title||"",
    description: courseData?.description||"",
    category: courseData?.description||"",
    instructor_id: 1,
    price: 0,
    duration: 0,
    is_published: false,
    id: courseData?.id||undefined
  })
  useEffect(() => {
    AdminCourseService.getCourse(Number(id))
      .then((data) => {setCourseData(data)



      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
      });
  }, [id]);
  const navigate=(id:number)=>{
    goto.push('/admin/adlesson/'+id)
  }

  return (
    <div className="p-4 m-auto">
      <h1>{courseData?.title}</h1>
      {/* <pre>{JSON.stringify(courseData, null, 2)}</pre> */}

      <div>
   {  courseData&&<div className="flex flex-row justify-center"> 
    
    <div className="mr-8 mt-8 w-1/2">
    <CourseCard 
                {...courseData} 
                onUpdate={()=>{}}
                isEditable={false}
              />


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


<div className="space-y-4 mt-8 w-1/3">
              {sections?.sort((a,b)=>a?.order-b?.order)?.map((section, index) => (
                <CourseSection
                  key={index}
                  {...section}
                  onClick={() => navigate(section.id)}
                  onUpdate={(data) => {}}
                  isEditable={false}
                />
              ))}
            </div>

              </div>}
              </div>
    </div>
  );
}
