import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Star, Users, TrendingUp, Shield } from 'lucide-react'
import Link from 'next/link'

type Props = {}

const Products = ({}: Props) => {
  return (
    <section className='py-16 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <Badge variant="outline" className="mb-4">Our Solutions</Badge>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Comprehensive Business Solutions
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            From strategy to execution, we provide end-to-end solutions to help your business thrive in today's competitive landscape.
          </p>
        </div>

        {/* Featured Solutions Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Business Consulting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Strategic planning and operational optimization to drive sustainable growth for your business.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">From $2,500</span>
                <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Digital Marketing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Complete digital marketing solutions including SEO, social media, and content strategy.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">From $1,800</span>
                <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Financial Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Professional financial planning and investment strategy development for long-term success.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">From $3,200</span>
                <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className='bg-muted/50 rounded-2xl p-8 mb-16'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div>
              <div className='text-3xl font-bold text-foreground mb-2'>500+</div>
              <div className='text-muted-foreground'>Happy Clients</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-foreground mb-2'>95%</div>
              <div className='text-muted-foreground'>Success Rate</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-foreground mb-2'>24/7</div>
              <div className='text-muted-foreground'>Support Available</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8'>
          <h3 className='text-2xl font-bold text-foreground mb-4'>
            Ready to Transform Your Business?
          </h3>
          <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
            Get started with a free consultation and discover how our solutions can help you achieve your business goals.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size="lg" className="min-w-[200px]">
              Get Free Consultation
            </Button>
            <Link href="/products">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products