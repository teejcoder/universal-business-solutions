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
    image: "https://images.pexels.com/photos/6973758/pexels-photo-6973758.jpeg",
    title: "Marketing Director",
    company: "TechStart Inc.",
    content: "ConvertOrDie completely transformed our conversion rates. Their A/B testing approach helped us increase our lead conversion by 340% and reduced our customer acquisition cost by 60%. The ROI is absolutely incredible.",
    rating: 5,
    results: "340% conversion increase",
    industry: "Technology",
    featured: true
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    image: "https://images.pexels.com/photos/32844863/pexels-photo-32844863.jpeg",
    title: "E-commerce Manager",
    company: "GreenLeaf Store",
    content: "Working with ConvertOrDie was a game-changer for our online store. Their landing page optimization increased our e-commerce conversion rate by 280% and our average order value by 45% in just 6 months.",
    rating: 5,
    results: "280% conversion increase",
    industry: "E-commerce",
    featured: true
  },
  {
    id: "emma-rodriguez",
    name: "Emma Rodriguez",
    image: "https://images.pexels.com/photos/32778272/pexels-photo-32778272.jpeg",
    title: "Growth Marketing Lead",
    company: "SaaS Solutions Co.",
    content: "ConvertOrDie's conversion optimization completely transformed our SaaS signup flow. We increased our trial-to-paid conversion rate by 190% and reduced our churn by 35%. The data-driven approach is incredible.",
    rating: 5,
    results: "190% conversion increase",
    industry: "SaaS",
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
    value: "2.8x",
    label: "Avg Conversion Lift",
    description: "Across all clients"
  },
  {
    icon: "TrendingUp",
    value: "280%",
    label: "ROI Increase",
    description: "Average improvement"
  },
  {
    icon: "Award",
    value: "30 days",
    label: "Time to Results",
    description: "See improvements fast"
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
