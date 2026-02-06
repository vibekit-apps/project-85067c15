import { Heart, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-candy-pink to-candy-purple rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🍭</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-candy-pink to-candy-purple bg-clip-text text-transparent">
                Sweet Treats
              </h3>
            </div>
            <p className="text-gray-400">
              Bringing sweetness to life with premium candies and treats made with love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-candy-pink transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-candy-pink transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-candy-pink transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Chocolates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gummies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lollipops</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Specialty</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sweet Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe for sweet deals and new arrivals!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg border border-gray-700 focus:outline-none focus:border-candy-pink"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-candy-pink to-candy-purple text-white rounded-r-lg hover:opacity-90 transition-opacity">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-candy-pink fill-current" />
              <span>by Sweet Treats Team</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Sweet Treats. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}