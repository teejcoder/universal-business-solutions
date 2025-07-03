import React from 'react'
import { CheckCircle, Users, Award, Clock, Shield, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Props = {}

const WhyChooseUs = ({}: Props) => {
  const advantages = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our certified professionals bring years of industry experience and proven expertise to every project."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable outcomes and ROI, ensuring your investment delivers tangible business value."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Efficient processes and dedicated project management ensure timely delivery without compromising quality."
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description: "500+ successful projects and 98% client satisfaction rate demonstrate our commitment to excellence."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning solutions and certified methodologies that have been recognized by industry leaders."
    },
    {
      icon: CheckCircle,
      title: "Ongoing Support",
      description: "24/7 support and continuous optimization to ensure your solutions perform at their best."
    }
  ]

  const differentiators = [
    "Customized solutions tailored to your industry and business size",
    "Transparent pricing with no hidden fees or unexpected costs",
    "Dedicated account manager for personalized service",
    "Proven methodologies backed by industry best practices",
    "Flexible engagement models to fit your budget and timeline",
    "Comprehensive training and knowledge transfer included"
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose Universal Business Solutions?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're not just another consulting firm. Here's what sets us apart and makes us the right choice for your business.
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
              About Universal Business Solutions
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded with a mission to help businesses thrive in today's competitive landscape, 
                Universal Business Solutions brings together industry experts, innovative methodologies, 
                and cutting-edge technology to deliver transformative results.
              </p>
              <p>
                Our team of certified professionals has collectively helped over 500 businesses 
                achieve their goals, from startups looking to scale to established enterprises 
                seeking operational excellence.
              </p>
              <p>
                We believe in building long-term partnerships with our clients, providing not just 
                solutions, but ongoing support and strategic guidance to ensure sustained success.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">99%</div>
                <div className="text-sm text-muted-foreground">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
