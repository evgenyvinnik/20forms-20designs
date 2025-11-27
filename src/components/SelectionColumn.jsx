import styles from '../styles'

function CheckboxRow({ label, checked, onChange }) {
  return (
    <label style={styles.checkboxRow}>
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
  const allSelected = selectedItems.length === items.length
  const noneSelected = selectedItems.length === 0
  const listStyle = twoColumnLayout ? styles.twoColumnList : styles.singleColumnList

  return (
    <section>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>{title}</h2>
      </div>
      <div style={styles.selectionActions}>
        <CheckboxRow label="Select all" checked={allSelected} onChange={onSelectAll} />
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
          />
        ))}
      </div>
    </section>
  )
}

export default SelectionColumn
