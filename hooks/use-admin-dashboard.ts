"use client";

import { AdminDashboardService } from "@/services/admin.dashboard";
import { DashboardStats } from "@/types/dashboard";
import { set } from "date-fns";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";


export default function useAdminDashboard() {
const [adminData, setAdminData] =  useState<DashboardStats|null>(null); 
const [loading, setLoading] = useState<boolean>(false);
const [error, setError] = useState<string | null>(null);
const router = useRouter();
const navigate = (url: string) => router.push(url);



useEffect(() => {  
    AdminDashboardService.getDashboard().then((data) => {
        setAdminData(data);
    }).catch((err) => {
        setError(err.message || 'An error occurred');
    });
 }, []);






return {adminData,loading, error,navigate};


}