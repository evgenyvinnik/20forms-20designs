interface PreviewSectionHeaderProps {
  title: string
  description?: string
}

export function PreviewSectionHeader({
  title,
  description,
}: PreviewSectionHeaderProps) {
  return (
    <div className="section-header-row">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  )
}
