import api from "@/lib/axios"
import { EnrollmentDetailResponse } from "@/types/enrollement"

class StudentLearning {
  

 
 async getCourserDetailsByEnrollmentId(id:number):Promise<EnrollmentDetailResponse> {
    const response = await api.get(`/student/enrollment/course-details/${id}`
   
    )

    if (!response.status.toString().startsWith('2')) {
      throw new Error('Failed to fetch course')
    }

    return response.data
  }

}


export const StudentLearningService = new StudentLearning()
