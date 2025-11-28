// Inlined styles from styles.js
const styles = {
  previewSection: { marginTop: '32px' },
  sectionHeader: { marginBottom: '6px' },
  sectionTitle: { margin: 0, fontSize: '1.1rem' },
  previewHelper: { margin: 0, color: '#5b6675' },

  previewStrip: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    padding: '6px 2px 12px',
  },
}
import PreviewFormWrapper from './PreviewFormWrapper'
import PreviewCard from './PreviewCard'
import PreviewPlaceholder from './PreviewPlaceholder'

function ReactNoCssPreview({
  selectedForms,
  isLibrarySelected,
  formComponents,
  themeMode,
  libraryName,
}) {
  if (!isLibrarySelected) return null

  const hasSelections = selectedForms.length > 0

  // Use prefers-color-scheme as fallback if no themeMode prop
  const getThemeMode = () => {
    if (typeof window !== 'undefined' && !themeMode) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    return themeMode || 'light'
  }
  const currentTheme = getThemeMode()

  return (
    <section style={styles.previewSection}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>React + No CSS previews</h2>
        <p style={styles.previewHelper}>
          Plain HTML forms rendered when React + No CSS is selected.
        </p>
      </div>

      {!hasSelections ? (
        <PreviewPlaceholder libraryName={libraryName} />
      ) : (
        <div style={styles.previewStrip}>
          {selectedForms.map((form) => {
            const FormComponent = formComponents[form]
            if (!FormComponent) return null

            return (
              <PreviewCard
                key={`react-no-css-${form}`}
                form={form}
                library={libraryName}
              >
                <PreviewFormWrapper
                  formName={form}
                  libraryName={libraryName}
                  resetKey={`react-no-css-${form}`}
                  themeMode={currentTheme}
                >
                  <FormComponent />
                </PreviewFormWrapper>
              </PreviewCard>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default ReactNoCssPreview
