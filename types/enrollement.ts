// ===============================
// Course Section
// ===============================
export interface CourseSection {
    id: number;
    course_id: number;
    title: string;
    order: number;
    description: string | null;
  }
  
  // ===============================
  // Progress Record
  // ===============================
  export interface ProgressRecord {
    id: number;
    trackable_type: "section" | "lesson";
    trackable_id: number;
    status: "in_progress" | "completed";
    completed_at: string | null;
    created_at: string;
    section?: CourseSection; // present when trackable_type === "section"
  }
  
  // ===============================
  // Course
  // ===============================
  export interface Course {
    id: number;
    title: string;
    category: string | null;
    description: string | null;
    instructor_id: number;
    price: number;
    duration: number | null;
    is_published: boolean;
    is_free: boolean;
    created_at: string;
    sections: CourseSection[];
  }
  
  // ===============================
  // Enrollment Detail Response
  // ===============================
  export interface EnrollmentDetailResponse {
    id: number;
    user_id: number;
    course_id: number;
    enrolled_at: string;
    progress: number;
    paymentStatus: number;
  
    course: Course;
    progress_records: ProgressRecord[];
  }
  