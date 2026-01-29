'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/providers/auth-provider'
import { ROUTES } from '@/constants'

export function AuthButtons() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push(ROUTES.LOGIN)
  }

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <>
          <span className="text-sm font-medium text-foreground">{user.name}</span>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleLogout}
            className="text-primary hover:bg-primary/10"
          >
            Logout
          </Button>
        </>
      ) : (
        <Button 
          size="sm" 
          onClick={() => router.push(ROUTES.LOGIN)}
          className="bg-primary hover:bg-primary/90 text-white font-medium px-6"
        >
          LOGIN
        </Button>
      )}
    </div>
  )
}
