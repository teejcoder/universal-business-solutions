// Testimonials data for use across the application
export interface Testimonial {
  id: string
  name: string
  image: string
  title: string
  company: string
  content: string
  rating: number
  results: string
  industry: string
  avatar?: string
  featured?: boolean
}

export interface StatItem {
  icon: string
  value: string
  label: string
  description: string
}

export const testimonials: Testimonial[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/11/converse-fields.jpg?q=80&w=1377&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "CEO",
    company: "TechStart Inc.",
    content: "Universal Business Solutions completely transformed our operations. Their strategic approach helped us increase revenue by 150% and streamline our processes. The team is incredibly professional and results-driven.",
    rating: 5,
    results: "150% revenue increase",
    industry: "Technology",
    featured: true
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    image: "https://images.unsplash.com/11/dreamcatcher.jpg?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Founder",
    company: "GreenLeaf Consulting",
    content: "Working with UBS was a game-changer for our business. They helped us develop a comprehensive digital marketing strategy that doubled our client base in just 6 months. Highly recommend their services.",
    rating: 5,
    results: "200% client growth",
    industry: "Consulting",
    featured: true
  },
  {
    id: "emma-rodriguez",
    name: "Emma Rodriguez",
    image: "https://images.unsplash.com/11/dreamcatcher.jpg?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Director",
    company: "Retail Solutions Co.",
    content: "The financial planning and business optimization services provided by UBS saved our company over $200K annually. Their expertise in process improvement is unmatched. Professional, efficient, and results-focused.",
    rating: 5,
    results: "$200K annual savings",
    industry: "Retail",
    featured: true
  },
  {
    id: "david-kim",
    name: "David Kim",
    image: "https://images.unsplash.com/11/dreamcatcher.jpg?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "CTO",
    company: "Innovation Labs",
    content: "The IT support and digital transformation services exceeded our expectations. Our system efficiency improved by 300% and downtime was reduced to almost zero.",
    rating: 5,
    results: "300% efficiency boost",
    industry: "Technology",
    featured: false
  },
  {
    id: "lisa-thompson",
    name: "Lisa Thompson",
    image: "https://images.unsplash.com/11/dreamcatcher.jpg?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "VP Operations",
    company: "Global Manufacturing",
    content: "Their HR management solutions streamlined our processes and improved employee satisfaction by 40%. The implementation was smooth and the ongoing support is excellent.",
    rating: 5,
    results: "40% satisfaction increase",
    industry: "Manufacturing",
    featured: false
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    image: "https://images.unsplash.com/11/dreamcatcher.jpg?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Managing Partner",
    company: "Legal Associates",
    content: "The legal advisory services helped us navigate complex compliance issues and saved us from potential costly mistakes. Their expertise is invaluable.",
    rating: 5,
    results: "Risk mitigation",
    industry: "Legal",
    featured: false
  }
]

export const testimonialStats: StatItem[] = [
  {
    icon: "Users",
    value: "500+",
    label: "Happy Clients",
    description: "Businesses transformed"
  },
  {
    icon: "TrendingUp",
    value: "98%",
    label: "Success Rate",
    description: "Project completion"
  },
  {
    icon: "Award",
    value: "5★",
    label: "Average Rating",
    description: "Client satisfaction"
  }
]

// Helper functions for filtering testimonials
export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.featured)
}

export const getTestimonialsByIndustry = (industry: string): Testimonial[] => {
  return testimonials.filter(testimonial => 
    testimonial.industry.toLowerCase() === industry.toLowerCase()
  )
}

export const getRandomTestimonials = (count: number): Testimonial[] => {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export const getTestimonialById = (id: string): Testimonial | undefined => {
  return testimonials.find(testimonial => testimonial.id === id)
}

// Get unique industries for filtering
export const getUniqueIndustries = (): string[] => {
  return [...new Set(testimonials.map(t => t.industry))]
}
