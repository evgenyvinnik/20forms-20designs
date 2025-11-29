import { GroupBy } from '../store'

interface PreviewToggleRowProps {
  groupBy: GroupBy
  setGroupBy: (groupBy: GroupBy) => void
}

export function PreviewToggleRow({
  groupBy,
  setGroupBy,
}: PreviewToggleRowProps) {
  return (
    <div className="preview-toggle-row">
      <span className="toggle-label">Group previews by:</span>
      <label className="radio-row">
        <input
          type="radio"
          name="preview-group-by"
          value="library"
          checked={groupBy === 'library'}
          onChange={() => setGroupBy('library')}
        />
        <span>Design system</span>
      </label>
      <label className="radio-row">
        <input
          type="radio"
          name="preview-group-by"
          value="form"
          checked={groupBy === 'form'}
          onChange={() => setGroupBy('form')}
        />
        <span>Form name</span>
      </label>
    </div>
  )
}
