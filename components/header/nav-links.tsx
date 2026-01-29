'use client'

import { getNavLinks } from '@/constants'
import { useAuthStore } from '@/lib/store/auth'
import Link from 'next/link'


export function NavLinks() {
  const user = useAuthStore((state) => state.user)
  const navLinks = getNavLinks(user?.role)

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
