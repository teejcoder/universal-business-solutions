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
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Professional Services Tailored to Your Needs
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            We provide expert services across multiple business domains to help you achieve operational excellence and sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Strategy & Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Comprehensive business strategy development, market analysis, and strategic planning services.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Business Analysis
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Market Research
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Strategic Roadmaps
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
              <CardTitle className="text-xl">Digital Transformation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Complete digital transformation services to modernize your business operations and processes.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Process Automation
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  System Integration
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Digital Workflows
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
              <CardTitle className="text-xl">Team Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Professional training and development programs to enhance your team's skills and productivity.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Leadership Training
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Skills Assessment
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Team Building
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
            Our Service Process
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-primary'>1</span>
              </div>
              <h4 className='font-semibold text-foreground mb-2'>Consultation</h4>
              <p className='text-sm text-muted-foreground'>Initial assessment and requirement gathering</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-primary'>2</span>
              </div>
              <h4 className='font-semibold text-foreground mb-2'>Planning</h4>
              <p className='text-sm text-muted-foreground'>Custom strategy and implementation plan</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-primary'>3</span>
              </div>
              <h4 className='font-semibold text-foreground mb-2'>Execution</h4>
              <p className='text-sm text-muted-foreground'>Professional implementation and delivery</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-primary'>4</span>
              </div>
              <h4 className='font-semibold text-foreground mb-2'>Support</h4>
              <p className='text-sm text-muted-foreground'>Ongoing support and optimization</p>
            </div>
          </div>
        </div>

        {/* Service Guarantees */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          <div className='text-center'>
            <div className='w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Clock className='w-8 h-8 text-green-600 dark:text-green-400' />
            </div>
            <h4 className='font-semibold text-foreground mb-2'>Timely Delivery</h4>
            <p className='text-muted-foreground'>We guarantee on-time delivery for all our services</p>
          </div>
          <div className='text-center'>
            <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4'>
              <CheckCircle className='w-8 h-8 text-blue-600 dark:text-blue-400' />
            </div>
            <h4 className='font-semibold text-foreground mb-2'>Quality Assurance</h4>
            <p className='text-muted-foreground'>100% satisfaction guarantee on all deliverables</p>
          </div>
          <div className='text-center'>
            <div className='w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Headphones className='w-8 h-8 text-purple-600 dark:text-purple-400' />
            </div>
            <h4 className='font-semibold text-foreground mb-2'>24/7 Support</h4>
            <p className='text-muted-foreground'>Round-the-clock support throughout your project</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8'>
          <h3 className='text-2xl font-bold text-foreground mb-4'>
            Ready to Get Started?
          </h3>
          <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
            Book a consultation with our experts to discuss your specific needs and how we can help your business succeed.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size="lg" className="min-w-[200px]">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              View Service Packages
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services