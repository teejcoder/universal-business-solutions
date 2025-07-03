import React from 'react'
import { Star, Quote, ArrowRight, TrendingUp, Users, Award } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type Props = {}

const Testimonials = ({}: Props) => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechStart Inc.",
      content: "Universal Business Solutions completely transformed our operations. Their strategic approach helped us increase revenue by 150% and streamline our processes. The team is incredibly professional and results-driven.",
      rating: 5,
      results: "150% revenue increase",
      industry: "Technology"
    },
    {
      name: "Michael Chen",
      title: "Founder, GreenLeaf Consulting",
      content: "Working with UBS was a game-changer for our business. They helped us develop a comprehensive digital marketing strategy that doubled our client base in just 6 months. Highly recommend their services.",
      rating: 5,
      results: "200% client growth",
      industry: "Consulting"
    },
    {
      name: "Emma Rodriguez",
      title: "Director, Retail Solutions Co.",
      content: "The financial planning and business optimization services provided by UBS saved our company over $200K annually. Their expertise in process improvement is unmatched. Professional, efficient, and results-focused.",
      rating: 5,
      results: "$200K annual savings",
      industry: "Retail"
    }
  ]

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      description: "Businesses transformed"
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Success Rate",
      description: "Project completion"
    },
    {
      icon: Award,
      value: "5★",
      label: "Average Rating",
      description: "Client satisfaction"
    }
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business leaders have to say about working with us.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-3 border-t border-border">
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                      {testimonial.results}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.industry}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-card border rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let us help you achieve similar results. Schedule a free consultation to discuss your business goals and see how we can help you grow.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Get Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
