'use client'

import { ReactNode } from 'react'
import { useAuthStore } from '@/lib/store/auth'

export function AuthProvider({ children }: { children: ReactNode }) {
  // Initialize the store on provider mount
  useAuthStore()
  
  return <>{children}</>
}

export function useAuth() {
  return useAuthStore()
}
