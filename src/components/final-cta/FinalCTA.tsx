import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail, MessageSquare, Calendar } from 'lucide-react'

type Props = {}

const FinalCTA = ({}: Props) => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Don't let another day pass without taking action. Join hundreds of successful businesses 
            who have already transformed their operations with our expert guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (555) 123-4567
            </Button>
          </div>

          <div className="pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="font-semibold mb-1">Call Us</div>
                <div className="text-sm opacity-80">(555) 123-4567</div>
              </div>
              <div>
                <Mail className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="font-semibold mb-1">Email Us</div>
                <div className="text-sm opacity-80">info@universalbusiness.com</div>
              </div>
              <div>
                <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="font-semibold mb-1">Live Chat</div>
                <div className="text-sm opacity-80">Available 24/7</div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-sm opacity-75">
              ✓ Free consultation • ✓ No obligation • ✓ Quick response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
