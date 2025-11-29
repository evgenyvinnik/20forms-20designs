import { useMemo } from 'react'
import { LIBRARIES, FORMS } from './config'
import { useAppStore } from './store'
import { SelectionColumn } from './components/SelectionColumn'
import { PreviewSection } from './components/PreviewSection'
import { PreviewToggleRow } from './components/PreviewToggleRow'
import { ThemeToggleRow } from './components/ThemeToggleRow'
import { Header } from './components/Header'
import './styles.css'

function App() {
  // Get state and actions from Zustand store
  const {
    themeMode,
    groupBy,
    selectedForms,
    selectedLibraries,
    setThemeMode,
    setGroupBy,
    toggleFormSelection,
    selectAllForms,
    selectNoForms,
    toggleLibrarySelection,
    selectAllLibraries,
    selectNoLibraries,
  } = useAppStore()

  // Form items for selection
  const formItems = useMemo(
    () => FORMS.map((form) => ({ value: form, label: form })),
    []
  )

  // Library items for selection (with website/repo links, disabled for non-implemented)
  const libraryItems = useMemo(
    () =>
      LIBRARIES.map((lib) => ({
        value: lib.name,
        label: (
          <span>
            {lib.name} (
            <a
              href={lib.website}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              website
            </a>
            {' / '}
            <a
              href={lib.repo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              repo
            </a>
            )
          </span>
        ),
        disabled: !lib.implemented,
      })),
    []
  )

  // Get active (selected AND implemented) libraries
  const activeLibraries = useMemo(
    () =>
      LIBRARIES.filter(
        (lib) => lib.implemented && selectedLibraries.includes(lib.name)
      ),
    [selectedLibraries]
  )

  // Get forms that the selected libraries have (all forms since all are implemented)
  const activeForms = useMemo(
    () => FORMS.filter((form) => selectedForms.includes(form)),
    [selectedForms]
  )

  return (
    <div className="page">
      <Header />

      <main>
        <div className="selector-row">
          <SelectionColumn
            title="Forms"
            items={formItems}
            selectedItems={selectedForms}
            onToggleItem={toggleFormSelection}
            onSelectAll={selectAllForms}
            onSelectNone={selectNoForms}
          />
          <SelectionColumn
            title="Component libraries"
            items={libraryItems}
            selectedItems={selectedLibraries}
            onToggleItem={toggleLibrarySelection}
            onSelectAll={selectAllLibraries}
            onSelectNone={selectNoLibraries}
            twoColumnLayout
          />
        </div>

        <ThemeToggleRow themeMode={themeMode} setThemeMode={setThemeMode} />

        <PreviewToggleRow groupBy={groupBy} setGroupBy={setGroupBy} />

        {/* Previews grouped by library */}
        {groupBy === 'library' &&
          activeLibraries.map((lib) => {
            if (activeForms.length === 0) return null

            return (
              <PreviewSection
                key={lib.name}
                title={`${lib.name} previews`}
                description={`${lib.name} form implementations.`}
                forms={activeForms}
                libraries={[lib]}
                theme={themeMode}
              />
            )
          })}

        {/* Previews grouped by form */}
        {groupBy === 'form' &&
          activeForms.map((form) => {
            if (activeLibraries.length === 0) return null

            return (
              <PreviewSection
                key={form}
                title={form}
                description={`Compare this form across different design systems.`}
                forms={[form]}
                libraries={activeLibraries}
                theme={themeMode}
              />
            )
          })}

        {activeLibraries.length === 0 && (
          <p className="empty-message">
            Select at least one implemented library to see previews.
          </p>
        )}

        {activeForms.length === 0 && activeLibraries.length > 0 && (
          <p className="empty-message">
            Select at least one form to see previews.
          </p>
        )}
      </main>
    </div>
  )
}

export default App
