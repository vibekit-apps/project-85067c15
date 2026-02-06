'use client'

import { useState } from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-candy-pink to-candy-purple rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🍭</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-candy-pink to-candy-purple bg-clip-text text-transparent">
              Sweet Treats
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-candy-pink transition-colors">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-candy-pink transition-colors">
              Products
            </a>
            <a href="#contact" className="text-gray-700 hover:text-candy-pink transition-colors">
              Contact
            </a>
            <button className="relative p-2 text-gray-700 hover:text-candy-pink transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-candy-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-candy-pink transition-colors">
                Home
              </a>
              <a href="#products" className="text-gray-700 hover:text-candy-pink transition-colors">
                Products
              </a>
              <a href="#contact" className="text-gray-700 hover:text-candy-pink transition-colors">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}