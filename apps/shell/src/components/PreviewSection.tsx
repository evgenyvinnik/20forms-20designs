import { Library } from '../config'
import { ThemeMode } from '../store'
import { PreviewCard } from './PreviewCard'
import { PreviewSectionHeader } from './PreviewSectionHeader'

interface PreviewSectionProps {
  title: string
  description: string
  forms: string[]
  libraries: Library[]
  theme: ThemeMode
}

export function PreviewSection({
  title,
  description,
  forms,
  libraries,
  theme,
}: PreviewSectionProps) {
  return (
    <section className="preview-section">
      <PreviewSectionHeader title={title} description={description} />
      <div className="preview-strip">
        {forms.map((form) =>
          libraries.map((lib) => (
            <PreviewCard
              key={`${lib.name}-${form}`}
              libraryName={lib.name}
              formName={form}
              theme={theme}
              supportsTheme={lib.supportsTheme}
            />
          ))
        )}
      </div>
    </section>
  )
}
