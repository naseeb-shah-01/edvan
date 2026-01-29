'use client'

import { Header } from '@/components/header'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle, Target, Lightbulb, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Grealearing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to make quality education accessible to everyone, everywhere.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-secondary/30">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  At Grealearing, we believe that education is the most powerful tool for personal and professional growth. We're committed to providing high-quality, accessible learning experiences that empower individuals to achieve their goals.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're just starting your learning journey or looking to advance your skills, we're here to support you every step of the way.
                </p>
                <Button size="lg">
                  <Link href="/register">Start Learning Today</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 border border-border text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <p className="text-muted-foreground">Active Learners</p>
                </Card>
                <Card className="p-6 border border-border text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <p className="text-muted-foreground">Courses</p>
                </Card>
                <Card className="p-6 border border-border text-center">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <p className="text-muted-foreground">Satisfaction Rate</p>
                </Card>
                <Card className="p-6 border border-border text-center">
                  <div className="text-4xl font-bold text-primary mb-2">30+</div>
                  <p className="text-muted-foreground">Expert Instructors</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-8 border border-border text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Focus</h3>
                <p className="text-muted-foreground">
                  We focus on delivering quality over quantity in every course we offer.
                </p>
              </Card>

              <Card className="p-8 border border-border text-center">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously innovate to provide the latest learning experiences.
                </p>
              </Card>

              <Card className="p-8 border border-border text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We foster a supportive community where learners can grow together.
                </p>
              </Card>

              <Card className="p-8 border border-border text-center">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, every day.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-secondary/30">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Sarah Johnson', role: 'Founder & CEO', bio: 'Passionate about education technology' },
                { name: 'Mike Chen', role: 'Chief Technology Officer', bio: 'Building scalable learning platforms' },
                { name: 'Emma Wilson', role: 'Head of Curriculum', bio: 'Designing world-class courses' },
              ].map((member) => (
                <Card key={member.name} className="overflow-hidden border border-border text-center">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/30">👤</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm font-medium text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Learning Community</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start your journey with us today and unlock your potential.
              </p>
              <Button size="lg">
                <Link href="/register">Get Started Free</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
