/* =========================
   ROLES
========================= */

export const ROLES = {
  ADMIN: "admin",
  INSTRUCTOR: "instructor",
  STUDENT: "student",
} as const

export type Role = typeof ROLES[keyof typeof ROLES]

/* =========================
   ROUTES
========================= */

export const ROUTES = {
  // public
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  BLOG: "/blog",
  ABOUT: "/about",
  COURSES: "/courses",

  // student
  STUDENT_HOME: "/student/home",
  STUDENT_ENROLLMENTS: "/student/enrollments",

  // instructor
  INSTRUCTOR_HOME: "/instructor/home",
  INSTRUCTOR_COURSES: "/instructor/courses",

  // admin
  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_USERS: "/admin/users",
  ADMIN_COURSES_ADD: "/admin/addcourse",
} as const

/* =========================
   NAVIGATION
========================= */

type NavLink = {
  label: string
  href: string
}

/** Before login */
export const PUBLIC_NAV: readonly NavLink[] = [
  { label: "Home", href: ROUTES.HOME },
  { label: "Blog", href: ROUTES.BLOG },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Courses", href: ROUTES.COURSES },
]

/** After login (role based) */
export const ROLE_BASED_NAV: Record<Role, readonly NavLink[]> = {
  admin: [
    { label: "Dashboard", href: ROUTES.ADMIN_DASHBOARD },
    { label: "Users", href: ROUTES.ADMIN_USERS },
    { label: "Courses", href: ROUTES.COURSES },
    {label:"Add Course", href: ROUTES.ADMIN_COURSES_ADD }
  ],

  instructor: [
    { label: "Home", href: ROUTES.INSTRUCTOR_HOME },
    { label: "My Courses", href: ROUTES.INSTRUCTOR_COURSES },
    { label: "All Courses", href: ROUTES.COURSES },
  ],

  student: [
    { label: "Home", href: ROUTES.STUDENT_HOME },
    { label: "My Enrollments", href: ROUTES.STUDENT_ENROLLMENTS },
    { label: "Courses", href: ROUTES.COURSES },
  ],
}

/* =========================
   ROUTE ACCESS CONTROL
========================= */

export const ROLE_ROUTES: Record<Role, readonly string[]> = {
  admin: [
    ROUTES.ADMIN_DASHBOARD,
    ROUTES.ADMIN_USERS,
  ],

  instructor: [
    ROUTES.INSTRUCTOR_HOME,
    ROUTES.INSTRUCTOR_COURSES,
  ],

  student: [
    ROUTES.STUDENT_HOME,
    ROUTES.STUDENT_ENROLLMENTS,
  ],
}

/* =========================
   HELPERS
========================= */

export const getNavLinks = (role?: Role) => {
  if (!role) return PUBLIC_NAV
  return ROLE_BASED_NAV[role]
}

/* =========================
   THEME & STORAGE
========================= */

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
} as const

export const STORAGE_KEYS = {
  AUTH: "auth-storage",
  THEME: "theme-storage",
} as const

/* =========================
   DEMO
========================= */

export const DEMO_CREDENTIALS = {
  email: "demo@example.com",
  password: "password",
} as const
