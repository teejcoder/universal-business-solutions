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
          <Badge variant="outline" className="mb-4">Conversion Tools</Badge>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Conversion Optimization Solutions
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Powerful tools and strategies designed to turn your website visitors into paying customers. 
            From landing page optimization to advanced analytics, maximize your conversion rates.
          </p>
        </div>

        {/* Featured Solutions Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Conversion Rate Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                A/B testing, heat mapping, and user journey analysis to maximize your website's conversion potential.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">From $1,999</span>
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
              <CardTitle className="text-xl">Landing Page Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Custom landing page design and optimization to maximize conversions from your marketing campaigns.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">From $1,499</span>
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
              <CardTitle className="text-xl">Analytics & Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Advanced conversion tracking, attribution modeling, and performance analytics to optimize your funnel.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">From $999</span>
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
              <div className='text-3xl font-bold text-foreground mb-2'>3.5x</div>
              <div className='text-muted-foreground'>Average Conversion Increase</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-foreground mb-2'>250%</div>
              <div className='text-muted-foreground'>ROI Improvement</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-foreground mb-2'>72hr</div>
              <div className='text-muted-foreground'>Setup Time</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8'>
          <h3 className='text-2xl font-bold text-foreground mb-4'>
            Ready to Maximize Your Conversions?
          </h3>
          <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
            Start your free trial today and see how ConvertOrDie can transform your website into a conversion machine.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size="lg" className="min-w-[200px]">
              Start Free Trial
            </Button>
            <Link href="/products">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                View All Tools
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products