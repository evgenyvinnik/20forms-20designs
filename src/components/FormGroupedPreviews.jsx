import styles from '../styles'
import { LibraryThemeWrapper, librarySupportsTheme } from './LibraryThemeWrapper'
import FormErrorBoundary from './FormErrorBoundary'

function FormGroupedPreviews({
  selectedForms,
  selectedLibraries,
  implementations,
  themeMode,
}) {
  const activeLibraries = selectedLibraries.filter(
    (library) => implementations[library]
  )
  const formsWithImplementations = selectedForms.filter((form) =>
    activeLibraries.some((library) => implementations[library].components[form])
  )

  if (activeLibraries.length === 0) {
    return null
  }

  return (
    <section style={styles.previewSection}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Form previews</h2>
        <p style={styles.previewHelper}>
          See each selected form with implementations from the chosen component
          libraries.
        </p>
      </div>

      {formsWithImplementations.length === 0 ? (
        <p style={styles.placeholderText}>
          Select one or more forms that are implemented by the selected
          component libraries.
        </p>
      ) : (
        formsWithImplementations.map((form) => {
          const librariesWithForm = activeLibraries.filter(
            (library) => implementations[library].components[form]
          )
          if (librariesWithForm.length === 0) return null

          return (
            <div key={form} style={styles.stripGroup}>
              <div style={styles.stripHeader}>
                <h3 style={styles.stripTitle}>{form}</h3>
              </div>
              <div style={styles.previewStrip}>
                {librariesWithForm.map((library) => {
                  const { components, Wrapper } = implementations[library]
                  const FormComponent = components[form]
                  if (!FormComponent) return null

                  return (
                    <div key={`${form}-${library}`} style={styles.previewCard}>
                      <div style={styles.frameHeaderRow}>
                        <div style={styles.comboLabel}>{library}</div>
                      </div>
                      <FormErrorBoundary
                        formName={form}
                        libraryName={library}
                        resetKey={`${library}-${form}`}
                      >
                        {librarySupportsTheme(library) ? (
                          <LibraryThemeWrapper
                            library={library}
                            themeMode={themeMode}
                          >
                            <div style={styles.previewFormWrapper}>
                              {Wrapper ? (
                                <Wrapper>
                                  <FormComponent />
                                </Wrapper>
                              ) : (
                                <FormComponent />
                              )}
                            </div>
                          </LibraryThemeWrapper>
                        ) : (
                          <div style={styles.previewFormWrapper}>
                            {Wrapper ? (
                              <Wrapper>
                                <FormComponent />
                              </Wrapper>
                            ) : (
                              <FormComponent />
                            )}
                          </div>
                        )}
                      </FormErrorBoundary>
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
