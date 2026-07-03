import { create } from 'zustand'
import { LIBRARIES, FORMS, LIBRARY_NAME_TO_ID, FORM_NAME_TO_ID } from './config'

export type ThemeMode = 'light' | 'dark'
export type GroupBy = 'library' | 'form'

interface AppState {
  // State
  themeMode: ThemeMode
  groupBy: GroupBy
  selectedForms: string[]
  selectedLibraries: string[]

  // Actions
  setThemeMode: (theme: ThemeMode) => void
  setGroupBy: (groupBy: GroupBy) => void
  toggleFormSelection: (form: string) => void
  selectAllForms: () => void
  selectNoForms: () => void
  toggleLibrarySelection: (library: string) => void
  selectAllLibraries: () => void
  selectNoLibraries: () => void
}

const STORAGE_KEY = 'forms-comparison-storage'

function getInitialState() {
  const defaultForms = FORMS.slice(0, 3)
  const defaultLibs = LIBRARIES.filter((lib) => lib.implemented)
    .slice(0, 3)
    .map((lib) => lib.name)

  let themeMode: ThemeMode = 'light'
  let groupBy: GroupBy = 'library'
  let selectedForms = defaultForms
  let selectedLibraries = defaultLibs

  if (typeof window !== 'undefined') {
    // 1. Restore from localStorage if present
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed.state) {
          if (parsed.state.themeMode) themeMode = parsed.state.themeMode
          if (parsed.state.groupBy) groupBy = parsed.state.groupBy
          if (Array.isArray(parsed.state.selectedForms))
            selectedForms = parsed.state.selectedForms
          if (Array.isArray(parsed.state.selectedLibraries))
            selectedLibraries = parsed.state.selectedLibraries
        }
      }
    } catch {
      // Ignore storage errors
    }

    // 2. URL search parameters take precedence over localStorage
    const params = new URLSearchParams(window.location.search)

    const themeParam = params.get('theme')
    if (themeParam === 'dark' || themeParam === 'light') {
      themeMode = themeParam as ThemeMode
    }

    const groupParam = params.get('groupBy')
    if (groupParam === 'library' || groupParam === 'form') {
      groupBy = groupParam as GroupBy
    }

    const formsParam = params.get('forms') || params.get('form')
    if (formsParam) {
      const parsedForms = formsParam
        .split(',')
        .map((f) => {
          const match = FORMS.find(
            (formName) =>
              formName.toLowerCase() === f.trim().toLowerCase() ||
              FORM_NAME_TO_ID[formName] === f.trim().toLowerCase()
          )
          return match
        })
        .filter((f): f is string => Boolean(f))

      if (parsedForms.length > 0) {
        selectedForms = parsedForms
      }
    }

    const libsParam = params.get('libraries') || params.get('library')
    if (libsParam) {
      const parsedLibs = libsParam
        .split(',')
        .map((l) => {
          const match = LIBRARIES.find(
            (lib) =>
              lib.implemented &&
              (lib.name.toLowerCase() === l.trim().toLowerCase() ||
                LIBRARY_NAME_TO_ID[lib.name] === l.trim().toLowerCase() ||
                lib.directory.toLowerCase() === l.trim().toLowerCase())
          )
          return match?.name
        })
        .filter((l): l is string => Boolean(l))

      if (parsedLibs.length > 0) {
        selectedLibraries = parsedLibs
      }
    }
  }

  return { themeMode, groupBy, selectedForms, selectedLibraries }
}

const saveState = (updatedState: Partial<AppState>) => {
  if (typeof window === 'undefined') return
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    const existing = saved ? JSON.parse(saved) : { state: {} }
    const next = {
      ...existing,
      state: {
        ...existing.state,
        ...updatedState,
      },
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // Ignore storage write errors
  }
}

const initialState = getInitialState()

export const useAppStore = create<AppState>((set) => ({
  ...initialState,

  setThemeMode: (themeMode) => {
    set({ themeMode })
    saveState({ themeMode })
  },

  setGroupBy: (groupBy) => {
    set({ groupBy })
    saveState({ groupBy })
  },

  toggleFormSelection: (form) =>
    set((state) => {
      const selectedForms = state.selectedForms.includes(form)
        ? state.selectedForms.filter((f) => f !== form)
        : [...state.selectedForms, form]
      saveState({ selectedForms })
      return { selectedForms }
    }),

  selectAllForms: () => {
    const selectedForms = [...FORMS]
    set({ selectedForms })
    saveState({ selectedForms })
  },

  selectNoForms: () => {
    const selectedForms: string[] = []
    set({ selectedForms })
    saveState({ selectedForms })
  },

  toggleLibrarySelection: (library) =>
    set((state) => {
      const selectedLibraries = state.selectedLibraries.includes(library)
        ? state.selectedLibraries.filter((l) => l !== library)
        : [...state.selectedLibraries, library]
      saveState({ selectedLibraries })
      return { selectedLibraries }
    }),

  selectAllLibraries: () => {
    const selectedLibraries = LIBRARIES.filter((lib) => lib.implemented).map(
      (lib) => lib.name
    )
    set({ selectedLibraries })
    saveState({ selectedLibraries })
  },

  selectNoLibraries: () => {
    const selectedLibraries: string[] = []
    set({ selectedLibraries })
    saveState({ selectedLibraries })
  },
}))
