import React, { useState } from 'react';
import { X, ArrowLeft, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { CheckoutFormData } from '../types';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ isOpen, onClose, onBack }) => {
  const { items, total } = useCart();
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would handle payment processing
    alert('Order placed successfully!');
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative min-h-screen md:flex">
        {/* Main Content */}
        <div className="w-full md:w-2/3 bg-white p-6 md:p-12">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={onBack}
                className="flex items-center text-stone-600 hover:text-stone-900"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to cart
              </button>
              <button onClick={onClose} className="text-stone-600 hover:text-stone-900">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="font-display text-2xl mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-stone-200 focus:border-stone-900 focus:ring-0"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-stone-200 focus:border-stone-900 focus:ring-0"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="font-display text-2xl mb-4">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-stone-200 focus:border-stone-900 focus:ring-0"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-stone-200 focus:border-stone-900 focus:ring-0"
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-4 p-3 border border-stone-200 focus:border-stone-900 focus:ring-0"
                />
                <input
                  type="text"
                  name="apartment"
                  placeholder="Apartment, suite, etc. (optional)"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  className="w-full mt-4 p-3 border border-stone-200 focus:border-stone-900 focus:ring-0"
                />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-stone-200 focus:border-stone-900 focus:ring-0"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-stone-200 focus:border-stone-900 focus:ring-0"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-stone-200 focus:border-stone-900 focus:ring-0"
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-stone-200 focus:border-stone-900 focus:ring-0"
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h2 className="font-display text-2xl mb-4">Payment Information</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-stone-200 focus:border-stone-900 focus:ring-0"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="cardExpiry"
                      placeholder="MM / YY"
                      value={formData.cardExpiry}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-stone-200 focus:border-stone-900 focus:ring-0"
                    />
                    <input
                      type="text"
                      name="cardCvc"
                      placeholder="CVC"
                      value={formData.cardCvc}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-stone-200 focus:border-stone-900 focus:ring-0"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-stone-950 text-white py-4 px-6 flex items-center justify-center space-x-2 hover:bg-stone-800 transition-colors duration-300"
              >
                <Lock size={20} />
                <span className="text-sm tracking-wider">COMPLETE ORDER</span>
              </button>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="hidden md:block w-1/3 bg-stone-50 p-12">
          <div className="sticky top-12">
            <h2 className="font-display text-2xl mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {items.map(item => (
                <div key={item.id} className="flex items-start space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-display text-lg">{item.name}</h3>
                    <p className="text-stone-600 text-sm">{item.description}</p>
                    {item.size && (
                      <p className="text-sm text-stone-500">Size: {item.size}</p>
                    )}
                    <p className="text-sm">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-light">${item.price * item.quantity}</p>
                </div>
              ))}
            </div>

            <div className="border-t pt-6 space-y-4">
              <div className="flex justify-between text-lg">
                <span>Subtotal</span>
                <span className="font-display">${total}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Shipping</span>
                <span className="font-display">Free</span>
              </div>
              <div className="flex justify-between text-xl font-display border-t pt-4">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;