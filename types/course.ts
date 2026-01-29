import { User } from "./auth";

export interface CourseProps {
  title: string;
  description: string;
  category: string;
  instructor_id?: number;
  price: number;
  duration: number;
  is_published: boolean;
  onUpdate?: (data: any) => void;
  isEditable?: boolean;
  instructor?:User;
}

export interface CreateCourse {
    id?: number;
    title: string;
    description: string;
    category: string;
    instructor_id: number;
    price: number;
    duration: number;
    is_published: boolean;
}
export interface CreateCourseResponse extends  CreateCourse {
    id:number;
    

    

}

// course section



  export interface CreateCourseSection {
    id?: number;
    title: string;
    description: string;
    course_id: number;
    
    order: number;
  }

  export interface CreateCourseSectionResponse extends CreateCourseSection {
    id: number;
  }

  export interface Lesson {
    id: number;
    title: string;
    section_id: number;
    duration_minutes: number;
    video_url: string;
    is_free_preview: boolean;
  }
  
  export interface Section {
    title: string;
    description: string;
    course_id: number;
    order: number;
    lessons: Lesson[];
  }
  
  export interface CourseResponseWithAdditionalDetails {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    is_free: boolean;
    is_published: boolean;
    sections: Section[];
    instructor:User;
  created_at: string;
  duration: number;
  }
  