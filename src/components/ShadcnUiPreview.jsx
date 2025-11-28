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
import '../tailwind-no-preflight.css'
import PreviewFormWrapper from './PreviewFormWrapper'
import PreviewSectionHeader from './PreviewSectionHeader'
import PreviewCard from './PreviewCard'
import PreviewPlaceholder from './PreviewPlaceholder'

function ShadcnUiPreview({ selectedForms, isLibrarySelected, formComponents, themeMode, libraryName }) {
  if (!isLibrarySelected) return null

  const hasSelections = selectedForms.length > 0

  // Use prefers-color-scheme as fallback if no themeMode prop
  const getThemeMode = () => {
    if (typeof window !== 'undefined' && !themeMode) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    return themeMode || 'light'
  }
  const currentTheme = getThemeMode()

  return (
    <section style={styles.previewSection}>
      <PreviewSectionHeader
        title="shadcn/ui previews"
        description="shadcn/ui form implementations rendered when shadcn/ui is selected."
      />

      {!hasSelections ? (
        <PreviewPlaceholder libraryName={libraryName} />
      ) : (
        <div style={styles.previewStrip}>
          {selectedForms.map((form) => {
            const FormComponent = formComponents[form]
            if (!FormComponent) return null

            return (
              <PreviewCard key={`shadcn-ui-${form}`} form={form} library={libraryName}>
                <PreviewFormWrapper
                  formName={form}
                  libraryName={libraryName}
                  resetKey={`shadcn-ui-${form}`}
                  themeMode={currentTheme}
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

export default ShadcnUiPreview
