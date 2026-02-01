
"use client"

import { StudentLearningService } from "@/services/student.learning.service";
import { EnrollmentDetailResponse } from "@/types/enrollement";
import { useEffect, useState } from "react";





export default function useStudentLearning(id:number) {
const [enrollmentDetails,setEnrollmentDetails] = useState<null|EnrollmentDetailResponse>(null);  
const [loading,setLoading]=useState<boolean>(true);
const [error,setError]=useState<null|Error>(null);





useEffect(()=>{
  setLoading(true);
StudentLearningService.getCourserDetailsByEnrollmentId(id).then((d)=>{
  setEnrollmentDetails(d);
}).catch((err)=>{
  console.error("Failed to fetch enrollment details",err);  }).finally(()=>{
    setLoading(false);
  });

},[id])


return {
  enrollmentDetails,loading,error
}
  
  // Custom hook logic can be added here
}