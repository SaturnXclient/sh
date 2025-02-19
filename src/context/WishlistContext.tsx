import React, { createContext, useContext, useState, useCallback } from 'react';
import { WishlistItem, Product } from '../types';

interface WishlistContextType {
  items: WishlistItem[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<WishlistItem[]>([]);

  const addToWishlist = useCallback((product: Product) => {
    setItems(currentItems => {
      if (currentItems.some(item => item.id === product.id)) {
        return currentItems;
      }
      return [...currentItems, { ...product, addedAt: new Date() }];
    });
  }, []);

  const removeFromWishlist = useCallback((productId: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== productId));
  }, []);

  const isInWishlist = useCallback((productId: number) => {
    return items.some(item => item.id === productId);
  }, [items]);

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};