import { CheckboxRow } from './CheckboxRow'

interface SelectionColumnProps {
  title: string
  items: { value: string; label: React.ReactNode; disabled?: boolean }[]
  selectedItems: string[]
  onToggleItem: (value: string) => void
  onSelectAll: () => void
  onSelectNone: () => void
  twoColumnLayout?: boolean
}

export function SelectionColumn({
  title,
  items,
  selectedItems,
  onToggleItem,
  onSelectAll,
  onSelectNone,
  twoColumnLayout = false,
}: SelectionColumnProps) {
  const selectableItems = items.filter((item) => !item.disabled)
  const allSelected =
    selectableItems.length > 0 &&
    selectableItems.every((item) => selectedItems.includes(item.value))
  const noneSelected = selectableItems.every(
    (item) => !selectedItems.includes(item.value)
  )
  const listClassName = twoColumnLayout
    ? 'two-column-list'
    : 'single-column-list'

  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="selection-actions">
        <CheckboxRow
          label="Select all"
          checked={allSelected}
          onChange={onSelectAll}
        />
        <CheckboxRow
          label="Select none"
          checked={noneSelected}
          onChange={onSelectNone}
        />
      </div>
      <div className={listClassName}>
        {items.map((item) => (
          <CheckboxRow
            key={item.value}
            label={item.label}
            checked={selectedItems.includes(item.value)}
            onChange={() => onToggleItem(item.value)}
            disabled={item.disabled}
          />
        ))}
      </div>
    </section>
  )
}
