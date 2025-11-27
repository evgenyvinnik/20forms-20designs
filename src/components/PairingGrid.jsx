import { useMemo } from 'react'

import styles from '../styles'

function PairingGrid({ combinations, groupBy, onGroupByChange }) {
  const groupedCombinations = useMemo(() => {
    const map = new Map()

    combinations.forEach((combo) => {
      const key = groupBy === 'library' ? combo.library : combo.form

      if (!map.has(key)) {
        map.set(key, [])
      }

      map.get(key).push(combo)
    })

    return Array.from(map.entries())
  }, [combinations, groupBy])

  return (
    <section style={styles.combosSection}>
      <div style={styles.comboHeader}>
        <div>
          <h2 style={styles.sectionTitle}>Selected pairings</h2>
          <p style={styles.previewHelper}>
            View your selections grouped by design system or by form name.
          </p>
        </div>
        <div style={styles.groupToggle}>
          <label style={styles.radioRow}>
            <input
              type="radio"
              name="group-by"
              value="library"
              checked={groupBy === 'library'}
              onChange={() => onGroupByChange('library')}
            />
            <span>Design system</span>
          </label>
          <label style={styles.radioRow}>
            <input
              type="radio"
              name="group-by"
              value="form"
              checked={groupBy === 'form'}
              onChange={() => onGroupByChange('form')}
            />
            <span>Form name</span>
          </label>
        </div>
      </div>

      {combinations.length === 0 ? (
        <p style={styles.placeholderText}>
          Choose at least one form and one component library to see the grid of implementations.
        </p>
      ) : (
        <div style={styles.comboGroupGrid}>
          {groupedCombinations.map(([groupLabel, combos]) => (
            <div key={groupLabel} style={styles.comboGroupCard}>
              <div style={styles.comboGroupHeader}>
                <div style={styles.comboGroupTitle}>{groupLabel}</div>
                <div style={styles.comboGroupCount}>{combos.length}</div>
              </div>
              <div style={styles.comboGrid}>
                {combos.map((combo) => {
                  const primaryLabel = groupBy === 'library' ? combo.form : combo.library
                  const secondaryLabel = groupBy === 'library' ? combo.library : combo.form

                  return (
                    <div key={`${combo.form}-${combo.library}`} style={styles.comboCard}>
                      <div style={styles.comboLabel}>{primaryLabel}</div>
                      <div style={styles.comboSubLabel}>{secondaryLabel}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default PairingGrid
