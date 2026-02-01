import { AdminCourseService } from "@/services/admin.course.service";
import { CreateCourse, CreateCourseResponse, CreateCourseSection, CreateCourseSectionResponse } from "@/types/course";
import { set } from "date-fns";
import { use, useState } from "react";
import { toast } from "sonner";

const initialCourseSection: CreateCourseSection = {
  title: "", 
  description: "", 
  course_id: 0, 
  
  order: 1,
}

export const useAdminCourse = (initialData: CreateCourse) => {
  const [courseData, setCourseData] = useState<CreateCourse>(initialData);
  const [isLoading,setIsLoading]=useState(false);
  const [courseSection,setCourseSection]=useState<CreateCourseSection>({
    
        title: "", 
        description: "", 
        course_id: 1, 
        
        order: 1,
        
        
      
  })
const [sections,setSections]=useState<CreateCourseSectionResponse[]>([])
  const handleCourseUpdate = (updatedData: CreateCourse) => {
    setCourseData(updatedData);
    console.log('Course updated:', updatedData);
  };

const handleUpdateCourseDetails= (e:any) => {

setCourseData(pre=>({...pre,[e.target.name]:e.target.value}))
}
const handleUpdateCourseSectionDetails= (e:any) => {

    setCourseSection(pre=>({...pre,[e.target.name]:e.target.value}))
    }
const handleAddCourse= async() => {

    try{
        setIsLoading(true);
        const response= await AdminCourseService.createCourse(courseData)
        toast.success('Course created successfully');
        setCourseData(response);
    }catch{
        console.error('Error creating course');
        toast.error('Error creating course');
    }finally{
        console.log('Course creation attempt finished');
        setIsLoading(false);
    
    }
}
const handleAddCourseSection= async() => {
 if(courseData.id===undefined){
  alert('Please create the course first');
  return
 }
    try{
        setIsLoading(true);
        const response= await AdminCourseService.CreateCourseSection({...courseSection,course_id:courseData.id})
        toast.success('Course Section created successfully');
        setSections(pre=>[...pre,response]);
        setCourseSection(initialCourseSection);
    }catch{
        console.error('Error creating course');
        toast.error('Error creating course');
    }finally{
        console.log('Course creation attempt finished');
        setIsLoading(false);
    
    }
}


  return {
    courseData,
    handleCourseUpdate,
    handleUpdateCourseDetails,sections,setSections,
    handleAddCourse,loading:isLoading,courseSection,handleUpdateCourseSectionDetails,handleAddCourseSection
  };
};