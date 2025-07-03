import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Props = {}

// Mock product data
const products = [
  {
    id: 1,
    name: "Business Consulting",
    description: "Strategic business consulting to help your company grow and optimize operations.",
    price: "$2,500",
    category: "Consulting",
    featured: true,
    image: "/api/placeholder/300/200"
  },
  {
    id: 2,
    name: "Digital Marketing Package",
    description: "Comprehensive digital marketing solutions including SEO, social media, and content marketing.",
    price: "$1,800",
    category: "Marketing",
    featured: false,
    image: "/api/placeholder/300/200"
  },
  {
    id: 3,
    name: "Financial Planning Service",
    description: "Professional financial planning and investment strategy development.",
    price: "$3,200",
    category: "Finance",
    featured: true,
    image: "/api/placeholder/300/200"
  },
  {
    id: 4,
    name: "HR Management System",
    description: "Complete HR management solution with payroll, benefits, and employee tracking.",
    price: "$4,500",
    category: "HR",
    featured: false,
    image: "/api/placeholder/300/200"
  },
  {
    id: 5,
    name: "IT Support Package",
    description: "24/7 IT support and maintenance services for your business infrastructure.",
    price: "$1,200",
    category: "Technology",
    featured: true,
    image: "/api/placeholder/300/200"
  },
  {
    id: 6,
    name: "Legal Advisory Service",
    description: "Professional legal advisory services for business compliance and contracts.",
    price: "$2,800",
    category: "Legal",
    featured: false,
    image: "/api/placeholder/300/200"
  }
]

export default function Products({}: Props) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <Badge variant="outline" className="mb-4">Products & Packages</Badge>
        <h2 className="text-2xl font-bold text-foreground">Featured Products & Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our comprehensive range of business solutions designed to help your company thrive in today's competitive market.
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-2 justify-center">
        {products.map((product) => (
          <Button variant="outline" size="sm" key={product.id}>{product.category}</Button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Product Image</span>
              </div>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                {product.featured && (
                  <Badge variant="secondary" className="ml-2">Featured</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
              <div className="flex items-center justify-between">
                <Badge variant="outline">{product.category}</Badge>
                <span className="text-lg font-bold text-primary">{product.price}</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="flex gap-2 w-full">
                <Button className="flex-1">Learn More</Button>
                <Button variant="outline" className="flex-1">Get Quote</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4 pt-8">
        <h3 className="text-xl font-semibold text-foreground">Don't see what you're looking for?</h3>
        <p className="text-muted-foreground">
          We offer custom solutions tailored to your specific business needs.
        </p>
        <Button size="lg" className="mt-4">
          Contact Us for Custom Solutions
        </Button>
      </div>
    </div>
  )
}