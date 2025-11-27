import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

import styles from '../styles'
import FormErrorBoundary from './FormErrorBoundary'
import { LibraryThemeWrapper } from './LibraryThemeWrapper'

function BlueprintPreview({
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
        <h2 style={styles.sectionTitle}>Blueprint previews</h2>
        <p style={styles.previewHelper}>
          Blueprint UI form implementations rendered when Blueprint is selected.
        </p>
      </div>

      {!hasSelections ? (
        <p style={styles.placeholderText}>
          Select one or more forms to see their Blueprint implementations.
        </p>
      ) : (
        <div style={styles.previewStrip}>
          {selectedForms.map((form) => {
            const FormComponent = formComponents[form]
            if (!FormComponent) return null

            return (
              <div key={`blueprint-${form}`} style={styles.previewCard}>
                <div style={styles.frameHeaderRow}>
                  <div style={styles.comboLabel}>{form}</div>
                  <div style={styles.libraryChip}>Blueprint</div>
                </div>
                <FormErrorBoundary
                  formName={form}
                  libraryName="Blueprint"
                  resetKey={`blueprint-${form}`}
                >
                  <LibraryThemeWrapper
                    library="Blueprint"
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

export default BlueprintPreview
