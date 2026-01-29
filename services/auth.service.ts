import { AuthResponse, LoginCredentials, RegisterCredentials } from '@/types/auth'

class AuthService {
  private readonly API_URL = 'https://edvantagebackend-production.up.railway.app/api/v1'

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await fetch(`${this.API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })

    if (!response.ok) {
      throw new Error('Login failed')
    }

    return response.json()
  }

  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    const response = await fetch(`${this.API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })

    if (!response.ok) {
      throw new Error('Registration failed')
    }

    return response.json()
  }
}

export const authService = new AuthService()
