'use client'

import { HeaderBrand } from './header/brand'
import { NavLinks } from './header/nav-links'
import { ThemeToggle } from './header/theme-toggle'
import { AuthButtons } from './header/auth-buttons'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white dark:bg-slate-950 shadow-sm">
      <div className="mx-auto max-w-full px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <HeaderBrand />
          <NavLinks />
          <div className="flex items-center gap-6">
            <ThemeToggle />
            <AuthButtons />
          </div>
        </div>
      </div>
    </header>
  )
}
