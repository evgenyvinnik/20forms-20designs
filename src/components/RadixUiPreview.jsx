// Inlined styles from styles.js
const styles = {
  previewSection: { marginTop: '32px' },

  previewStrip: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    padding: '6px 2px 12px',
  },
}
import { LibraryThemeWrapper } from './LibraryThemeWrapper'
import PreviewFormWrapper from './PreviewFormWrapper'
import PreviewSectionHeader from './PreviewSectionHeader'
import PreviewCard from './PreviewCard'
import PreviewPlaceholder from './PreviewPlaceholder'

function RadixUiPreview({
  selectedForms,
  isLibrarySelected,
  formComponents,
  themeMode,
  libraryName,
}) {
  if (!isLibrarySelected) return null

  const hasSelections = selectedForms && selectedForms.length > 0

  return (
    <section style={styles.previewSection}>
      <PreviewSectionHeader
        title="Radix UI previews"
        description="Radix UI form implementations rendered when Radix UI is selected."
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
                key={`radix-ui-${form}`}
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
                    resetKey={`radix-ui-${form}`}
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

export default RadixUiPreview
