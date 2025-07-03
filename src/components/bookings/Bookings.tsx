import React from 'react'
import BookingForm from './booking-form'
import { Calendar, Clock, CheckCircle } from 'lucide-react'

type Props = {}

const Bookings = ({}: Props) => {
  return (
    <section className="py-16 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Book Your Consultation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Schedule a free consultation with our experts. We'll discuss your needs 
            and create a customized solution for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Benefits */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Flexible Scheduling
                  </h3>
                  <p className="text-muted-foreground">
                    Choose from available time slots that work with your schedule. 
                    We offer early morning, afternoon, and evening appointments.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Quick Response
                  </h3>
                  <p className="text-muted-foreground">
                    Get confirmation within 24 hours. Our team will reach out to 
                    confirm your appointment and prepare for your consultation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    No Commitment
                  </h3>
                  <p className="text-muted-foreground">
                    Free initial consultation with no strings attached. 
                    We'll provide honest advice and recommendations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">
                What to Expect
              </h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• 30-60 minute consultation</li>
                <li>• Discussion of your business goals</li>
                <li>• Customized recommendations</li>
                <li>• Clear next steps and pricing</li>
              </ul>
            </div>
          </div>

          {/* Right side - Booking Form */}
          <div className="bg-card border rounded-lg p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Schedule Your Meeting
              </h3>
              <p className="text-muted-foreground text-sm">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>
            <BookingForm/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bookings