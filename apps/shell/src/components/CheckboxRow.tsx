interface CheckboxRowProps {
  label: React.ReactNode
  checked: boolean
  onChange: () => void
  disabled?: boolean
}

export function CheckboxRow({
  label,
  checked,
  onChange,
  disabled = false,
}: CheckboxRowProps) {
  if (disabled) {
    return (
      <div className="checkbox-row disabled">
        <span>{label}</span>
      </div>
    )
  }

  return (
    <label className="checkbox-row">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  )
}
