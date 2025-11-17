import { create } from "zustand";
import { persist } from "zustand/middleware";

interface EquipmentItem {
  slug: string;
  name: string;
  category: string;
  quantity: number;
  dayRate?: number;
}

interface InquiryState {
  items: EquipmentItem[];
  addItem: (item: EquipmentItem) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearItems: () => void;
  getTotalItems: () => number;
}

export const useInquiryStore = create<InquiryState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.slug === item.slug);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.slug === item.slug
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          return { items: [...state.items, item] };
        }),

      removeItem: (slug) =>
        set((state) => ({
          items: state.items.filter((i) => i.slug !== slug),
        })),

      updateQuantity: (slug, quantity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.slug === slug ? { ...i, quantity } : i
          ),
        })),

      clearItems: () => set({ items: [] }),

      getTotalItems: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: "inquiry-storage",
    }
  )
);

