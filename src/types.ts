export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  sizes?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  size?: string;
}

export interface WishlistItem extends Product {
  addedAt: Date;
}

export interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}