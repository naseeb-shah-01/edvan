import { EnrollmentDetailResponse } from "@/types/enrollement";
import { BookOpen, CheckCircle, CheckCircle2, Clock, DollarSign } from "lucide-react";
export default function CourseEnrollmentCard({ data }: { data: EnrollmentDetailResponse }) {
    const enrolledDate = new Date(data.enrolled_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  
    const isPaid = data.paymentStatus === 1;
    const progressPercentage = Math.round((data.progress_records.length / data.course.sections.length) * 100);
  
    return (
      <div className="w-full max-w-2xl mx-auto p-4">
        <div className="border border-blue-200 rounded-lg shadow-lg overflow-hidden bg-white">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">{data.course.title}</h2>
                <p className="text-blue-700">{data.course.category}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-semibold ${isPaid ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}`}>
                {isPaid ? 'Paid' : 'Pending'}
              </div>
            </div>
          </div>
  
          <div className="p-6 space-y-6">
            {/* Course Description */}
            <div>
              <h3 className="text-sm font-semibold text-blue-900 mb-2">Course Description</h3>
              <p className="text-sm text-gray-700 bg-blue-50 p-3 rounded-lg">{data.course.description}</p>
            </div>
  
            {/* Course Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-900">Price</span>
                </div>
                <p className="text-lg font-bold text-blue-900">${data.course.price}</p>
              </div>
  
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-900">Duration</span>
                </div>
                <p className="text-lg font-bold text-blue-900">{data.course.duration}h</p>
              </div>
  
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-900">Sections</span>
                </div>
                <p className="text-lg font-bold text-blue-900">{data.course.sections.length}</p>
              </div>
  
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-900">Progress</span>
                </div>
                <p className="text-lg font-bold text-blue-900">{progressPercentage}%</p>
              </div>
            </div>
  
            {/* Enrollment Info */}
            <div className="border-t border-blue-200 pt-4">
              <h3 className="text-sm font-semibold text-blue-900 mb-3">Enrollment Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <span className="text-sm text-gray-700">Enrolled On</span>
                  <span className="text-sm font-semibold text-blue-900">{enrolledDate}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <span className="text-sm text-gray-700">Current Progress</span>
                  <span className="text-sm font-semibold text-blue-900">{data.progress_records.length} sections</span>
                </div>
              </div>
            </div>
  
            {/* Progress Records */}
            <div className="border-t border-blue-200 pt-4">
              <h3 className="text-sm font-semibold text-blue-900 mb-3">Section Progress</h3>
              <div className="space-y-2">
                {data.progress_records?.map((record) => (
                  <div key={record.id} className="flex items-center gap-3 p-3 border border-blue-200 rounded-lg bg-white hover:bg-blue-50 transition-colors">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-900">{record?.section?.title}</p>
                      <p className="text-xs text-gray-600">{record?.section?.description}</p>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 ${record.status === 'completed' ? 'border border-green-300 text-green-700 bg-green-50' : 'border border-blue-300 text-blue-700 bg-blue-50'}`}>
                      {record.status === 'completed' && <CheckCircle className="w-3 h-3" />}
                      {record.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }