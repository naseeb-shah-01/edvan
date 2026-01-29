'use client'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { BookOpen, Users, Zap, Award } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import ProgramsSection from '@/components/ProgramsSection'
import StatsSection from '@/components/StatsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import WhyEdvantageSection from '@/components/WhyEdvantageSection'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function HomePage() {
  return (
    <>
      
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        
         <HeroSection />
      <ProgramsSection />
      <StatsSection />
      <TestimonialsSection />
      <WhyEdvantageSection />
      <WhatsAppButton />
      </main>
    </>
  )
}
