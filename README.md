# Grealearing - Modern Educational Platform

A modern Next.js frontend with Tailwind CSS, featuring authentication, theme switching, and multiple pages (login, register, home, blog, about).

## Features

- ✅ **Authentication System** - Login and registration with JWT tokens
- ✅ **State Management** - useAuth hook for login state across the app
- ✅ **Axios Integration** - Pre-configured axios with:
  - Bearer token auto-append after login
  - 401 redirect to login on unauthorized requests
- ✅ **Theme Switching** - Easy light/dark mode toggle with useTheme hook
- ✅ **Responsive Design** - Mobile-first design with Tailwind CSS
- ✅ **Modern UI** - Clean, professional design inspired by modern educational platforms

## Pages

- **Login** (`/login`) - User login page
- **Register** (`/register`) - User registration page
- **Home** (`/`) - Landing page with features and CTA
- **Blog** (`/blog`) - Article grid with blog posts
- **About** (`/about`) - Company information and team

## Setup

### Installation

```bash
npm install
# or
yarn install
```

### Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Authentication

#### Using the useAuth Hook

```tsx
'use client'

import { useAuth } from '@/providers/auth-provider'

export function MyComponent() {
  const { user, login, logout, isLoading } = useAuth()

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login('email@example.com', 'password')}>
          Login
        </button>
      )}
    </div>
  )
}
```

#### Demo Credentials

For testing, use:
- Email: `demo@example.com`
- Password: `password`

### Theme Switching

#### Using the useTheme Hook

```tsx
'use client'

import { useTheme } from '@/providers/theme-provider'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  )
}
```

### Axios API Calls

#### Using the Pre-configured Axios Instance

```tsx
'use client'

import api from '@/lib/axios'

export async function fetchUserData() {
  try {
    const response = await api.get('/api/user')
    return response.data
  } catch (error) {
    // 401 errors automatically redirect to login
    console.error('Error:', error)
  }
}
```

#### Features

- **Auto Bearer Token**: Token is automatically appended to all requests after login
- **401 Redirect**: On 401 errors, user is redirected to `/login`
- **Request/Response Interceptors**: Ready for custom logic

## Color Theme

The application uses a modern blue color scheme (`#3B82F6`) with light and dark modes:

### Light Mode
- Background: White
- Foreground: Dark gray
- Primary: Blue

### Dark Mode
- Background: Dark gray/black
- Foreground: White
- Primary: Blue

## API Mock

The app includes mock API routes for development:

- `POST /api/auth/login` - Login endpoint
- `POST /api/auth/register` - Registration endpoint

Replace with real API endpoints in production by updating the axios `baseURL`.

## Customization

### Changing Colors

Edit `/app/globals.css` to modify theme colors:

```css
:root {
  --primary: 217 91% 60%; /* Change this to your color */
  /* ... other colors ... */
}
```

### Adding New Pages

Create new files in `/app` directory:

```tsx
// app/new-page/page.tsx
import { Header } from '@/components/header'

export default function NewPage() {
  return (
    <>
      <Header />
      {/* Your content */}
    </>
  )
}
```

## Project Structure

```
├── /app
│   ├── /api/auth          # Authentication API routes
│   ├── /blog              # Blog page
│   ├── /about             # About page
│   ├── /login             # Login page
│   ├── /register          # Register page
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles and theme
├── /components
│   ├── header.tsx         # Navigation header
│   └── /ui                # shadcn/ui components
├── /providers
│   ├── auth-provider.tsx  # Auth context and useAuth hook
│   └── theme-provider.tsx # Theme context and useTheme hook
├── /lib
│   └── axios.ts          # Pre-configured axios instance
└── /public               # Static assets
```

## Technologies

- **Next.js** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **Lucide React** - Icon library
- **shadcn/ui** - UI components

## Deployment

### Deploy to Vercel

```bash
npm run build
```

Then push to GitHub and connect to Vercel for automatic deployment.

### Environment Variables for Production

Set these in your Vercel project:
- `NEXT_PUBLIC_API_URL` - Your API base URL

## Notes

- The authentication is mock-based for development. Connect to a real backend API for production.
- Theme preference is stored in localStorage for persistence across sessions.
- The app automatically handles 401 unauthorized responses by redirecting to login.
- All pages use responsive design and work great on mobile and desktop.

## License

This project is open source and available under the MIT License.
# edvantage_frontend
# edvantage_frontend
# edvan
