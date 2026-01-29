# Professional Folder Structure

## Overview

This project follows a scalable, professional folder structure that separates concerns and makes the codebase easy to maintain and extend.

## Directory Structure

```
project-root/
├── app/
│   ├── api/                    # API routes
│   │   └── auth/              # Authentication endpoints
│   ├── login/                  # Login page
│   ├── register/               # Register page
│   ├── blog/                   # Blog page
│   ├── about/                  # About page
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
│
├── components/
│   ├── ui/                     # Shadcn UI components (primitive)
│   ├── header/                 # Header sub-components
│   │   ├── brand.tsx           # Logo and brand
│   │   ├── nav-links.tsx       # Navigation links
│   │   ├── theme-toggle.tsx    # Theme switcher
│   │   └── auth-buttons.tsx    # Auth button group
│   ├── auth/                   # Auth-related components
│   │   ├── login-form.tsx      # Login form component
│   │   ├── register-form.tsx   # Register form component
│   │   └── auth-card.tsx       # Auth page wrapper
│   └── header.tsx              # Main header component
│
├── hooks/
│   ├── use-mobile.ts           # Mobile detection hook
│   ├── use-toast.ts            # Toast notification hook
│   ├── useLogin.ts             # Custom login hook
│   └── useRegister.ts          # Custom register hook
│
├── lib/
│   ├── store/
│   │   └── auth.ts             # Zustand auth store
│   ├── axios.ts                # Axios instance with interceptors
│   └── utils.ts                # Utility functions
│
├── providers/
│   ├── theme-provider.tsx      # Theme context provider
│   ├── auth-provider.tsx       # Auth provider wrapper
│   └── index.tsx               # Combined providers
│
├── services/
│   └── auth.service.ts         # Auth API service
│
├── types/
│   └── auth.ts                 # Auth TypeScript types
│
├── utils/
│   ├── validation.ts           # Validation functions
│   └── errors.ts               # Error handling utilities
│
├── constants/
│   └── index.ts                # App constants
│
├── public/                     # Static assets
├── styles/                     # Additional styles
├── next.config.mjs             # Next.js config
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies
```

## Folder Purpose

### `/app`
Next.js 13+ App Router pages and API routes. Each folder represents a route.

### `/components`
Reusable UI components organized by feature:
- **ui/**: Primitive components from shadcn/ui
- **header/**: Header-specific sub-components
- **auth/**: Authentication-related components

### `/hooks`
Custom React hooks for business logic and state management:
- Data fetching
- Form handling
- Custom state logic

### `/lib`
Library configurations and utilities:
- **store/**: Zustand stores for global state
- **axios.ts**: Configured axios instance with interceptors
- **utils.ts**: Generic utility functions

### `/providers`
React Context providers for global features:
- Theme management
- Authentication
- Global state

### `/services`
API service classes for backend communication:
- Encapsulates API calls
- Type-safe requests
- Centralized error handling

### `/types`
TypeScript type definitions and interfaces:
- Shared types across the app
- API request/response types
- Domain models

### `/utils`
Pure utility functions:
- Validation logic
- Error handling
- String manipulation
- Date formatting

### `/constants`
Application constants and configuration:
- Route paths
- Navigation links
- Demo credentials
- Storage keys

## Design Patterns

### 1. Service Layer Pattern
API calls are encapsulated in service classes (`/services`):
```typescript
// services/auth.service.ts
export const authService = new AuthService()

// components/auth/login-form.tsx
const response = await authService.login(credentials)
```

### 2. Custom Hooks Pattern
Business logic extracted into custom hooks (`/hooks`):
```typescript
// hooks/useLogin.ts
export function useLogin() { ... }

// components/auth/login-form.tsx
const { login, isLoading } = useLogin()
```

### 3. Component Composition
Large components split into smaller, focused components:
```typescript
// components/header.tsx imports sub-components
<Header />
  ├── <HeaderBrand />
  ├── <NavLinks />
  ├── <ThemeToggle />
  └── <AuthButtons />
```

### 4. State Management
Zustand stores for global state with TypeScript types:
```typescript
// lib/store/auth.ts
export const useAuthStore = create<AuthStore>()
```

## Dependency Injection

Services are instantiated as singletons and imported where needed:

```typescript
// services/auth.service.ts
export const authService = new AuthService()

// hooks/useLogin.ts
import { authService } from '@/services/auth.service'
```

## Type Safety

Types are centralized in `/types` for consistency:

```typescript
// types/auth.ts
export interface User { ... }
export interface LoginCredentials { ... }

// services/auth.service.ts
import type { LoginCredentials } from '@/types/auth'
```

## Benefits

1. **Scalability**: Easy to add new features without affecting existing code
2. **Maintainability**: Clear organization makes debugging easier
3. **Reusability**: Hooks and services can be reused across components
4. **Type Safety**: Centralized types prevent errors
5. **Testing**: Isolated services and hooks are easier to test
6. **Performance**: Code splitting and lazy loading optimizations
