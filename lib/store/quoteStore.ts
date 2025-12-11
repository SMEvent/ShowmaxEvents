import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface QuoteItem {
  _id: string;
  slug: string;
  name: string;
  category: string;
  quantity: number;
  dayRate?: number;
  description?: string;
}

interface QuoteState {
  items: QuoteItem[];
  isCartOpen: boolean;
  addItem: (item: QuoteItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearItems: () => void;
  getTotalItems: () => number;
  getTotalEstimate: () => number;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useQuoteStore = create<QuoteState>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,

      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i._id === item._id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i._id === item._id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          return { items: [...state.items, item] };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i._id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i._id === id ? { ...i, quantity: Math.max(1, quantity) } : i
          ),
        })),

      clearItems: () => set({ items: [] }),

      getTotalItems: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalEstimate: () => {
        const state = get();
        return state.items.reduce((total, item) => {
          const rate = item.dayRate || 0;
          return total + rate * item.quantity;
        }, 0);
      },

      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
    }),
    {
      name: "quote-storage",
    }
  )
);

