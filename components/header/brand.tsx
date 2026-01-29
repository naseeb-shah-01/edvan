import Link from 'next/link'
import { ROUTES } from '@/constants'

export function HeaderBrand() {
  return (
    <Link href={ROUTES.HOME} className="flex items-center gap-3">
      <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
        E
      </div>
      <span className="text-2xl font-bold text-foreground">Edvantage</span>
    </Link>
  )
}
