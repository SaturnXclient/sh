import React, { useState } from 'react';
import { X, Minus, Plus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Checkout from './Checkout';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity, total, itemCount } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isOpen) return null;

  if (showCheckout) {
    return (
      <Checkout
        isOpen={showCheckout}
        onClose={() => {
          setShowCheckout(false);
          onClose();
        }}
        onBack={() => setShowCheckout(false)}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-500 ease-in-out">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-display text-2xl">Shopping Bag ({itemCount})</h2>
            <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-6">
            {items.map(item => (
              <div key={item.id} className="flex items-start space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-32 object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-display text-lg">{item.name}</h3>
                  <p className="text-stone-600 text-sm">{item.description}</p>
                  {item.size && (
                    <p className="text-sm text-stone-500 mt-1">Size: {item.size}</p>
                  )}
                  <div className="mt-2 flex items-center space-x-4">
                    <div className="flex items-center border border-stone-200">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="p-2 hover:bg-stone-100"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-stone-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-stone-500 hover:text-stone-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="font-light">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between text-lg">
              <span>Subtotal</span>
              <span className="font-display">${total}</span>
            </div>
            <p className="text-stone-600 text-sm">
              Shipping and taxes calculated at checkout
            </p>
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full bg-stone-950 text-white py-4 px-6 flex items-center justify-center space-x-2 hover:bg-stone-800 transition-colors duration-300"
            >
              <span className="text-sm tracking-wider">PROCEED TO CHECKOUT</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;