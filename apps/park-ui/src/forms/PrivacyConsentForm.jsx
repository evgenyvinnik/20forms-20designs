import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function PrivacyConsentForm() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Submitted!'); }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
        <input type="checkbox" name="necessary" defaultChecked disabled />
        Essential cookies required for site operation
      </label>
<label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
        <input type="checkbox" name="analytics" defaultChecked  />
        Allow anonymous analytics tracking
      </label>
<label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
        <input type="checkbox" name="marketing"   />
        Receive promotional updates and newsletters
      </label>
<button type="submit" className="park-button">Save consent settings</button>
    </form>
  )
}