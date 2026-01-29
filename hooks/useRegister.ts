'use client'

import { useCallback } from 'react'
import { useAuthStore } from '@/lib/store/auth'
import { authService } from '@/services'
import type { RegisterCredentials } from '@/types/auth'

export function useRegister() {
  const { setToken, setUser, setIsLoading, isLoading } = useAuthStore()

  const register = useCallback(
    async (credentials: RegisterCredentials) => {
      setIsLoading(true)
      try {
        const response = await authService.register(credentials)
        setToken(response.token)
        setUser(response.user)
      } catch (error) {
        setIsLoading(false)
        throw error instanceof Error ? error : new Error('Registration failed')
      }
    },
    [setToken, setUser, setIsLoading]
  )

  return { register, isLoading }
}
