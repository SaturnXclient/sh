import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToCollection = () => {
    const collectionSection = document.querySelector('#collection');
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen bg-stone-950">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury Shirts"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/30 to-stone-950/70" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-8 animate-fade-in">
            The Art of Refinement
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light tracking-wide animate-slide-up opacity-90">
            Discover our meticulously crafted collection of luxury shirts, where timeless elegance meets contemporary sophistication
          </p>
          <button
            onClick={scrollToCollection}
            className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-4 text-lg tracking-wider hover:bg-white hover:text-stone-950 transition-all duration-300"
          >
            EXPLORE COLLECTION
          </button>
        </div>
      </div>
      
      <button
        onClick={scrollToCollection}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/70 hero-scroll-indicator"
      >
        <ChevronDown size={32} />
      </button>
    </div>
  );
};

export default Hero;