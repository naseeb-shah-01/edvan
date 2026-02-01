"use client";

import React from 'react';
import Tile from '@/components/common/Tile';
import useAdminDashboard from '@/hooks/use-admin-dashboard';
import { useAuthStore } from '@/lib/store/auth';

const TileExample: React.FC = () => {

  const {adminData,loading,navigate} = useAdminDashboard();
  const user= useAuthStore((state)=>state?.user);
  
  
  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Welcome {user?.role} {user?.name} </h1>
      
      <div className="flex flex-wrap gap-6 mb-8">
        {/* Basic tile */}
        
        
        {/* With custom colors */}
        <Tile 
          number={adminData?.courses||0} 
          label="Courses" 
          backgroundColor="bg-blue-500"
          numberColor="text-white"
          onClick={() => navigate('/courses')}
          labelColor="text-blue-100"
        />
        
       
        <Tile 
          number={adminData?.enrollments||0} 
          label="Enrollments" 
          onClick={() => navigate('/admin/enrollments')}
          backgroundColor="bg-purple-100 hover:bg-purple-200"
          className="border-2 border-purple-300"
        />
        
        {/* Success/Error style tiles */}
        <Tile 
          number={adminData?.instructors||0} 
          label="Instructors" 
          backgroundColor="bg-green-100"
          onClick={() => navigate('/admin/instructors')}
          numberColor="text-green-700"
          labelColor="text-green-600"
        />
        
        <Tile 
          number={adminData?.students||0} 
          label="Students" 
          backgroundColor="bg-red-100"
          onClick={() => navigate('/admin/students')}
          numberColor="text-red-700"
          labelColor="text-red-600"
        />
      </div>
      
      {/* Grid layout example */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
        <Tile number={1500} label="Visits" />
        <Tile number={87} label="Orders" />
        <Tile number={4.8} label="Rating" />
        <Tile number={92} label="Score" />
      </div>
    </div>
  );
};

export default TileExample;