import {  CourseResponseWithAdditionalDetails, CreateCourse, CreateCourseResponse, CreateCourseSection, CreateCourseSectionResponse } from "@/types/course"
import api from "@/lib/axios"
import { DashboardStats } from "@/types/dashboard"

class AdminDashboard {
  

  async createCourse(CourseData: CreateCourse): Promise<CreateCourseResponse> {
    const response = await api.post(`/courses/`, 
    JSON.stringify(CourseData)
    )

    if (!response.status.toString().startsWith('2')) {
      throw new Error('Creation failed')
    }

    return response.data
  }

  async CreateCourseSection(courseSection: CreateCourseSection): Promise<CreateCourseSectionResponse> {
    const response = await api.post(`/course-sections/add`,  JSON.stringify(courseSection)
    )

    if (!response.status.toString().startsWith('2')) {
      throw new Error('Registration failed')
    }

    return response.data
  }
 async getDashboard():Promise<DashboardStats> {
    const response = await api.get(`/admin/dashboard`
   
    )

    if (!response.status.toString().startsWith('2')) {
      throw new Error('Failed to fetch course')
    }

    return response.data
  }

}


export const AdminDashboardService = new AdminDashboard()
