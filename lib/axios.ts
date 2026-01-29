import axios, { AxiosInstance, AxiosError } from 'axios'
import { useAuthStore } from '@/lib/store/auth'

const api: AxiosInstance = axios.create({
  baseURL: 'https://edvantagebackend-production.up.railway.app/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to append bearer token from Zustand store
api.interceptors.request.use(
  config => {
    const token = useAuthStore.getState().token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Response interceptor to handle 401
api.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Clear token from Zustand store and redirect to login
      useAuthStore.getState().logout()
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
