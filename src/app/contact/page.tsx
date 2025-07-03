import BookingForm from '@/components/bookings/booking-form'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Users,
  Calendar,
  Shield,
  ArrowRight
} from 'lucide-react'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <Badge variant="outline" className="mb-4">Get in Touch</Badge>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Ready to Transform Your Business?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We're here to help you succeed. Reach out to our team of experts for personalized solutions 
          or schedule a consultation to discuss your specific needs.
        </p>
      </div>

      {/* Contact Info Bar */}
      <div className="bg-muted/30 rounded-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 text-center md:text-left justify-center md:justify-start">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Call Us</p>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-xs text-muted-foreground">Mon-Fri 9AM-6PM</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-center md:text-left justify-center md:justify-start">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Email Us</p>
              <p className="text-sm text-muted-foreground">contact@ubs.com</p>
              <p className="text-xs text-muted-foreground">Response within 24hrs</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-center md:text-left justify-center md:justify-start">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Book Meeting</p>
              <p className="text-sm text-muted-foreground">Free consultation</p>
              <p className="text-xs text-muted-foreground">Same day availability</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form Area */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Schedule a Consultation</h3>
            <p className="text-muted-foreground mb-6">
              Fill out the form below to book a free consultation with our experts. We'll discuss your 
              business needs and how we can help you achieve your goals.
            </p>
          </div>
          
          <BookingForm/>
          
          {/* Alternative Contact Methods */}
          <div className="mt-8 p-6 bg-muted/30 rounded-lg">
            <h4 className="font-semibold text-foreground mb-4">Prefer to reach out directly?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start">
                <Phone className="w-4 h-4 mr-2" />
                Call +1 (555) 123-4567
              </Button>
              <Button variant="outline" className="justify-start">
                <Mail className="w-4 h-4 mr-2" />
                Email contact@ubs.com
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Sidebar */}
        <div className="space-y-6">
          {/* Office Location */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Our Office
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium text-foreground">Universal Business Solutions</p>
                <p className="text-sm text-muted-foreground">
                  123 Business Avenue<br />
                  Suite 456<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Located in the heart of the business district, easily accessible by public transport.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                How Can We Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground text-sm">General Inquiries</p>
                    <p className="text-xs text-muted-foreground">Questions about our services</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Book Consultation</p>
                    <p className="text-xs text-muted-foreground">Schedule a free consultation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Support</p>
                    <p className="text-xs text-muted-foreground">Technical support & assistance</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response Time */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Email</span>
                  <Badge variant="secondary">Within 24 hours</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Phone</span>
                  <Badge variant="secondary">Immediate</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Consultation</span>
                  <Badge variant="secondary">Same day</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground">
                    Emergency support available 24/7 for existing clients
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action Footer */}
      <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their operations with our expert solutions. 
            Let's discuss how we can help you achieve your goals.
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
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
          <Badge variant="outline">
            ✓ Free initial consultation
          </Badge>
          <Badge variant="outline">
            ✓ No obligation
          </Badge>
          <Badge variant="outline">
            ✓ Expert advice
          </Badge>
        </div>
      </div>
    </div>
  )
}