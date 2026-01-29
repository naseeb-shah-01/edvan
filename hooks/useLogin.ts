'use client'

import { useCallback } from 'react'
import { useAuthStore } from '@/lib/store/auth'
import { authService } from '@/services'
import type { LoginCredentials } from '@/types/auth'

export function useLogin() {
  const { setToken, setUser, setIsLoading, isLoading } = useAuthStore()

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      setIsLoading(true)
      try {
        const response = await authService.login(credentials)
        console.log('Login response:', response)
        setToken(response?.access_token)
        setUser(response.user)
      } catch (error) {
        setIsLoading(false)
        throw error instanceof Error ? error : new Error('Login failed')
      }
    },
    [setToken, setUser, setIsLoading]
  )

  return { login, isLoading }
}
