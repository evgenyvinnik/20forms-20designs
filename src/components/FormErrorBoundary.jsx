import { Component } from 'react'
// Inlined styles from styles.js
const styles = {
  formErrorFallback: {
    border: '1px dashed #f5b5b5',
    borderRadius: '8px',
    padding: '12px',
    backgroundColor: '#fff7f7',
    color: '#9b1c1c',
  },
  formErrorTitle: {
    margin: '0 0 4px',
    fontWeight: 700,
    fontSize: '0.95rem',
  },
  formErrorDetails: {
    margin: 0,
    fontSize: '0.9rem',
  },
}

class FormErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    const { formName, libraryName } = this.props
    console.error('Form preview failed to render', {
      form: formName,
      library: libraryName,
      error,
      info,
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false, error: null })
    }
  }

  render() {
    const { hasError } = this.state
    const { children, formName, libraryName } = this.props

    if (hasError) {
      return (
        <div style={styles.formErrorFallback}>
          <div style={styles.formErrorTitle}>Preview unavailable</div>
          <p style={styles.formErrorDetails}>
            {libraryName ? `${libraryName} ` : ''}implementation for{' '}
            {formName || 'this form'} failed to render. See the console for
            details.
          </p>
        </div>
      )
    }

    return children
  }
}

export default FormErrorBoundary
