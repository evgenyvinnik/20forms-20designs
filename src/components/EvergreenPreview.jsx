import styles from '../styles'

function EvergreenPreview({
  selectedForms,
  isLibrarySelected,
  formComponents,
}) {
  if (!isLibrarySelected) return null

  const hasSelections = selectedForms.length > 0

  return (
    <section style={styles.previewSection}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Evergreen previews</h2>
        <p style={styles.previewHelper}>
          Evergreen UI form implementations rendered when Evergreen is selected.
        </p>
      </div>

      {!hasSelections ? (
        <p style={styles.placeholderText}>
          Select one or more forms to see their Evergreen UI implementations.
        </p>
      ) : (
        <div style={styles.previewStrip}>
          {selectedForms.map((form) => {
            const FormComponent = formComponents[form]
            if (!FormComponent) return null

            return (
              <div key={`evergreen-${form}`} style={styles.previewCard}>
                <div style={styles.frameHeaderRow}>
                  <div style={styles.comboLabel}>{form}</div>
                  <div style={styles.libraryChip}>Evergreen</div>
                </div>
                <div style={styles.previewFormWrapper}>
                  <FormComponent />
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default EvergreenPreview
