import React from 'react'
import { CheckCircle, Users, Award, Clock, Shield, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Props = {}

const WhyChooseUs = ({}: Props) => {
  const advantages = [
    {
      icon: Users,
      title: "Conversion Experts",
      description: "Our certified CRO specialists have optimized thousands of websites across every industry and traffic source."
    },
    {
      icon: Target,
      title: "Data-Driven Results",
      description: "Every optimization is backed by rigorous A/B testing and statistical analysis for guaranteed improvements."
    },
    {
      icon: Clock,
      title: "Rapid Implementation",
      description: "See conversion improvements within 30 days with our proven optimization framework and agile testing process."
    },
    {
      icon: Shield,
      title: "ROI Guarantee",
      description: "Minimum 2x ROI or your money back. We're so confident in our methods, we guarantee results."
    },
    {
      icon: Award,
      title: "Industry Leading",
      description: "Recognized as top conversion optimization experts with award-winning strategies and methodologies."
    },
    {
      icon: CheckCircle,
      title: "Continuous Optimization",
      description: "24/7 monitoring and continuous testing to ensure your conversion rates keep improving over time."
    }
  ]

  const differentiators = [
    "Custom conversion strategies tailored to your industry and audience",
    "Transparent pricing with guaranteed ROI - no hidden fees",
    "Dedicated conversion specialist assigned to your account",
    "Proven methodologies backed by thousands of successful tests",
    "Real-time reporting and analytics dashboards for full transparency",
    "Complete testing setup and optimization roadmap included"
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose ConvertOrDie?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're not just another optimization agency. Here's what sets us apart and makes us the right choice for maximizing your conversions.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <advantage.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - What Makes Us Different */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              What Makes Us Different
            </h3>
            <div className="space-y-4">
              {differentiators.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Company Info */}
          <div className="bg-card border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              About ConvertOrDie
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded by conversion optimization experts with a mission to help businesses maximize their revenue, 
                ConvertOrDie brings together data scientists, UX designers, and conversion specialists 
                to deliver measurable results that directly impact your bottom line.
              </p>
              <p>
                Our team has collectively optimized over 2,000 websites and generated over $500M in additional 
                revenue for our clients through systematic testing and optimization of conversion funnels.
              </p>
              <p>
                We believe in a data-driven approach where every change is tested and validated before implementation, 
                ensuring that your conversion rates continuously improve over time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">2,000+</div>
                <div className="text-sm text-muted-foreground">Sites Optimized</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">$500M+</div>
                <div className="text-sm text-muted-foreground">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">2.8x</div>
                <div className="text-sm text-muted-foreground">Avg Conversion Lift</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">30 days</div>
                <div className="text-sm text-muted-foreground">Time to Results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
