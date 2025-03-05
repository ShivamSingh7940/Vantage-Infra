"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Proper Alignment */}
          <Link href="/" className="flex items-center">
  <img
    src="https://res.cloudinary.com/dtttjumdo/image/upload/v1741079698/vantage_jpg-01_armvqq.jpg"
    alt="Vantage Infra Projects"
    className="w-full h-24 max-w-[180px] object-contain rounded-md p-2 shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
  />
</Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">
              About Us
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Properties
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 hover:text-primary" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary font-medium transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary font-medium transition-colors"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-primary font-medium transition-colors"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary font-medium transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-medium transition-colors inline-block"
                onClick={toggleMenu}
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
