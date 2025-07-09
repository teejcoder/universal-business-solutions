import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '../ui/badge'

type Props = {
    title?: string
    description?: string
    primaryButtonText?: string
    primaryButtonHref?: string
    secondaryButtonText?: string
    secondaryButtonHref?: string
    badge1?: string
    badge2?: string
    badge3?: string
}

const ExtendedCTA = ({
    title = "Ready to Transform Your Business?",
    description = "Schedule a free consultation with our experts to discuss your specific needs and discover how our services can help you achieve your business goals.",
    primaryButtonText = "Schedule Free Consultation",
    primaryButtonHref = "/contact",
    secondaryButtonText = "Download Service Brochure",
    secondaryButtonHref = "/products",
    badge1 = "✓ Free initial consultation",
    badge2 = "✓ No obligation",
    badge3 = "✓ Expert advice"
}: Props) => {
    return (
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 space-y-6">
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                    {title}
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    {description}
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={primaryButtonHref}>
                    <Button size="lg" className="min-w-[200px]">
                        {primaryButtonText}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
                <Link href={secondaryButtonHref}>
                    <Button variant="outline" size="lg" className="min-w-[200px]">
                        {secondaryButtonText}
                    </Button>
                </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <Badge variant="outline">
                    {badge1}
                </Badge>
                <Badge variant="outline">
                    {badge2}
                </Badge>
                <Badge variant="outline">
                    {badge3}
                </Badge>
            </div>
        </div>
    )
}

export default ExtendedCTA
