import styles from '../styles'
import FormErrorBoundary from './FormErrorBoundary'

function ChakraUiPreview({ selectedForms, isLibrarySelected, formComponents }) {
  if (!isLibrarySelected) return null

  const hasSelections = selectedForms.length > 0

  return (
    <section style={styles.previewSection}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Chakra UI previews</h2>
        <p style={styles.previewHelper}>
          Chakra UI form implementations rendered when Chakra UI is selected.
        </p>
      </div>

      {!hasSelections ? (
        <p style={styles.placeholderText}>
          Select one or more forms to see their Chakra UI implementations.
        </p>
      ) : (
        <div style={styles.previewStrip}>
          {selectedForms.map((form) => {
            const FormComponent = formComponents[form]
            if (!FormComponent) return null

            return (
              <div key={`chakra-ui-${form}`} style={styles.previewCard}>
                <div style={styles.frameHeaderRow}>
                  <div style={styles.comboLabel}>{form}</div>
                  <div style={styles.libraryChip}>Chakra UI</div>
                </div>
                <FormErrorBoundary
                  formName={form}
                  libraryName="Chakra UI"
                  resetKey={`chakra-ui-${form}`}
                >
                  <div style={styles.previewFormWrapper}>
                    <FormComponent />
                  </div>
                </FormErrorBoundary>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default ChakraUiPreview
