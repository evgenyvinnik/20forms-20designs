const selectionStyles = {
  sectionHeader: {
    marginBottom: '6px',
  },
  sectionTitle: {
    margin: 0,
    fontSize: '1.1rem',
  },
  selectionActions: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '12px',
    alignItems: 'center',
  },
  checkboxRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.95rem',
  },
  singleColumnList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  twoColumnList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '8px 12px',
  },
}

function CheckboxRow({ label, checked, onChange, disabled }) {
  if (disabled) {
    return (
      <div style={{ ...selectionStyles.checkboxRow, opacity: 0.5 }}>
        <span style={{ marginLeft: '22px' }}>{label}</span>
      </div>
    )
  }

  return (
    <label style={selectionStyles.checkboxRow}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  )
}

function SelectionColumn({
  title,
  items,
  selectedItems,
  onToggleItem,
  onSelectAll,
  onSelectNone,
  twoColumnLayout = false,
}) {
  const selectableItems = items.filter((item) => !item.disabled)
  const allSelected =
    selectableItems.length > 0 &&
    selectableItems.every((item) => selectedItems.includes(item.value))
  const noneSelected = selectableItems.every(
    (item) => !selectedItems.includes(item.value)
  )
  const listStyle = twoColumnLayout
    ? selectionStyles.twoColumnList
    : selectionStyles.singleColumnList

  return (
    <section>
      <div style={selectionStyles.sectionHeader}>
        <h2 style={selectionStyles.sectionTitle}>{title}</h2>
      </div>
      <div style={selectionStyles.selectionActions}>
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
      <div style={listStyle}>
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

export default SelectionColumn
