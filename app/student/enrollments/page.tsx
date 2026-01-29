"use client"

import { Header } from "@/components/header"
import axios from "@/lib/axios"
import api from "@/lib/axios"
import { useAuthStore } from "@/lib/store/auth"
import React, { useEffect } from "react"

/* =======================
   TypeScript Types
======================= */

type Course = {
  id: number
  title: string
  description: string | null
  category: string | null
  instructor_id: number
  price: number
  duration: number | null
  is_published: boolean
  is_free: boolean
  created_at: string
}

type Enrollment = {
  id: number
  user_id: number
  progress: number
  enrolled_at: string
  course: Course
}

/* =======================
   Progress Bar Component
======================= */

const ProgressBar = ({ value }: { value: number }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div
        className="h-full bg-green-600 transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

/* =======================
   Course Card Component
======================= */

const CourseCard = ({ enrollment }: { enrollment: Enrollment }) => {
  const { course, progress } = enrollment

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition">
      
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {course.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
        {course.description}
      </p>

      {/* Meta */}
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>{course.category}</span>
        <span className="font-medium">
          {course.is_free ? "Free" : `₹${course.price}`}
        </span>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <ProgressBar value={progress} />
      </div>

      {/* Button */}
      <button className="w-full bg-black text-white py-2 rounded-lg text-sm hover:bg-gray-800 transition">
        Continue Learning
      </button>
    </div>
  )
}

/* =======================
   Main Component
======================= */

const MyCourses = () => {

    const user = useAuthStore((state) => state.user);
    const [enrollments, setEnrollments] = React.useState<Enrollment[]>([])
    useEffect(() => {
      const fetchCourses = async () => {
        try {
          const res = await api.get<Enrollment[]>(`enroll/user/${user?.id}/courses`);
          setEnrollments(res.data);
        } catch (err) {
         
            console.error("API Error:",err);
          
        } finally {
          console.log("Fetch attempt finished.");
        }
      };
  
    if(user?.id)  fetchCourses();
    }, [user?.id]);

  if (!enrollments.length) {
    return (
        <>
        
        
      <div className="text-center text-gray-500 py-10">
        You are not enrolled in any courses yet.
      </div>
      </>
    )
  }

  return (
    <>
        
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 m-6">
      {enrollments.map((enrollment) => (
        <CourseCard
          key={enrollment.id}
          enrollment={enrollment}
        />
      ))}
    </div>
    </>
  )
}

export default MyCourses
