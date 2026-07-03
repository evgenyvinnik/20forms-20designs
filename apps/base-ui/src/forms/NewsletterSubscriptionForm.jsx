import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function NewsletterSubscriptionForm() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Submitted!'); }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
      <Field.Label className="base-label">Email address</Field.Label>
      <Field.Control className="base-input" name="email" type="email"     required />
      
    </Field.Root>
<Field.Root required className="base-field">
        <Field.Label className="base-label">Digest frequency</Field.Label>
        <select className="base-select" name="frequency" defaultValue="weekly" required>
          <option value="weekly">Weekly digest</option>
          <option value="monthly">Monthly summary</option>
        </select>
      </Field.Root>
<label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
      <input type="checkbox" name="productUpdates" defaultChecked  />
      Include product release notes
    </label>
<button type="submit" className="base-button">Subscribe</button>
    </form>
  )
}