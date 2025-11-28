// Inlined styles from styles.js
const styles = {
  previewSection: { marginTop: '32px' },
  previewStrip: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    padding: '6px 2px 12px',
  },

  previewFormWrapper: { padding: '10px', display: 'block' },
}
import PreviewFormWrapper from './PreviewFormWrapper'
import PreviewSectionHeader from './PreviewSectionHeader'
import PreviewCard from './PreviewCard'
import PreviewPlaceholder from './PreviewPlaceholder'

function DaisyUiPreview({
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
        title="DaisyUI previews"
        description="DaisyUI form implementations (Tailwind Preflight disabled - styling may be affected)."
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
                key={`daisyui-${form}`}
                form={form}
                library={libraryName}
              >
                <PreviewFormWrapper
                  formName={form}
                  libraryName={libraryName}
                  resetKey={`daisyui-${form}`}
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

export default DaisyUiPreview
