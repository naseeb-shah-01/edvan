export class ApiError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

export function handleApiError(error: unknown): string {
  if (error instanceof ApiError) {
    if (error.status === 401) {
      return 'Invalid credentials. Please check your email and password.'
    }
    if (error.status === 409) {
      return 'Email already registered. Please use a different email.'
    }
    if (error.status === 400) {
      return 'Invalid input. Please check your information and try again.'
    }
    if (error.status >= 500) {
      return 'Server error. Please try again later.'
    }
    return error.message
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'An unexpected error occurred. Please try again.'
}

export function throwApiError(status: number, message: string): never {
  throw new ApiError(status, message)
}
