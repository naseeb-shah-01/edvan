import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name } = body

    // Simple validation
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Email, password, and name are required' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      )
    }

    // Mock registration - In production, save to database
    // Check for duplicate email (mock check)
    if (email.includes('taken')) {
      return NextResponse.json(
        { error: 'Email already in use' },
        { status: 409 }
      )
    }

    return NextResponse.json({
      token: 'mock-jwt-token-' + Date.now(),
      user: {
        id: Math.random().toString(),
        email: email,
        name: name,
      },
    })
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
