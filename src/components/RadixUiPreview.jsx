import styles from '../styles'
import '../tailwind-no-preflight.css'
import { LibraryThemeWrapper } from './LibraryThemeWrapper'
import FormErrorBoundary from './FormErrorBoundary'

function RadixUiPreview({
  selectedForms,
  isLibrarySelected,
  formComponents,
  themeMode,
}) {
  if (!isLibrarySelected) return null

  const hasSelections = selectedForms.length > 0

  return (
    <section style={styles.previewSection}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Radix UI previews</h2>
        <p style={styles.previewHelper}>
          Radix UI form implementations rendered when Radix UI is selected.
        </p>
      </div>

      {!hasSelections ? (
        <p style={styles.placeholderText}>
          Select one or more forms to see their Radix UI implementations.
        </p>
      ) : (
        <div style={styles.previewStrip}>
          {selectedForms.map((form) => {
            const FormComponent = formComponents[form]
            if (!FormComponent) return null

            return (
              <div key={`radix-ui-${form}`} style={styles.previewCard}>
                <div style={styles.frameHeaderRow}>
                  <div style={styles.comboLabel}>{form}</div>
                  <div style={styles.libraryChip}>Radix UI</div>
                </div>
                <FormErrorBoundary
                  formName={form}
                  libraryName="Radix UI"
                  resetKey={`radix-ui-${form}`}
                >
                  <LibraryThemeWrapper
                    library="Radix UI"
                    themeMode={themeMode}
                  >
                    <div style={styles.previewFormWrapper}>
                      <FormComponent />
                    </div>
                  </LibraryThemeWrapper>
                </FormErrorBoundary>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default RadixUiPreview
