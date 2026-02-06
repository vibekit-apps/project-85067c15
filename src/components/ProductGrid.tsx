import { ShoppingCart, Heart } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Rainbow Lollipops',
    price: '$12.99',
    image: '🌈🍭',
    description: 'Colorful swirl lollipops with fruity flavors',
    category: 'Lollipops'
  },
  {
    id: 2,
    name: 'Chocolate Truffles',
    price: '$24.99',
    image: '🍫✨',
    description: 'Premium dark chocolate truffles with rich ganache',
    category: 'Chocolates'
  },
  {
    id: 3,
    name: 'Gummy Bears',
    price: '$8.99',
    image: '🐻🍯',
    description: 'Soft and chewy gummy bears in assorted flavors',
    category: 'Gummies'
  },
  {
    id: 4,
    name: 'Cotton Candy',
    price: '$6.99',
    image: '☁️🎪',
    description: 'Fluffy cotton candy that melts in your mouth',
    category: 'Special'
  },
  {
    id: 5,
    name: 'Caramel Apples',
    price: '$15.99',
    image: '🍎🍯',
    description: 'Fresh apples covered in smooth caramel',
    category: 'Specialty'
  },
  {
    id: 6,
    name: 'Rock Candy',
    price: '$9.99',
    image: '💎🍬',
    description: 'Crystal rock candy in various colors',
    category: 'Crystals'
  },
  {
    id: 7,
    name: 'Chocolate Bars',
    price: '$18.99',
    image: '🍫🥜',
    description: 'Artisanal chocolate bars with nuts and fruits',
    category: 'Chocolates'
  },
  {
    id: 8,
    name: 'Candy Canes',
    price: '$7.99',
    image: '🎄🍭',
    description: 'Classic peppermint candy canes',
    category: 'Seasonal'
  }
]

export default function ProductGrid() {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Sweet
            <span className="bg-gradient-to-r from-candy-pink to-candy-purple bg-clip-text text-transparent">
              {' '}Collection
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked selection of the finest candies and treats from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 h-48 flex items-center justify-center text-6xl transform group-hover:scale-110 transition-transform duration-500">
                  {product.image}
                </div>
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-candy-pink hover:text-white">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-candy-yellow text-gray-800 rounded-full">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-candy-pink transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-2xl font-bold text-candy-pink">
                    {product.price}
                  </span>
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-candy-pink to-candy-purple text-white px-4 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Products 🍭
          </button>
        </div>
      </div>
    </section>
  )
}