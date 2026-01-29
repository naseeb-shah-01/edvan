export interface User {
  id: string
  email: string
  name: string
}

export interface AuthResponse {
  access_token: string
  user: User
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials extends LoginCredentials {
  full_name: string
  confirm_password: string
}
