import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      <Hero />
      
      {/* Featured Collection */}
      <section id="collection" className="px-6 py-24 max-w-8xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-6">The Signature Collection</h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Discover our meticulously crafted shirts, where traditional craftsmanship meets contemporary elegance. Each piece is a testament to luxury and refinement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-stone-950 text-lg hover:text-stone-700 transition-colors duration-300"
          >
            <span>Back to Top</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Services />

      {/* Craftsmanship */}
      <section className="bg-stone-950 text-white py-24">
        <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-8">The Art of Craftsmanship</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Each shirt is meticulously crafted by our master artisans, using only the finest materials sourced from prestigious mills around the world. Our commitment to excellence is evident in every stitch, every detail, and every finish.
            </p>
            <button
              onClick={scrollToTop}
              className="border border-white/20 px-8 py-4 text-sm tracking-wider hover:bg-white hover:text-stone-950 transition-all duration-300"
            >
              DISCOVER OUR PROCESS
            </button>
          </div>
          <div className="relative h-128">
            <img
              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-sand py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-6">Join Our Private Collection</h2>
          <p className="text-stone-600 mb-8">
            Be the first to receive exclusive updates, private collection previews, and invitation-only events.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing to our newsletter!');
              (e.target as HTMLFormElement).reset();
            }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-300"
            />
            <button
              type="submit"
              className="bg-stone-950 text-white px-8 py-4 text-sm tracking-wider hover:bg-stone-800 transition-colors duration-300"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default HomePage;