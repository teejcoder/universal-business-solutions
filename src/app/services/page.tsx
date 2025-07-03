import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Target, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  Clock, 
  Star,
  ArrowRight,
  Lightbulb,
  BarChart3,
  Settings
} from 'lucide-react'

type Props = {}

const services = [
  {
    id: 1,
    title: "Strategic Business Consulting",
    description: "Comprehensive business strategy development and market analysis to drive sustainable growth.",
    icon: Target,
    features: ["Market Analysis", "Strategic Planning", "Competitive Intelligence", "Growth Strategy"],
    duration: "2-4 weeks",
    price: "Starting at $2,500"
  },
  {
    id: 2,
    title: "Digital Transformation",
    description: "End-to-end digital transformation services to modernize your business operations.",
    icon: Zap,
    features: ["Process Automation", "System Integration", "Digital Workflows", "Technology Stack"],
    duration: "4-8 weeks",
    price: "Starting at $5,000"
  },
  {
    id: 3,
    title: "Team Development & Training",
    description: "Professional development programs to enhance your team's skills and productivity.",
    icon: Users,
    features: ["Leadership Training", "Skills Assessment", "Team Building", "Performance Coaching"],
    duration: "1-3 months",
    price: "Starting at $1,800"
  },
  {
    id: 4,
    title: "Financial Planning & Analysis",
    description: "Professional financial planning and investment strategy development.",
    icon: TrendingUp,
    features: ["Financial Modeling", "Investment Strategy", "Risk Assessment", "Budget Planning"],
    duration: "3-6 weeks",
    price: "Starting at $3,200"
  },
  {
    id: 5,
    title: "Risk Management & Compliance",
    description: "Comprehensive risk management and regulatory compliance solutions.",
    icon: Shield,
    features: ["Risk Assessment", "Compliance Audits", "Policy Development", "Regulatory Guidance"],
    duration: "2-5 weeks",
    price: "Starting at $2,800"
  },
  {
    id: 6,
    title: "Innovation & Growth Strategy",
    description: "Innovation consulting to identify new opportunities and drive business growth.",
    icon: Lightbulb,
    features: ["Innovation Workshops", "Market Opportunities", "Product Development", "Growth Hacking"],
    duration: "3-8 weeks",
    price: "Starting at $4,500"
  }
]

export default function Services({}: Props) {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <Badge variant="outline" className="mb-4">Professional Services</Badge>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Expert Services for Business Excellence
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our comprehensive suite of professional services is designed to help your business overcome challenges, 
          seize opportunities, and achieve sustainable growth in today's competitive marketplace.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => {
          const IconComponent = service.icon
          return (
            <Card key={service.id} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {service.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-lg font-bold text-primary">{service.price}</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">
                      Get Quote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Process Section */}
      <div className="bg-muted/50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">Our Service Delivery Process</h3>
          <p className="text-muted-foreground">
            A proven methodology to ensure successful outcomes for every engagement
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h4 className="font-semibold text-foreground">Discovery</h4>
            <p className="text-sm text-muted-foreground">
              In-depth analysis of your business needs and objectives
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h4 className="font-semibold text-foreground">Strategy</h4>
            <p className="text-sm text-muted-foreground">
              Custom strategy development and implementation planning
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h4 className="font-semibold text-foreground">Implementation</h4>
            <p className="text-sm text-muted-foreground">
              Expert execution with regular progress monitoring
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-primary">4</span>
            </div>
            <h4 className="font-semibold text-foreground">Optimization</h4>
            <p className="text-sm text-muted-foreground">
              Continuous improvement and ongoing support
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div className="space-y-2">
          <div className="text-3xl font-bold text-primary">500+</div>
          <div className="text-sm text-muted-foreground">Projects Delivered</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-primary">95%</div>
          <div className="text-sm text-muted-foreground">Client Satisfaction</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-primary">10+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-primary">24/7</div>
          <div className="text-sm text-muted-foreground">Support Available</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Schedule a free consultation with our experts to discuss your specific needs and discover how our services can help you achieve your business goals.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="min-w-[200px]">
            Schedule Free Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="min-w-[200px]">
            Download Service Brochure
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <p>✓ Free 30-minute consultation • ✓ No obligation • ✓ Expert advice</p>
        </div>
      </div>
    </div>
  )
}