import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-20">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-candy-yellow fill-current" />
              ))}
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Welcome to
            <span className="block bg-gradient-to-r from-candy-pink via-candy-purple to-candy-blue bg-clip-text text-transparent">
              Sweet Treats
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the finest selection of premium candies, chocolates, and sweet treats.
            Made with love and the highest quality ingredients to bring joy to every bite.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary">
              Shop Now 🍬
            </button>
            <button className="px-8 py-4 border-2 border-candy-pink text-candy-pink rounded-full font-semibold text-lg hover:bg-candy-pink hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Hero Image/Animation Area */}
        <div className="mt-16 relative">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { emoji: '🍭', color: 'bg-candy-pink' },
              { emoji: '🍫', color: 'bg-candy-purple' },
              { emoji: '🧁', color: 'bg-candy-blue' },
              { emoji: '🍬', color: 'bg-candy-yellow' },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.color} rounded-3xl p-8 text-6xl text-center transform hover:rotate-12 transition-transform duration-500 shadow-lg hover:shadow-2xl`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: 'bounce 2s infinite'
                }}
              >
                {item.emoji}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}