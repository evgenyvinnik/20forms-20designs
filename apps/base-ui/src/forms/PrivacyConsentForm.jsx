import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function PrivacyConsentForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Privacy consent saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
        }}
      >
        <input type="checkbox" name="necessary" defaultChecked disabled />
        Essential cookies required for site operation
      </label>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
        }}
      >
        <input type="checkbox" name="analytics" defaultChecked />
        Allow anonymous analytics tracking
      </label>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
        }}
      >
        <input type="checkbox" name="marketing" />
        Receive promotional updates and newsletters
      </label>
      <button type="submit" className="base-button">
        Save consent settings
      </button>
    </form>
  )
}
