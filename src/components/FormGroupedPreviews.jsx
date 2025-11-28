// Inlined styles from styles.js
const styles = {
  previewSection: {
    marginTop: '32px',
  },
  placeholderText: {
    margin: '12px 0',
  },
  stripGroup: {
    marginTop: '18px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  stripHeader: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: '10px',
    flexWrap: 'wrap',
    marginTop: '18px',
    marginBottom: '6px',
  },
  stripTitle: {
    margin: 0,
    fontSize: '1rem',
    fontWeight: 700,
  },
  previewStrip: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    padding: '6px 2px 12px',
  },

  previewFormWrapper: {
    padding: '10px',
    display: 'block',
  },
}
import {
  LibraryThemeWrapper,
  librarySupportsTheme,
} from './LibraryThemeWrapper'
import FormErrorBoundary from './FormErrorBoundary'
import PreviewSectionHeader from './PreviewSectionHeader'
import PreviewCard from './PreviewCard'

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
      <PreviewSectionHeader
        title="Form previews"
        description="See each selected form with implementations from the chosen component libraries."
      />

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
                    <PreviewCard key={`${form}-${library}`} form={library}>
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
                    </PreviewCard>
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
