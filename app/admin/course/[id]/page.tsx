"use client";

import CourseCard from "@/components/course/CourseForm";
import CourseSection from "@/components/course/CourseSection";
import { AdminCourseService } from "@/services/admin.course.service";
import { CourseResponseWithAdditionalDetails } from "@/types/course";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


type PageProps = {
  params: {
    id: string;
  };
};

export default function CoursePage() {
  const { id } = useParams();
  console.log("Course ID:", id);

  const [courseData, setCourseData] =
    useState<CourseResponseWithAdditionalDetails | null>(null);

  useEffect(() => {
    AdminCourseService.getCourse(Number(id))
      .then((data) => setCourseData(data))
      .catch((error) => {
        console.error("Error fetching course data:", error);
      });
  }, [id]);

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
</div>
<div className="space-y-4 mt-8 w-1/3">
              {courseData?.sections?.sort((a,b)=>a?.order-b?.order)?.map((section, index) => (
                <CourseSection
                  key={index}
                  {...section}
                  onClick={() => console.log(`Clicked section ${section.order}`)}
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
