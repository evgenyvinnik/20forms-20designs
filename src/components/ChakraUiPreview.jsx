// Inlined styles from styles.js
const styles = {
  previewSection: {
    marginTop: '32px',
  },
  sectionHeader: {
    marginBottom: '6px',
  },
  sectionTitle: {
    margin: 0,
    fontSize: '1.1rem',
  },
  previewHelper: {
    margin: 0,
    color: '#5b6675',
  },
  placeholderText: {
    margin: '12px 0',
  },
  previewStrip: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    padding: '6px 2px 12px',
  },
  previewCard: {
    border: '1px solid #c1c7cd',
    borderRadius: '10px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '420px',
    maxWidth: '100%',
    boxSizing: 'border-box',
  },
  frameHeaderRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
  },
  comboLabel: {
    fontWeight: 600,
    marginBottom: '2px',
    fontSize: '0.95rem',
  },
  libraryChip: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 10px',
    borderRadius: '999px',
    backgroundColor: '#f1f3f8',
    color: '#1f2933',
    fontWeight: 600,
    fontSize: '0.9rem',
    width: 'fit-content',
  },
  previewFormWrapper: {
    padding: '10px',
    display: 'block',
  },
}
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
