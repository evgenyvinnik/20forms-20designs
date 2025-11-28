import React from 'react'

const styles = {
  placeholderText: { margin: '12px 0' },
}

export default function PreviewPlaceholder({ libraryName = 'this library' }) {
  return (
    <p style={styles.placeholderText}>
      Select one or more forms to see their {libraryName} implementations.
    </p>
  )
}
