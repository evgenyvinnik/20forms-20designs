import styles from '../styles'
import '../tailwind-no-preflight.css'

function DaisyUiPreview({ selectedForms, isLibrarySelected, formComponents }) {
  if (!isLibrarySelected) return null

  const hasSelections = selectedForms.length > 0

  return (
    <section style={styles.previewSection}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>DaisyUI previews</h2>
        <p style={styles.previewHelper}>
          DaisyUI form implementations (Tailwind Preflight disabled - styling
          may be affected).
        </p>
      </div>

      {!hasSelections ? (
        <p style={styles.placeholderText}>
          Select one or more forms to see their DaisyUI implementations.
        </p>
      ) : (
        <div style={styles.previewStrip}>
          {selectedForms.map((form) => {
            const FormComponent = formComponents[form]
            if (!FormComponent) return null

            return (
              <div key={`daisyui-${form}`} style={styles.previewCard}>
                <div style={styles.frameHeaderRow}>
                  <div style={styles.comboLabel}>{form}</div>
                  <div style={styles.libraryChip}>DaisyUI</div>
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

export default DaisyUiPreview
