import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

interface CartItem {
  productId: number;
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ productId: number, product: Product }>) => {
      const { productId, product } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.productId === productId);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity++;
      } else {
        state.items.push({ productId, product, quantity: 1 });
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
