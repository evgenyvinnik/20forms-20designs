import styles from '../styles'
import { LibraryThemeWrapper } from './LibraryThemeWrapper'
import FormErrorBoundary from './FormErrorBoundary'

function GravityUiPreview({
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
        <h2 style={styles.sectionTitle}>Gravity UI previews</h2>
        <p style={styles.previewHelper}>
          Gravity UI form implementations rendered when Gravity UI is selected.
        </p>
      </div>

      {!hasSelections ? (
        <p style={styles.placeholderText}>
          Select one or more forms to see their Gravity UI implementations.
        </p>
      ) : (
        <div style={styles.previewStrip}>
          {selectedForms.map((form) => {
            const FormComponent = formComponents[form]
            if (!FormComponent) return null

            return (
              <div key={`gravity-ui-${form}`} style={styles.previewCard}>
                <div style={styles.frameHeaderRow}>
                  <div style={styles.comboLabel}>{form}</div>
                  <div style={styles.libraryChip}>Gravity UI</div>
                </div>
                <FormErrorBoundary
                  formName={form}
                  libraryName="Gravity UI"
                  resetKey={`gravity-ui-${form}`}
                >
                  <LibraryThemeWrapper
                    library="Gravity UI"
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

export default GravityUiPreview
