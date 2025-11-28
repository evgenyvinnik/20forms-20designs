import { useMemo, Suspense } from 'react'
import { useAppStore } from './store'

import Layout from './components/Layout'
import MuiPreview from './components/MuiPreview'
import ReactBootstrapPreview from './components/ReactBootstrapPreview'
import ReactNoCssPreview from './components/ReactNoCssPreview'
import SelectionColumn from './components/SelectionColumn'
import FormGroupedPreviews from './components/FormGroupedPreviews'

// Inlined styles from styles.js
const styles = {
  selectorRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    columnGap: '64px',
    rowGap: '24px',
    alignItems: 'start',
  },
  themeToggleRow: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    marginTop: '24px',
    marginBottom: '4px',
  },
  previewToggleRow: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    marginTop: '8px',
    marginBottom: '-12px',
  },
  previewToggleLabel: {
    fontWeight: 600,
  },
  radioRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.95rem',
  },
}

import RadixUiPreview from './components/RadixUiPreview'
import EvergreenPreview from './components/EvergreenPreview'
import GravityUiPreview from './components/GravityUiPreview'
import BlueprintPreview from './components/BlueprintPreview'

import {
  librariesByName,
  previewImplementations,
} from './constants/componentLibraries.js'

const plannedForms = [
  'User registration / sign up',
  'User login / sign in',
  'Password reset / forgot password request',
  'Two-factor authentication code entry',
  'Contact or support inquiry',
  'Newsletter or marketing subscription',
  'Profile information update',
  'Account security and password change',
  'Billing information capture',
  'Shipping address capture',
  'Checkout with payment details',
  'Order tracking lookup',
  'Appointment or booking request',
  'Event registration / RSVP',
  'Job application submission',
  'Customer feedback or satisfaction survey',
  'Support ticket submission',
  'Multi-step onboarding wizard',
  'Advanced search with filters',
  'Privacy, consent, and communication preferences',
]

