import React, { useState } from 'react';
import { Heart, Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string>();
  const [showSizes, setShowSizes] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isLiked = isInWishlist(product.id);

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const handleAddToCart = () => {
    if (sizes && !selectedSize) {
      setShowSizes(true);
      return;
    }
    addToCart(product, selectedSize);
    setShowSizes(false);
  };

  const toggleWishlist = () => {
    if (isLiked) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Wishlist button */}
        <button
          onClick={toggleWishlist}
          className={`absolute top-6 right-6 p-3 backdrop-blur-md rounded-full shadow-lg transition-all duration-300 ${
            isLiked ? 'bg-stone-950 text-white' : 'bg-white/10 text-white hover:bg-white hover:text-stone-950'
          }`}
        >
          <Heart size={20} className={isLiked ? 'fill-current' : ''} />
        </button>
        
        {/* Size selector */}
        {showSizes && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-6 flex flex-col items-center justify-center">
            <h3 className="font-display text-xl mb-4">Select Size</h3>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border ${
                    selectedSize === size
                      ? 'border-stone-950 bg-stone-950 text-white'
                      : 'border-stone-200 hover:border-stone-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full bg-stone-950 text-white py-3 flex items-center justify-center space-x-2"
            >
              <span>Add to Cart</span>
              {selectedSize && <Check size={16} />}
            </button>
          </div>
        )}
        
        {/* Quick add overlay */}
        <div className="product-hover-overlay absolute bottom-0 left-0 right-0 p-6 bg-white/10 backdrop-blur-md">
          <button
            onClick={handleAddToCart}
            className="w-full bg-stone-950 text-white py-4 px-6 flex items-center justify-center space-x-2 hover:bg-stone-800 transition-colors duration-300"
          >
            <Plus size={20} />
            <span className="text-sm tracking-wider">ADD TO CART</span>
          </button>
        </div>
      </div>
      
      <div className="mt-6 space-y-1 text-center">
        <h3 className="font-display text-xl">{product.name}</h3>
        <p className="text-stone-600 text-sm tracking-wide">{product.description}</p>
        <p className="text-lg font-light mt-2">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;