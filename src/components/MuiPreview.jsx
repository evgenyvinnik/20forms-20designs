// Inlined styles from styles.js
const styles = {
  previewSection: { marginTop: '32px' },

  previewStrip: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    padding: '6px 2px 12px',
  },

  previewFormWrapper: {
    padding: '10px',
    display: 'block',
    background: undefined, // will be set dynamically
    color: undefined, // will be set dynamically
  },
}
import { LibraryThemeWrapper } from './LibraryThemeWrapper'
import PreviewFormWrapper from './PreviewFormWrapper'
import PreviewCard from './PreviewCard'
import PreviewSectionHeader from './PreviewSectionHeader'
import PreviewPlaceholder from './PreviewPlaceholder'

function MuiPreview({
  selectedForms,
  isLibrarySelected,
  formComponents,
  themeMode,
  libraryName,
}) {
  if (!isLibrarySelected) return null

  const hasSelections = selectedForms.length > 0

  return (
    <section style={styles.previewSection}>
      <PreviewSectionHeader
        title="MUI previews"
        description="MUI form implementations rendered when MUI is selected."
      />

      {!hasSelections ? (
        <PreviewPlaceholder libraryName={libraryName} />
      ) : (
        <div style={styles.previewStrip}>
          {selectedForms.map((form) => {
            const FormComponent = formComponents[form]
            if (!FormComponent) return null

            return (
              <PreviewCard
                key={`mui-${form}`}
                form={form}
                library={libraryName}
              >
                <LibraryThemeWrapper
                  library={libraryName}
                  themeMode={themeMode}
                >
                  <PreviewFormWrapper
                    formName={form}
                    libraryName={libraryName}
                    resetKey={`mui-${form}`}
                    themeMode={themeMode}
                  >
                    <FormComponent />
                  </PreviewFormWrapper>
                </LibraryThemeWrapper>
              </PreviewCard>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default MuiPreview
