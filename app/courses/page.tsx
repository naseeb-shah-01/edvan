"use client";

import { Header } from "@/components/header";
import api from "@/lib/axios";
import { useAuthStore } from "@/lib/store/auth";
import { ApiError } from "@/utils/errors";
import axios from "axios";
import { get } from "http";
import { Router, useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

type Course = {
  id: number;
  title: string;
  description: string;
  category: string;
  instructor_id: number;
  price: number;
  duration: number;
  is_published: boolean;
  created_at: string;
};

const coursesData: Course[] = [
  {
    id: 1,
    title: "Complete React Course",
    description: "Learn React from basics to advanced",
    category: "Web Development",
    instructor_id: 1,
    price: 1999,
    duration: 120,
    is_published: false,
    created_at: "2026-01-21T18:42:52",
  },
  {
    id: 2,
    title: "Complete",
    description: "Learn React from basics to advanced",
    category: "Web Development",
    instructor_id: 1,
    price: 1999,
    duration: 120,
    is_published: false,
    created_at: "2026-01-21T18:43:24",
  },
];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);


  // Extract unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(courses?.map((c) => c?.category)));
  }, [courses]);

  // Filter logic
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchCategory = selectedCategory
        ? course.category === selectedCategory
        : true;

      const matchSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [search, selectedCategory,courses]);


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.get<Course[]>("/courses/all");
        setCourses(res.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const apiError = new ApiError(
            err.response?.status || 500,
            err.response?.data?.message || err.message
          );
          console.error("API Error:", apiError);
        } else {
          console.error("Unexpected Error:", err);
        }
      } finally {
        console.log("Fetch attempt finished.");
      }
    };

    fetchCourses();
  }, []);
  return (
    <>
    
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-5">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>

        <button
          onClick={() => setSelectedCategory(null)}
          className={`block w-full text-left mb-2 px-3 py-2 rounded ${
            selectedCategory === null
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`block w-full text-left mb-2 px-3 py-2 rounded ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Course List */}
        {courses.length === 0 ? (
          <p className="text-gray-500">No courses found.</p>
        ) : (
          <CourseGrid courses={filteredCourses} />
        )}
      </main>
    </div>
    </>
  );
}





type Props = {
  courses: Course[]
}

export  function CourseGrid({ courses }: Props) {
  const [loadingId, setLoadingId] = useState<number | null>(null)
  const user= useAuthStore((state) => state.user) 
    
  const isAdmin=user?.role==="admin"
 
  const handleEnroll = async (courseId: number) => {
    try {
      setLoadingId(courseId)

      const res = await api.post("/enroll/user", 
       {
        "user_id": user?.id,
          course_id: courseId,
        }
      )

      if (!res.status.toString().startsWith("2")) {
        throw new Error("Enrollment failed")
      }

      alert("Successfully enrolled 🎉")
    
    } catch (error) {
      console.error(error)
      alert("Something went wrong")
    } finally {
      setLoadingId(null)
    }
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-card text-card-foreground border rounded-lg p-4 shadow-sm flex flex-col"
        >
          <h3 className="text-lg font-semibold mb-2">
            {course.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
            {course.description}
          </p>

          <div className="text-sm text-muted-foreground space-y-1 mb-4">
            <p>
              <span className="font-medium text-foreground">
                Category:
              </span>{" "}
              {course.category}
            </p>
            <p>
              <span className="font-medium text-foreground">
                Duration:
              </span>{" "}
              {course.duration} hrs
            </p>
            <p>
              <span className="font-medium text-foreground">
                Price:
              </span>{" "}
              ₹{course.price}
            </p>
          </div>

          <button
            onClick={() => handleEnroll(course.id)}
            disabled={loadingId === course.id}
            className="mt-auto w-full rounded-md bg-primary text-primary-foreground py-2 text-sm font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAdmin?"View":loadingId === course.id ? "Enrolling..." : "Enroll"}
          </button>
        </div>
      ))}
    </div>
  )
}

