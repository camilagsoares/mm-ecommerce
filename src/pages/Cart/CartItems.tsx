import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '../DetailsProduct/products';

export interface CartItem {
  product: Product;
  quantity: number;
  image: string; 
  price: string;
}

interface CartContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };