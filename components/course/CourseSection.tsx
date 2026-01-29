// components/CourseSection.tsx
import React, { useState } from 'react';

interface SectionProps {
  title: string;
  description: string;
  course_id: number;
  price?: number;
  order: number;
  isActive?: boolean;
  isCompleted?: boolean;
  onClick?: () => void;
  onUpdate?: (data: any) => void;
  isEditable?: boolean;
}

const CourseSection: React.FC<SectionProps> = ({
  title,
  description,
  course_id,
  price,
  order,
  isActive = false,
  isCompleted = false,
  onClick,
  onUpdate,
  isEditable = false
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title,
    description,
    course_id,
    price,
    order,
    isActive,
    isCompleted
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : 
              type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate?.(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({ title, description, course_id, price, order, isActive, isCompleted });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className={`bg-white rounded-lg border-2 border-blue-300 shadow-md`}>
        <form onSubmit={handleSubmit} className="p-5">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-blue-600">Edit Section</h4>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={handleCancel}
                className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Save
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Course ID
                </label>
                <input
                  type="number"
                  name="course_id"
                  value={formData.course_id}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Order
                </label>
                <input
                  type="number"
                  name="order"
                  value={formData.order}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isActive"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleChange}
                  className="h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="isActive" className="ml-1 text-xs text-gray-700">
                  Active
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isCompleted"
                  name="isCompleted"
                  checked={formData.isCompleted}
                  onChange={handleChange}
                  className="h-3 w-3 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label htmlFor="isCompleted" className="ml-1 text-xs text-gray-700">
                  Completed
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div 
      className={`bg-white rounded-lg border transition-all duration-200 hover:shadow-md cursor-pointer ${
        isActive 
          ? 'border-blue-500 border-2 shadow-md' 
          : 'border-gray-200 hover:border-blue-300'
      }`}
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex items-start justify-between">
          {/* Edit Button */}
          {isEditable && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
              className="absolute right-4 top-4 p-1 text-gray-400 hover:text-blue-600"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          )}

          {/* Order/Number Badge */}
          <div className="flex-shrink-0 mr-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isActive 
                ? 'bg-blue-600 text-white' 
                : isCompleted 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-gray-100 text-gray-600'
            }`}>
              {isCompleted ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <span className="font-bold">{order}</span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-2">
              <h4 className={`font-semibold ${
                isActive ? 'text-blue-700' : 'text-gray-800'
              }`}>
                {title}
              </h4>
              {price > 0 && (
                <span className="text-sm font-medium bg-blue-50 text-blue-600 px-2 py-1 rounded">
                  ${price}
                </span>
              )}
            </div>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                Course ID: {course_id}
              </span>
              
              {/* Status Indicator */}
              <div className="flex items-center">
                {isCompleted && (
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded mr-2">
                    Completed
                  </span>
                )}
                {isActive && (
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded animate-pulse">
                    In Progress
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Arrow Indicator */}
          <div className="flex-shrink-0 ml-4">
            <svg 
              className={`w-5 h-5 transition-transform ${
                isActive ? 'text-blue-600' : 'text-gray-400'
              }`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;