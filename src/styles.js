const styles = {
  page: {
    padding: '24px',
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    color: '#1f2933',
  },
  header: {
    marginBottom: '24px',
  },
  title: {
    margin: '0 0 8px',
  },
  subtitle: {
    margin: 0,
    maxWidth: '760px',
    lineHeight: 1.4,
  },
  selectorRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    columnGap: '64px',
    rowGap: '24px',
    alignItems: 'start',
  },
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
  radioRow: {
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
  combosSection: {
    marginTop: '32px',
  },
  placeholderText: {
    margin: '12px 0',
  },
  comboGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  comboCard: {
    border: '1px solid #c1c7cd',
    padding: '6px 12px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '4px',
  },
  comboLabel: {
    fontWeight: 600,
    marginBottom: '2px',
    fontSize: '0.95rem',
  },
  comboSubLabel: {
    color: '#4a5565',
    fontSize: '0.9rem',
  },
  previewSection: {
    marginTop: '32px',
  },
  previewToggleRow: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    marginTop: '24px',
    marginBottom: '-12px',
  },
  previewToggleLabel: {
    fontWeight: 600,
  },
  previewGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '18px',
    justifyItems: 'center',
  },
  previewCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #c1c7cd',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    width: '100%',
    maxWidth: '380px',
    minHeight: '380px',
  },
  previewFormWrapper: {
    border: '1px solid #e0e4ea',
    borderRadius: '8px',
    padding: '14px',
    backgroundColor: '#ffffff',
    display: 'grid',
    gap: '10px',
  },
  libraryPreviewBlock: {
    display: 'grid',
    gap: '8px',
  },
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
  previewHelper: {
    margin: 0,
    color: '#5b6675',
  },
}

export default styles
