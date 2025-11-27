import styles from '../styles'

function FormGroupedPreviews({ selectedForms, selectedLibraries, implementations }) {
  const activeLibraries = selectedLibraries.filter((library) => implementations[library])
  const formsWithImplementations = selectedForms.filter((form) =>
    activeLibraries.some((library) => implementations[library].components[form]),
  )

  if (activeLibraries.length === 0) {
    return null
  }

  return (
    <section style={styles.previewSection}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Form previews</h2>
        <p style={styles.previewHelper}>
          See each selected form with implementations from the chosen component libraries.
        </p>
      </div>

      {formsWithImplementations.length === 0 ? (
        <p style={styles.placeholderText}>
          Select one or more forms that are implemented by the selected component libraries.
        </p>
      ) : (
        formsWithImplementations.map((form) => {
          const librariesWithForm = activeLibraries.filter(
            (library) => implementations[library].components[form],
          )
          if (librariesWithForm.length === 0) return null

          return (
            <div key={form} style={styles.stripGroup}>
              <div style={styles.stripHeader}>
                <h3 style={styles.stripTitle}>{form}</h3>
                <p style={styles.stripCaption}>Component libraries</p>
              </div>
              <div style={styles.previewStrip}>
                {librariesWithForm.map((library) => {
                  const FormComponent = implementations[library].components[form]
                  if (!FormComponent) return null

                  return (
                    <div key={`${form}-${library}`} style={styles.previewCard}>
                      <div style={styles.frameHeaderRow}>
                        <div style={styles.comboLabel}>{library}</div>
                      </div>
                      <div style={styles.previewFormWrapper}>
                        <FormComponent />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })
      )}
    </section>
  )
}

export default FormGroupedPreviews
