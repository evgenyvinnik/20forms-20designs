// Inlined styles from styles.js
const styles = {
  previewSection: {
    marginTop: '32px',
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
import PreviewFormWrapper from './PreviewFormWrapper'
import PreviewSectionHeader from './PreviewSectionHeader'
import PreviewCard from './PreviewCard'
import PreviewPlaceholder from './PreviewPlaceholder'

function ChakraUiPreview({ selectedForms, isLibrarySelected, formComponents, themeMode, libraryName }) {
  if (!isLibrarySelected) return null

  const hasSelections = selectedForms.length > 0

  return (
    <section style={styles.previewSection}>
      <PreviewSectionHeader
        title="Chakra UI previews"
        description="Chakra UI form implementations rendered when Chakra UI is selected."
      />

      {!hasSelections ? (
        <PreviewPlaceholder libraryName={libraryName} />
      ) : (
        <div style={styles.previewStrip}>
          {selectedForms.map((form) => {
            const FormComponent = formComponents[form]
            if (!FormComponent) return null

            return (
              <PreviewCard key={`chakra-ui-${form}`} form={form} library={libraryName}>
                <PreviewFormWrapper
                  formName={form}
                  libraryName={libraryName}
                  resetKey={`chakra-ui-${form}`}
                  themeMode={themeMode}
                >
                  <FormComponent />
                </PreviewFormWrapper>
              </PreviewCard>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default ChakraUiPreview
