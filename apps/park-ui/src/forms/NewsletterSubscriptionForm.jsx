import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function NewsletterSubscriptionForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Subscribed to newsletter!')
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Email address</Field.Label>
        <Field.Input
          className="park-input"
          name="email"
          type="email"
          required
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Digest frequency</Field.Label>
        <select
          className="park-select"
          name="frequency"
          defaultValue="weekly"
          required
        >
          <option value="weekly">Weekly digest</option>
          <option value="monthly">Monthly summary</option>
        </select>
      </Field.Root>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
        }}
      >
        <input type="checkbox" name="productUpdates" defaultChecked />
        Include product release notes
      </label>
      <button type="submit" className="park-button">
        Subscribe
      </button>
    </form>
  )
}
