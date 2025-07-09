import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Props = {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

const ConversionCTA = ({
  title = "Ready to Maximize Your Conversions?",
  description = "Start your free trial today and see how ConvertOrDie can transform your website into a conversion machine.",
  primaryButtonText = "Start Free Trial",
  primaryButtonHref = "/contact",
  secondaryButtonText = "View All Tools",
  secondaryButtonHref = "/products"
}: Props) => {
  return (
    <div className='text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8'>
      <h3 className='text-2xl font-bold text-foreground mb-4'>
        {title}
      </h3>
      <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
        {description}
      </p>
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <Link href={primaryButtonHref}>
          <Button size="lg" className="min-w-[200px]">
            {primaryButtonText}
          </Button>
        </Link>
        <Link href={secondaryButtonHref}>
          <Button variant="outline" size="lg" className="min-w-[200px]">
            {secondaryButtonText}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ConversionCTA