function App() {
  const selectedForms = useAppStore((state) => state.selectedForms)
  const selectedLibraries = useAppStore((state) => state.selectedLibraries)
  const previewGroupBy = useAppStore((state) => state.previewGroupBy)
  const themeMode = useAppStore((state) => state.themeMode)
  const setSelectedForms = useAppStore((state) => state.setSelectedForms)
  const setSelectedLibraries = useAppStore(
    (state) => state.setSelectedLibraries
  )
  const setPreviewGroupBy = useAppStore((state) => state.setPreviewGroupBy)
  const setThemeMode = useAppStore((state) => state.setThemeMode)
  const toggleFormSelection = useAppStore((state) => state.toggleFormSelection)
  const toggleLibrarySelection = useAppStore(
    (state) => state.toggleLibrarySelection
  )

  const formItems = useMemo(
    () => plannedForms.map((form) => ({ value: form, label: form })),
    []
  )

  const componentLibraryItems = useMemo(
    () =>
      Object.values(librariesByName).map((library) => ({
        value: library.name,
        label: (
          <span>
            {library.name} (
            <a
              href={library.website}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              website
            </a>
            {' / '}
            <a
              href={library.repo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              repo
            </a>
            )
          </span>
        ),
        disabled: !library.implemented,
      })),
    []
  )

  const selectedFormsByLibrary = useMemo(
    () =>
      Object.entries(librariesByName).reduce((acc, [name, library]) => {
        const components = library.implementation?.components
        acc[name] = components
          ? selectedForms.filter((form) => components[form])
          : []
        return acc
      }, {}),
    [selectedForms]
  )

  const isLibrarySelected = (libraryName) =>
    selectedLibraries.includes(libraryName)

  return (
    <Layout>
      <div style={styles.selectorRow}>
        <SelectionColumn
          title="Forms"
          items={formItems}
          selectedItems={selectedForms}
          onToggleItem={(form) => toggleFormSelection(form)}
          onSelectAll={() =>
            setSelectedForms(formItems.map((item) => item.value))
          }
          onSelectNone={() => setSelectedForms([])}
        />
        <SelectionColumn
          title="Component libraries"
          items={componentLibraryItems}
          selectedItems={selectedLibraries}
          onToggleItem={(library) => toggleLibrarySelection(library)}
          onSelectAll={() =>
            setSelectedLibraries(
              componentLibraryItems
                .filter((item) => !item.disabled)
                .map((item) => item.value)
            )
          }
          onSelectNone={() => setSelectedLibraries([])}
          twoColumnLayout
        />
      </div>

      <div style={styles.themeToggleRow}>
        <span style={styles.previewToggleLabel}>Theme:</span>
        <label style={styles.radioRow}>
          <input
            type="radio"
            name="preview-theme"
            value="light"
            checked={themeMode === 'light'}
            onChange={() => setThemeMode('light')}
          />
          <span>Light theme</span>
        </label>
        <label style={styles.radioRow}>
          <input
            type="radio"
            name="preview-theme"
            value="dark"
            checked={themeMode === 'dark'}
            onChange={() => setThemeMode('dark')}
          />
          <span>Dark theme</span>
        </label>
      </div>

      <div style={styles.previewToggleRow}>
        <span style={styles.previewToggleLabel}>Group previews by:</span>
        <label style={styles.radioRow}>
          <input
            type="radio"
            name="preview-group-by"
            value="library"
            checked={previewGroupBy === 'library'}
            onChange={() => setPreviewGroupBy('library')}
          />
          <span>Design system</span>
        </label>
        <label style={styles.radioRow}>
          <input
            type="radio"
            name="preview-group-by"
            value="form"
            checked={previewGroupBy === 'form'}
            onChange={() => setPreviewGroupBy('form')}
          />
          <span>Form name</span>
        </label>
      </div>

      {previewGroupBy === 'library' ? (
        <Suspense fallback={<div>Loading...</div>}>
          <MuiPreview
            selectedForms={selectedFormsByLibrary['MUI']}
            isLibrarySelected={isLibrarySelected('MUI')}
            formComponents={librariesByName['MUI']?.implementation?.components}
            themeMode={themeMode}
            libraryName={librariesByName['MUI']?.name}
          />

          <ReactBootstrapPreview
            selectedForms={selectedFormsByLibrary['React Bootstrap']}
            isLibrarySelected={isLibrarySelected('React Bootstrap')}
            formComponents={
              librariesByName['React Bootstrap']?.implementation?.components
            }
            themeMode={themeMode}
            libraryName={librariesByName['React Bootstrap']?.name}
          />
          <EvergreenPreview
            selectedForms={selectedFormsByLibrary['Evergreen']}
            isLibrarySelected={isLibrarySelected('Evergreen')}
            formComponents={
              librariesByName['Evergreen']?.implementation?.components
            }
            libraryName={librariesByName['Evergreen']?.name}
          />
          <BlueprintPreview
            selectedForms={selectedFormsByLibrary['Blueprint']}
            isLibrarySelected={isLibrarySelected('Blueprint')}
            formComponents={
              librariesByName['Blueprint']?.implementation?.components
            }
            themeMode={themeMode}
            libraryName={librariesByName['Blueprint']?.name}
          />

          <ReactNoCssPreview
            selectedForms={selectedFormsByLibrary['React + No CSS']}
            isLibrarySelected={isLibrarySelected('React + No CSS')}
            formComponents={
              librariesByName['React + No CSS']?.implementation?.components
            }
            libraryName={librariesByName['React + No CSS']?.name}
            themeMode={themeMode}
          />

          <RadixUiPreview
            selectedForms={selectedFormsByLibrary['Radix UI']}
            isLibrarySelected={isLibrarySelected('Radix UI')}
            formComponents={
              librariesByName['Radix UI']?.implementation?.components
            }
            themeMode={themeMode}
            libraryName={librariesByName['Radix UI']?.name}
          />

          <GravityUiPreview
            selectedForms={selectedFormsByLibrary['Gravity UI']}
            isLibrarySelected={isLibrarySelected('Gravity UI')}
            formComponents={
              librariesByName['Gravity UI']?.implementation?.components
            }
            themeMode={themeMode}
            libraryName={librariesByName['Gravity UI']?.name}
          />
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <FormGroupedPreviews
            selectedForms={selectedForms}
            selectedLibraries={selectedLibraries}
            implementations={previewImplementations}
            themeMode={themeMode}
          />
        </Suspense>
      )}
    </Layout>
  )
}

export default App
