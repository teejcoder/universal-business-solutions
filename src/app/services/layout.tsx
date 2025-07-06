import React from 'react';

export default function ServicesLayout({children}: {
    children: React.ReactNode
})  {
    return (
        <div className="min-h-screen bg-background">
            {/* Services Header */}
            <div className="bg-card shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-6">
                        <h1 className="text-3xl font-bold text-foreground">Our Services</h1>
                        <p className="mt-2 text-muted-foreground">
                            Professional services designed to transform your business operations and drive growth
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Navigation */}
            <div className="bg-card border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex space-x-8 space-y-2 flex-wrap py-4">
                        <a
                            href="/services"
                            className="text-foreground hover:text-primary font-medium transition-colors"
                        >
                            All Services
                        </a>
                        <a
                            href="/services/consulting"
                            className="text-muted-foreground hover:text-primary font-medium transition-colors"
                        >
                            Consulting
                        </a>
                        <a
                            href="/services/digital"
                            className="text-muted-foreground hover:text-primary font-medium transition-colors"
                        >
                            Digital Solutions
                        </a>
                        <a
                            href="/services/training"
                            className="text-muted-foreground hover:text-primary font-medium transition-colors"
                        >
                            Training & Development
                        </a>
                        <a
                            href="/services/support"
                            className="text-muted-foreground hover:text-primary font-medium transition-colors"
                        >
                            Support Services
                        </a>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>

            {/* Services Footer */}
            <div className="bg-card border-t mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h3 className="font-semibold text-foreground mb-2">Free Consultation</h3>
                            <p className="text-muted-foreground text-sm">
                                Get expert advice on your business needs
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="font-semibold text-foreground mb-2">Custom Solutions</h3>
                            <p className="text-muted-foreground text-sm">
                                Tailored services for your specific requirements
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
                            <p className="text-muted-foreground text-sm">
                                Round-the-clock assistance when you need it
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-8 pt-8 border-t">
                        <p className="text-muted-foreground">
                            Have questions about our services? 
                            <a href="/contact" className="text-primary hover:text-primary/80 font-medium ml-1">
                                Contact our team
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}