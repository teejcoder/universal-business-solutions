import React from 'react'
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion'

type Props = {}

const FAQ = ({}: Props) => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive business solutions including strategic consulting, digital marketing, financial planning, HR management, IT support, and legal advisory services. Each service is customized to meet your specific business needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. Most consulting projects take 4-12 weeks, while ongoing services like IT support or HR management are continuous. We'll provide a detailed timeline during your consultation."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and can be tailored to fit your budget and growth stage."
    },
    {
      question: "What's included in the free consultation?",
      answer: "Your free consultation includes a comprehensive business assessment, discussion of your goals and challenges, customized recommendations, and a clear roadmap with next steps. There's no obligation to proceed."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing depends on the specific services and scope of work. We offer flexible pricing models including project-based, hourly, and retainer arrangements. We'll provide a detailed quote after understanding your needs."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive ongoing support and maintenance for all our services. This includes regular check-ins, performance monitoring, updates, and 24/7 support depending on your service package."
    }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers. Here are some common questions about our services.
          </p>
        </div>

        <div className="bg-card border rounded-lg p-2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50 rounded-md text-left">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <button className="text-primary hover:text-primary/80 font-medium">
            Contact us for more information →
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ
