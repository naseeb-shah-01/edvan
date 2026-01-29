import {  CourseResponseWithAdditionalDetails, CreateCourse, CreateCourseResponse, CreateCourseSection, CreateCourseSectionResponse } from "@/types/course"
import api from "@/lib/axios"

class AdminCourse {
  private readonly API_URL =  'https://edvantagebackend-production.up.railway.app/api/v1'

  async createCourse(CourseData: CreateCourse): Promise<CreateCourseResponse> {
    const response = await api.post(`/courses`, 
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
 async getCourse(id:number):Promise<CourseResponseWithAdditionalDetails> {
    const response = await api.get(`/courses/all-details/${id}`
   
    )

    if (!response.status.toString().startsWith('2')) {
      throw new Error('Failed to fetch course')
    }

    return response.data
  }

}


export const AdminCourseService = new AdminCourse()
