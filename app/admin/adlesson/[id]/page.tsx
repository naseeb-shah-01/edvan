



'use client';

import React, { useEffect } from "react"

import { useState } from 'react';
import { BookOpen, FileText, Video, ImageIcon, CheckCircle2, X } from 'lucide-react';
import { useParams } from "next/navigation";
import { AdminCourseService } from "@/services/admin.course.service";

interface LessonFormData {
  section_id: number;
  title: string;
  lesson_type: 'TEXT' | 'VIDEO' | 'IMAGE' | 'DOCUMENT';
  content: string;
  is_free_preview: boolean;
}

interface LessonFormProps {
  initialData?: LessonFormData;
  onSubmit: (data: LessonFormData) => void;
  onCancel?: () => void;
}

const lessonTypeOptions = [
  { value: 'TEXT', label: 'Text', icon: FileText },
  { value: 'VIDEO', label: 'Video', icon: Video },
  
];

export function LessonForm({ initialData, onSubmit, onCancel }: LessonFormProps) {
  const [allLesson,setAllLesson]=useState<any[]>([])

  const id = useParams()?.id;
  const [formData, setFormData] = useState<LessonFormData>(
    initialData || {
      section_id: id?+id:1,
      title: '',
      lesson_type: 'TEXT',
      content: '',
      is_free_preview: false,
    }
  );

  const [errors, setErrors] = useState<Partial<Record<keyof LessonFormData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};

    if (!formData.section_id) {
      newErrors.section_id = 'Section ID is required';
    }
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value === 'true' ? true : value === 'false' ? false : isNaN(Number(value)) ? value : Number(value),
    }));
    if (errors[name as keyof LessonFormData]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof LessonFormData];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      AdminCourseService.
      addLessonToSection(formData)
    }
  };

  useEffect(()=>{
    AdminCourseService.getAllLessonBySection(Number(id)).then((
      data=>setAllLesson(data)
    ))
  },[id])

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="border border-blue-200 rounded-lg shadow-lg overflow-hidden bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 p-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-900">Create Lesson</h1>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Section ID */}
          <div>
            <label htmlFor="section_id" className="block text-sm font-semibold text-blue-900 mb-2">
              Section ID
            </label>
            <input
              type="number"
              id="section_id"
              name="section_id"
              value={formData.section_id}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.section_id ? 'border-red-500 bg-red-50' : 'border-blue-200 bg-blue-50'
              }`}
              placeholder="Enter section ID"
            />
            {errors.section_id && <p className="text-xs text-red-600 mt-1">{errors.section_id}</p>}
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-blue-900 mb-2">
              Lesson Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.title ? 'border-red-500 bg-red-50' : 'border-blue-200 bg-blue-50'
              }`}
              placeholder="e.g., Introduction to SQL"
            />
            {errors.title && <p className="text-xs text-red-600 mt-1">{errors.title}</p>}
          </div>

          {/* Lesson Type */}
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-3">Lesson Type</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {lessonTypeOptions.map(({ value, label, icon: Icon }) => (
                <label key={value} className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="lesson_type"
                    value={value}
                    checked={formData.lesson_type === value}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`flex flex-col items-center gap-2 p-3 border rounded-lg transition-all ${
                    formData.lesson_type === value
                      ? 'border-blue-600 bg-blue-100 text-blue-900'
                      : 'border-blue-200 bg-blue-50 text-gray-700 hover:bg-blue-100'
                  }`}>
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{label}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-semibold text-blue-900 mb-2">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                errors.content ? 'border-red-500 bg-red-50' : 'border-blue-200 bg-blue-50'
              }`}
              placeholder="SQL is a standard language used to store, retrieve, and manipulate data in relational databases..."
            />
            {errors.content && <p className="text-xs text-red-600 mt-1">{errors.content}</p>}
            <p className="text-xs text-gray-600 mt-1">{formData.content.length} characters</p>
          </div>

          {/* Free Preview Toggle */}
          <div className="border-t border-blue-200 pt-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  name="is_free_preview"
                  checked={formData.is_free_preview}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className={`w-6 h-6 border-2 rounded transition-all ${
                  formData.is_free_preview
                    ? 'bg-blue-600 border-blue-600'
                    : 'border-blue-300 bg-white'
                }`}>
                  {formData.is_free_preview && (
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  )}
                </div>
              </div>
              <span className="text-sm font-medium text-blue-900">Make this lesson available as free preview</span>
            </label>
            <p className="text-xs text-gray-600 mt-2 ml-9">Allow students to access this lesson without enrollment</p>
          </div>

          {/* Form Actions */}
          <div className="border-t border-blue-200 pt-6 flex gap-3 justify-end">
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="flex items-center gap-2 px-4 py-2 border border-blue-300 text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4" />
              Create Lesson
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LessonForm;