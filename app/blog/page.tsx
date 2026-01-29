'use client'

import { Header } from '@/components/header'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, User } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Web Development',
    excerpt: 'Learn the fundamentals of web development and build your first website in this comprehensive guide.',
    date: 'Jan 15, 2024',
    author: 'Sarah Johnson',
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Advanced JavaScript Patterns',
    excerpt: 'Master advanced JavaScript concepts and patterns to write cleaner, more efficient code.',
    date: 'Jan 12, 2024',
    author: 'Mike Chen',
    category: 'JavaScript',
    image: 'https://images.unsplash.com/photo-1517694712782-9f03fbb4bbd4?w=500&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'React Best Practices in 2024',
    excerpt: 'Discover the latest best practices and patterns for building scalable React applications.',
    date: 'Jan 10, 2024',
    author: 'Emma Wilson',
    category: 'React',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'CSS Grid vs Flexbox',
    excerpt: 'Understanding the differences and when to use CSS Grid and Flexbox for your layouts.',
    date: 'Jan 08, 2024',
    author: 'James Brown',
    category: 'CSS',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
  },
  {
    id: 5,
    title: 'The Future of Web Technology',
    excerpt: 'Exploring emerging technologies and trends that will shape the future of web development.',
    date: 'Jan 05, 2024',
    author: 'Lisa Anderson',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
  },
  {
    id: 6,
    title: 'Performance Optimization Tips',
    excerpt: 'Essential techniques to optimize your applications and improve user experience.',
    date: 'Jan 02, 2024',
    author: 'David Lee',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
  },
]

export default function BlogPage() {

  
  return (
    <>
      

      <main className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold text-foreground mb-4">Latest Articles</h1>
            <p className="text-lg text-muted-foreground">
              Discover insights, tips, and guides to accelerate your learning journey
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden border border-border hover:shadow-lg transition-shadow">
                  {/* Image */}
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="space-y-3 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                    </div>

                    <Button variant="ghost" className="w-full group">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
