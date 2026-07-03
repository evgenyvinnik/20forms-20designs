import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function NewsletterSubscriptionForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Email address</Field.Label>
        <Field.Input className="ark-input" name="email" type="email" required />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Frequency</Field.Label>
        <select
          className="ark-select"
          name="frequency"
          defaultValue="weekly"
          required
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
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
        <input type="checkbox" name="receiveUpdates" defaultChecked />
        Receive product updates
      </label>
      <button type="submit" className="ark-button">
        Subscribe
      </button>
    </form>
  )
}
