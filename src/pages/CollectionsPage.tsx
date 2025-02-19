import React from 'react';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    name: 'Summer 2025',
    description: 'Light and breathable pieces for the warmer months',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    name: 'Evening Edit',
    description: 'Sophisticated designs for special occasions',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    name: 'Wedding Season',
    description: 'Elegant attire for ceremonies and celebrations',
    image: 'https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Heritage',
    description: 'Timeless pieces inspired by our archives',
    image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  }
];

const CollectionsPage: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-stone-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Collections"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/30 to-stone-950/70" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-7xl mb-8">Our Collections</h1>
            <p className="text-xl md:text-2xl mb-12 font-light tracking-wide opacity-90">
              Discover our carefully curated collections, each telling its own unique story
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="max-w-8xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {collections.map((collection) => (
            <div key={collection.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-stone-950/90 to-transparent">
                  <h2 className="font-display text-3xl text-white mb-2">{collection.name}</h2>
                  <p className="text-white/80">{collection.description}</p>
                </div>
              </div>
              
              <button className="flex items-center space-x-2 text-stone-950 text-lg group-hover:text-stone-700 transition-colors duration-300">
                <span>Explore Collection</span>
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Lookbook */}
      <section className="bg-stone-100 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl mb-6">View Our Lookbook</h2>
          <p className="text-stone-600 mb-8">
            Explore our latest collections through beautifully curated lookbooks and editorial content.
          </p>
          <button className="bg-stone-950 text-white px-12 py-4 text-sm tracking-wider hover:bg-stone-800 transition-colors duration-300">
            VIEW LOOKBOOK
          </button>
        </div>
      </section>
    </main>
  );
};

export default CollectionsPage;

export default CollectionsPage