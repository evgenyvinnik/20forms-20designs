import styles from '../styles'

function MuiPreview({ selectedForms, isLibrarySelected, formComponents }) {
  if (!isLibrarySelected) return null

  const hasSelections = selectedForms.length > 0

  return (
    <section style={styles.previewSection}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>MUI previews</h2>
        <p style={styles.previewHelper}>MUI form implementations rendered when MUI is selected.</p>
      </div>

      {!hasSelections ? (
        <p style={styles.placeholderText}>
          Select one or more forms to see their MUI implementations.
        </p>
      ) : (
        <div style={styles.previewGrid}>
          {selectedForms.map((form) => {
            const FormComponent = formComponents[form]

            return (
              <div key={`mui-${form}`} style={styles.previewCard}>
                <div style={styles.comboLabel}>{form}</div>
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

export default MuiPreview
