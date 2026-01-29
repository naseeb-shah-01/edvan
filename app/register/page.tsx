import { Header } from '@/components/header'
import { AuthCard } from '@/components/auth/auth-card'
import { RegisterForm } from '@/components/auth/register-form'

export default function RegisterPage() {
  return (
    <>
      
      <AuthCard
        title="Create Account"
        description="Join Edvantage today and start learning"
      >
        <RegisterForm />
      </AuthCard>
    </>
  )
}
