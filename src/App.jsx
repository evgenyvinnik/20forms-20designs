import { useMemo, Suspense } from 'react'
import { useAppStore } from './store'

import Layout from './components/Layout'
import MuiPreview from './components/MuiPreview'
import ReactNoCssPreview from './components/ReactNoCssPreview'
import SelectionColumn from './components/SelectionColumn'
import FormGroupedPreviews from './components/FormGroupedPreviews'
import styles from './styles'

import { reactNoCssFormComponents } from './component-libraries/react-no-css/lazy.js'
import { muiFormComponents } from './component-libraries/mui/lazy.js'
import { radixUiFormComponents } from './component-libraries/radix-ui/lazy.js'
import { daisyUiFormComponents } from './component-libraries/daisyui/lazy.js'
import { shadcnUiFormComponents } from './component-libraries/shadcn-ui/lazy.js'
import { evergreenFormComponents } from './component-libraries/evergreen/lazy.js'
import { gravityUiFormComponents } from './component-libraries/gravity-ui/lazy.js'
import RadixUiPreview from './components/RadixUiPreview'
import DaisyUiPreview from './components/DaisyUiPreview'
import ShadcnUiPreview from './components/ShadcnUiPreview'
import EvergreenPreview from './components/EvergreenPreview'
import GravityUiPreview from './components/GravityUiPreview'
import { componentLibraries } from './constants/componentLibraries.js'

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
  const setSelectedForms = useAppStore((state) => state.setSelectedForms)
  const setSelectedLibraries = useAppStore(
    (state) => state.setSelectedLibraries
  )
  const setPreviewGroupBy = useAppStore((state) => state.setPreviewGroupBy)
  const toggleFormSelection = useAppStore((state) => state.toggleFormSelection)
  const toggleLibrarySelection = useAppStore(
    (state) => state.toggleLibrarySelection
  )

  const previewImplementations = useMemo(
    () => ({
      MUI: {
        title: 'MUI previews',
        description: 'MUI form implementations rendered when MUI is selected.',
        components: muiFormComponents,
      },
      Evergreen: {
        title: 'Evergreen previews',
        description:
          'Evergreen UI form implementations rendered when Evergreen is selected.',
        components: evergreenFormComponents,
      },
      'React + No CSS': {
        title: 'React + No CSS previews',
        description:
          'Plain HTML forms rendered when React + No CSS is selected.',
        components: reactNoCssFormComponents,
      },
      'Radix UI': {
        title: 'Radix UI previews',
        description:
          'Radix UI form implementations rendered when Radix UI is selected.',
        components: radixUiFormComponents,
      },
      daisyUI: {
        title: 'DaisyUI previews',
        description:
          'DaisyUI form implementations rendered when DaisyUI is selected.',
        components: daisyUiFormComponents,
      },
      'shadcn/ui': {
        title: 'shadcn/ui previews',
        description:
          'shadcn/ui form implementations rendered when shadcn/ui is selected.',
        components: shadcnUiFormComponents,
      },
      'Gravity UI': {
        title: 'Gravity UI previews',
        description:
          'Gravity UI form implementations rendered when Gravity UI is selected.',
        components: gravityUiFormComponents,
      },
    }),
    []
  )

  const formItems = useMemo(
    () => plannedForms.map((form) => ({ value: form, label: form })),
    []
  )

  const componentLibraryItems = useMemo(
    () =>
      componentLibraries.map((library) => ({
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

  const selectedReactNoCssForms = useMemo(
    () => selectedForms.filter((form) => reactNoCssFormComponents[form]),
    [selectedForms]
  )

  const reactNoCssSelected = selectedLibraries.includes('React + No CSS')

  const selectedMuiForms = useMemo(
    () => selectedForms.filter((form) => muiFormComponents[form]),
    [selectedForms]
  )

  const muiSelected = selectedLibraries.includes('MUI')

  const selectedRadixUiForms = useMemo(
    () => selectedForms.filter((form) => radixUiFormComponents[form]),
    [selectedForms]
  )

  const radixUiSelected = selectedLibraries.includes('Radix UI')

  const selectedDaisyUiForms = useMemo(
    () => selectedForms.filter((form) => daisyUiFormComponents[form]),
    [selectedForms]
  )

  const daisyUiSelected = selectedLibraries.includes('daisyUI')

  const selectedShadcnUiForms = useMemo(
    () => selectedForms.filter((form) => shadcnUiFormComponents[form]),
    [selectedForms]
  )

  const shadcnUiSelected = selectedLibraries.includes('shadcn/ui')

  const selectedEvergreenForms = useMemo(
    () => selectedForms.filter((form) => evergreenFormComponents[form]),
    [selectedForms]
  )

  const evergreenSelected = selectedLibraries.includes('Evergreen')

  const selectedGravityUiForms = useMemo(
    () => selectedForms.filter((form) => gravityUiFormComponents[form]),
    [selectedForms]
  )

  const gravityUiSelected = selectedLibraries.includes('Gravity UI')

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
            selectedForms={selectedMuiForms}
            isLibrarySelected={muiSelected}
            formComponents={muiFormComponents}
          />
          <EvergreenPreview
            selectedForms={selectedEvergreenForms}
            isLibrarySelected={evergreenSelected}
            formComponents={evergreenFormComponents}
          />

          <ReactNoCssPreview
            selectedForms={selectedReactNoCssForms}
            isLibrarySelected={reactNoCssSelected}
            formComponents={reactNoCssFormComponents}
          />

          <RadixUiPreview
            selectedForms={selectedRadixUiForms}
            isLibrarySelected={radixUiSelected}
            formComponents={radixUiFormComponents}
          />

          <DaisyUiPreview
            selectedForms={selectedDaisyUiForms}
            isLibrarySelected={daisyUiSelected}
            formComponents={daisyUiFormComponents}
          />

          <ShadcnUiPreview
            selectedForms={selectedShadcnUiForms}
            isLibrarySelected={shadcnUiSelected}
            formComponents={shadcnUiFormComponents}
          />
          <GravityUiPreview
            selectedForms={selectedGravityUiForms}
            isLibrarySelected={gravityUiSelected}
            formComponents={gravityUiFormComponents}
          />
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <FormGroupedPreviews
            selectedForms={selectedForms}
            selectedLibraries={selectedLibraries}
            implementations={previewImplementations}
          />
        </Suspense>
      )}
    </Layout>
  )
}

export default App
