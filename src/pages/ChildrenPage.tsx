import React from 'react';
import { ArrowRight, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const categories = ['Boys', 'Girls', 'Special Occasions', 'School Collection'];
const filters = {
  size: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y', '12-13Y'],
  color: ['White', 'Blue', 'Pink', 'Navy', 'Stripes'],
  collection: ['School', 'Casual', 'Party', 'Special Occasion'],
  price: ['Under $200', '$200-$300', '$300-$400', 'Over $400']
};

const childrenProducts = [
  {
    id: 301,
    name: 'The School Shirt',
    description: 'Non-iron cotton uniform shirt',
    price: 195,
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 302,
    name: 'The Party Shirt',
    description: 'Special occasion cotton shirt',
    price: 245,
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 303,
    name: 'The Weekend Shirt',
    description: 'Casual cotton oxford',
    price: 165,
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  // Add more products as needed
];

const ChildrenPage: React.FC = () => {
  const [showFilters, setShowFilters] = React.useState(false);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-stone-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1476234251651-f353703a034d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="Children's Collection"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/30 to-stone-950/70" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-7xl mb-8">Children's Collection</h1>
            <p className="text-xl md:text-2xl mb-12 font-light tracking-wide opacity-90">
              Quality and comfort for the little ones, from everyday essentials to special occasions
            </p>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-4 text-lg tracking-wider hover:bg-white hover:text-stone-950 transition-all duration-300">
              EXPLORE COLLECTION
            </button>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="bg-white py-12">
        <div className="max-w-8xl mx-auto px-6">
          <div className="flex overflow-x-auto space-x-6 pb-4">
            {categories.map((category) => (
              <button
                key={category}
                className="flex-none px-6 py-3 bg-stone-100 hover:bg-stone-200 transition-colors rounded-full text-stone-800"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-8xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-display text-3xl">All Products</h2>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 text-stone-600 hover:text-stone-900"
          >
            <Filter size={20} />
            <span>Filters</span>
          </button>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="col-span-3 space-y-8">
              {Object.entries(filters).map(([category, options]) => (
                <div key={category}>
                  <h3 className="text-lg font-medium mb-4 capitalize">{category}</h3>
                  <div className="space-y-2">
                    {options.map((option) => (
                      <label key={option} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-stone-300" />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Products */}
          <div className={`${showFilters ? 'col-span-9' : 'col-span-12'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
            {childrenProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="inline-flex items-center space-x-2 text-stone-950 text-lg hover:text-stone-700">
            <span>Load More</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Size Guide */}
      <section className="bg-stone-100 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl mb-6">Size Guide</h2>
          <p className="text-stone-600 mb-8">
            Find the perfect fit for your child with our comprehensive size guide and measurement tips.
          </p>
          <button className="bg-stone-950 text-white px-12 py-4 text-sm tracking-wider hover:bg-stone-800 transition-colors duration-300">
            VIEW SIZE GUIDE
          </button>
        </div>
      </section>
    </main>
  );
};

export default ChildrenPage;