import React from 'react'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MessageSquare, Calendar } from 'lucide-react'

type Props = {}

const FinalCTABanner = ({}: Props) => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Maximize Your Conversions?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Stop leaving money on the table. Join thousands of businesses who have doubled or tripled 
            their conversion rates with ConvertOrDie's proven optimization strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Calendar className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Phone className="mr-2 h-5 w-5" />
              Get Free Audit
            </Button>
          </div>

          <div className="pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="font-semibold mb-1">Call Us</div>
                <div className="text-sm opacity-80">(555) CRO-WINS</div>
              </div>
              <div>
                <Mail className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="font-semibold mb-1">Email Us</div>
                <div className="text-sm opacity-80">optimize@convertordie.com</div>
              </div>
              <div>
                <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="font-semibold mb-1">Live Demo</div>
                <div className="text-sm opacity-80">See Results Live</div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-sm opacity-75">
              ✓ Free conversion audit • ✓ No obligation • ✓ Results within 30 days
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTABanner
