import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAppStore = create(
  persist(
    (set) => ({
      selectedForms: [],
      selectedLibraries: [],
      previewGroupBy: 'library',

      setSelectedForms: (forms) => set({ selectedForms: forms }),
      setSelectedLibraries: (libraries) =>
        set({ selectedLibraries: libraries }),
      setPreviewGroupBy: (groupBy) => set({ previewGroupBy: groupBy }),

      toggleFormSelection: (form) =>
        set((state) => {
          const exists = state.selectedForms.includes(form)
          return {
            selectedForms: exists
              ? state.selectedForms.filter((f) => f !== form)
              : [...state.selectedForms, form],
          }
        }),

      toggleLibrarySelection: (library) =>
        set((state) => {
          const exists = state.selectedLibraries.includes(library)
          return {
            selectedLibraries: exists
              ? state.selectedLibraries.filter((l) => l !== library)
              : [...state.selectedLibraries, library],
          }
        }),
    }),
    {
      name: 'app-storage', // name of the item in the storage (must be unique)
    }
  )
)
