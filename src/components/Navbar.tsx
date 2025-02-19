import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import Cart from './Cart';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { itemCount } = useCart();
  const { items: wishlistItems } = useWishlist();

  const navigationItems = [
    {
      name: 'New Arrivals',
      submenu: ['This Week\'s Arrivals', 'Previous Releases', 'Coming Soon']
    },
    {
      name: 'Men',
      submenu: ['Formal Shirts', 'Casual Shirts', 'Evening Wear', 'Accessories']
    },
    {
      name: 'Women',
      submenu: ['Blouses', 'Shirts', 'Evening Wear', 'Accessories']
    },
    {
      name: 'Children',
      submenu: ['Boys', 'Girls', 'Special Occasions', 'School Collection']
    },
    {
      name: 'Collections',
      submenu: ['Summer 2025', 'Evening Edit', 'Wedding Season', 'Heritage']
    },
    {
      name: 'Bespoke',
      submenu: ['Book Appointment', 'Our Process', 'Made to Measure']
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        {/* Announcement Bar */}
        <div className="bg-stone-950 text-white text-sm py-2 text-center">
          <p>Free Shipping on Orders Over $500 | Book a Virtual Styling Session</p>
        </div>

        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className={`font-display text-3xl transition-colors duration-300 ${
                isScrolled ? 'text-stone-950' : 'text-white'
              }`}
            >
              MAISON
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="group relative">
                  <button
                    className={`nav-link text-sm tracking-wider transition-colors duration-300 ${
                      isScrolled ? 'text-stone-950' : 'text-white'
                    }`}
                  >
                    {item.name.toUpperCase()}
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.submenu.map((subitem) => (
                      <button
                        key={subitem}
                        className="block w-full text-left px-4 py-2 text-sm text-stone-800 hover:bg-stone-50"
                        onClick={() => scrollToSection('collection')}
                      >
                        {subitem}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-stone-950' : 'text-white'
                }`}
              >
                <Search size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('wishlist')}
                className={`relative transition-colors duration-300 ${
                  isScrolled ? 'text-stone-950' : 'text-white'
                }`}
              >
                <Heart size={20} />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-stone-950 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative transition-colors duration-300 ${
                  isScrolled ? 'text-stone-950' : 'text-white'
                }`}
              >
                <ShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-stone-950 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className={`md:hidden transition-colors duration-300 ${
                isScrolled ? 'text-stone-950' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white">
            <div className="px-6 py-8 space-y-6">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <button className="text-stone-950 text-sm tracking-wider">
                    {item.name.toUpperCase()}
                  </button>
                  <div className="pl-4 space-y-2">
                    {item.submenu.map((subitem) => (
                      <button
                        key={subitem}
                        onClick={() => scrollToSection('collection')}
                        className="block text-stone-600 text-sm"
                      >
                        {subitem}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search for products..."
                  className="w-full p-4 border border-stone-200 focus:outline-none focus:border-stone-900"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-400" />
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-stone-600 mb-2">Popular Searches:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Oxford Shirt', 'Evening Dress', 'Summer Collection', 'Wedding Edit'].map((term) => (
                    <button
                      key={term}
                      className="px-3 py-1 text-sm bg-stone-100 hover:bg-stone-200 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;