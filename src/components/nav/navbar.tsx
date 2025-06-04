"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
    {
        title: 'Services',
        link: '/services'
    },
    {
        title: 'Products',
        link: '/products'
    },
    {
        title: 'Bookings',
        link: '/bookings'
    },
    {
        title: 'Admin',
        link: '/admin'
    }
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative">
            <div className="flex items-center justify-between p-4 border-b">
                <Link href="/" className="font-bold text-lg md:text-xl whitespace-nowrap">
                    <h1>UBS</h1>
                </Link>
                
                {/* Desktop navigation */}
                <ul className="hidden md:flex gap-4">
                    {links.map((e, i) => (
                        <li key={i}>
                            <Link href={e.link} className="hover:underline">
                                {e.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                
                {/* Mobile menu button */}
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="md:hidden" 
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </Button>
            </div>
            
            {/* Mobile menu */}
            <div className={cn(
                "absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out border-b z-50",
                isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 invisible"
            )}>
                <ul className="flex flex-col py-2">
                    {links.map((e, i) => (
                        <li key={i} className="py-2">
                            <Link 
                                href={e.link} 
                                className="block px-4 py-2 hover:bg-gray-100" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {e.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}