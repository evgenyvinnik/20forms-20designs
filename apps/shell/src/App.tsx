import { useMemo, useEffect } from 'react'
import { LIBRARIES, FORMS, LIBRARY_NAME_TO_ID, FORM_NAME_TO_ID } from './config'
import { useAppStore } from './store'
import { SelectionColumn } from './components/SelectionColumn'
import { PreviewSection } from './components/PreviewSection'
import { PreviewToggleRow } from './components/PreviewToggleRow'
import { ThemeToggleRow } from './components/ThemeToggleRow'
import { Header } from './components/Header'
import './styles.css'

function App() {
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



  // Sync state back to URL query parameters
  useEffect(() => {
    const params = new URLSearchParams()

    if (selectedForms.length > 0 && selectedForms.length < FORMS.length) {
      const formIds = selectedForms
        .map((f) => FORM_NAME_TO_ID[f])
        .filter(Boolean)
      params.set('forms', formIds.join(','))
    }

    const implementedLibs = LIBRARIES.filter((l) => l.implemented).map(
      (l) => l.name
    )
    if (
      selectedLibraries.length > 0 &&
      selectedLibraries.length < implementedLibs.length
    ) {
      const libIds = selectedLibraries
        .map((l) => LIBRARY_NAME_TO_ID[l])
        .filter(Boolean)
      params.set('libraries', libIds.join(','))
    }

    if (themeMode === 'dark') {
      params.set('theme', 'dark')
    }

    if (groupBy === 'form') {
      params.set('groupBy', 'form')
    }

    const queryString = params.toString()
    const newUrl = queryString
      ? `${window.location.pathname}?${queryString}`
      : window.location.pathname

    window.history.replaceState(null, '', newUrl)
  }, [selectedForms, selectedLibraries, themeMode, groupBy])

  // Form items for selection
  const formItems = useMemo(
    () => FORMS.map((form) => ({ value: form, label: form })),
    []
  )

  // Library items for selection
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

  const activeLibraries = useMemo(
    () =>
      LIBRARIES.filter(
        (lib) => lib.implemented && selectedLibraries.includes(lib.name)
      ),
    [selectedLibraries]
  )

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
            twoColumnLayout={true}
          />
        </div>

        <div className="controls-row">
          <ThemeToggleRow themeMode={themeMode} setThemeMode={setThemeMode} />
          <PreviewToggleRow groupBy={groupBy} setGroupBy={setGroupBy} />
        </div>

        {activeLibraries.length === 0 ? (
          <div className="empty-message">
            Select at least one implemented library to see previews.
          </div>
        ) : activeForms.length === 0 ? (
          <div className="empty-message">
            Select at least one form to see previews.
          </div>
        ) : groupBy === 'library' ? (
          activeLibraries.map((lib) => (
            <PreviewSection
              key={lib.name}
              title={lib.name}
              description={`Form components implemented with ${lib.name}`}
              forms={activeForms}
              libraries={[lib]}
              theme={themeMode}
            />
          ))
        ) : (
          activeForms.map((form) => (
            <PreviewSection
              key={form}
              title={form}
              description={`Implemented across component libraries`}
              forms={[form]}
              libraries={activeLibraries}
              theme={themeMode}
            />
          ))
        )}
      </main>
    </div>
  )
}

export default App
