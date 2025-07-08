import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Clock, CheckCircle, Users, Zap, Target, Headphones } from 'lucide-react'

type Props = {}

const Services = ({}: Props) => {
  return (
    <section className='py-16 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <Badge variant="outline" className="mb-4">Conversion Services</Badge>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Expert Conversion Optimization Services
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Our specialized services are designed to maximize your conversion rates and turn your website traffic into revenue-generating customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Conversion Audit & Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Comprehensive conversion analysis, user behavior research, and strategic optimization planning.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Conversion Funnel Analysis
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  User Journey Mapping
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Optimization Roadmap
                </li>
              </ul>
              <Button variant="ghost" size="sm" className="group-hover:bg-primary/10 w-full">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">A/B Testing & Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Data-driven A/B testing, multivariate testing, and continuous optimization of your conversion elements.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Split Testing Setup
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Statistical Analysis
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Performance Optimization
                </li>
              </ul>
              <Button variant="ghost" size="sm" className="group-hover:bg-primary/10 w-full">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">UX/UI Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                User experience design and interface optimization to remove friction and boost conversion rates.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  User Experience Audit
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Interface Redesign
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Usability Testing
                </li>
              </ul>
              <Button variant="ghost" size="sm" className="group-hover:bg-primary/10 w-full">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Service Process */}
        <div className='bg-muted/50 rounded-2xl p-8 mb-16'>
          <h3 className='text-2xl font-bold text-foreground mb-8 text-center'>
            Our Optimization Process
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-primary'>1</span>
              </div>
              <h4 className='font-semibold text-foreground mb-2'>Analysis</h4>
              <p className='text-sm text-muted-foreground'>Deep dive into your conversion data and user behavior</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-primary'>2</span>
              </div>
              <h4 className='font-semibold text-foreground mb-2'>Hypothesis</h4>
              <p className='text-sm text-muted-foreground'>Develop data-driven optimization hypotheses</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-primary'>3</span>
              </div>
              <h4 className='font-semibold text-foreground mb-2'>Testing</h4>
              <p className='text-sm text-muted-foreground'>A/B test and validate optimization strategies</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-primary'>4</span>
              </div>
              <h4 className='font-semibold text-foreground mb-2'>Scale</h4>
              <p className='text-sm text-muted-foreground'>Implement winners and continue optimization</p>
            </div>
          </div>
        </div>

        {/* Service Guarantees */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          <div className='text-center'>
            <div className='w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Clock className='w-8 h-8 text-green-600 dark:text-green-400' />
            </div>
            <h4 className='font-semibold text-foreground mb-2'>Fast Results</h4>
            <p className='text-muted-foreground'>See conversion improvements within 30 days</p>
          </div>
          <div className='text-center'>
            <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4'>
              <CheckCircle className='w-8 h-8 text-blue-600 dark:text-blue-400' />
            </div>
            <h4 className='font-semibold text-foreground mb-2'>ROI Guarantee</h4>
            <p className='text-muted-foreground'>Minimum 2x ROI or your money back</p>
          </div>
          <div className='text-center'>
            <div className='w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Headphones className='w-8 h-8 text-purple-600 dark:text-purple-400' />
            </div>
            <h4 className='font-semibold text-foreground mb-2'>Expert Support</h4>
            <p className='text-muted-foreground'>Direct access to conversion optimization experts</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8'>
          <h3 className='text-2xl font-bold text-foreground mb-4'>
            Ready to Boost Your Conversions?
          </h3>
          <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
            Book a free conversion audit with our experts and discover how we can increase your conversion rates.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size="lg" className="min-w-[200px]">
              Get Free Audit
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services