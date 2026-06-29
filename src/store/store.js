import { create } from "zustand";

const useServicesStore = create((set) => ({
  data: null,
  loading: false,
  error: null,
  activeCategory: null, 
  selectedService: null,
  dropDownOpen: false,

  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/data/serviceDropdown.json");
      if (!res.ok) throw new Error("HTTP Error " + res.status);
      const json = await res.json();
      set({
        data: json,
        loading: false,
        activeCategory: json.categories[0]?.id || null,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  setCategory: (categoryId) => set({ activeCategory: categoryId }),

  selectService: (service) =>
    set({
      selectedService: service,
      dropDownOpen: false,
    }),

  goBack: () => set({ selectedService: null }),

  toggleDropdown: () =>
    set((state) => ({
      dropDownOpen: !state.dropDownOpen,
    })),
}));

export default useServicesStore;
