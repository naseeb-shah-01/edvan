export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePassword(password: string): { valid: boolean; message?: string } {
  if (password.length < 6) {
    return {
      valid: false,
      message: 'Password must be at least 6 characters long',
    }
  }

  return { valid: true }
}

export function validatePasswordMatch(
  password: string,
  confirmPassword: string
): { valid: boolean; message?: string } {
  if (password !== confirmPassword) {
    return {
      valid: false,
      message: 'Passwords do not match',
    }
  }

  return { valid: true }
}

export function validateName(name: string): { valid: boolean; message?: string } {
  if (name.trim().length < 2) {
    return {
      valid: false,
      message: 'Name must be at least 2 characters long',
    }
  }

  return { valid: true }
}
