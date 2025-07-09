import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react'
import Link from 'next/link'

type Props = {}

const Hero = ({}: Props) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span>Trusted by 500+ businesses</span>
              <span className="text-muted-foreground/60">•</span>
              <span>5-star rated service</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Drive More
                <span className="block text-primary">Conversions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Transform your digital marketing with our cutting-edge conversion optimization platform. 
                Turn more visitors into customers and maximize your ROI with data-driven strategies.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-muted-foreground">Advanced conversion tracking and analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-muted-foreground">A/B testing and optimization tools</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-muted-foreground">Proven strategies that increase conversions</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Converting Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  View Demo
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2.5x</div>
                <div className="text-sm text-muted-foreground">Avg Conversion Lift</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Client Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Optimization</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-3xl transform -rotate-3"></div>
            
            {/* Main Content Card */}
            <div className="relative bg-card border rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Growth Focused</h3>
                    <p className="text-sm text-muted-foreground">Results-driven approach</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Conversion Rate</span>
                    <span className="text-sm font-medium text-green-600">+250%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full w-[85%]"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Lead Generation</span>
                    <span className="text-sm font-medium text-blue-600">+300%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-[95%]"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">ROI Improvement</span>
                    <span className="text-sm font-medium text-purple-600">+180%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-[98%]"></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    "ConvertOrDie increased our conversion rate by 340% in just 3 months. The ROI is incredible!"
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">- Sarah Johnson, Marketing Director</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}

export default Hero