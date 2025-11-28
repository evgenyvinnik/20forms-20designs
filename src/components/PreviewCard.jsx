import React from 'react'
import { useAppStore } from '@/store'

const styles = {
  previewCard: {
    border: '1px solid #c1c7cd',
    borderRadius: '10px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '420px',
    maxWidth: '100%',
    boxSizing: 'border-box',
  },
  frameHeaderRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
  },
  comboLabel: { fontWeight: 600, marginBottom: '2px', fontSize: '0.95rem' },
  libraryChip: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 10px',
    borderRadius: '999px',
    backgroundColor: '#f1f3f8',
    color: '#1f2933',
    fontWeight: 600,
    fontSize: '0.9rem',
    width: 'fit-content',
  },
}

function PreviewCard({ form, library, children }) {
  return (
    <div style={styles.previewCard}>
      <div style={styles.frameHeaderRow}>
        <div style={styles.comboLabel}>{form}</div>
        {library ? <div style={styles.libraryChip}>{library}</div> : null}
      </div>
      {children}
    </div>
  )
}

export default PreviewCard
