"use client"

import { Header } from "@/components/header"
import { useAuthStore } from "@/lib/store/auth"
import React from "react"
import MyCourses from "../enrollments/page"

type User = {
  id: number
  email: string
  name: string
  role: "student" | "instructor" | "admin"
}

type Props = {
  user: User
}

const roleBadgeColor = {
  student: "bg-blue-100 text-blue-700",
  instructor: "bg-indigo-100 text-indigo-700",
  admin: "bg-red-100 text-red-700",
}

const UserProfileCard: React.FC<Props> = () => {
    const user= useAuthStore((state) => state.user)!
  return (
    <>
    
    <div className="max-w-md mx-auto bg-white border border-blue-100 rounded-xl shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-blue-900">
            {user?.name}
          </h2>
          <p className="text-sm text-blue-600">
            {user?.email}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">User ID</span>
          <span className="font-medium text-blue-900">
            #{user?.id}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500">Role</span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${roleBadgeColor[user?.role]}`}
          >
            {user?.role.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Action */}
      <button
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition"
      >
        Edit Profile
      </button>
    </div>
    {
        user?.role==="student"&&<MyCourses/>
    }
    </>
  )
}

export default UserProfileCard
