import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function NewsletterSubscriptionForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Subscribed to newsletter!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Email address</Field.Label>
        <Field.Control
          className="base-input"
          name="email"
          type="email"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Frequency</Field.Label>
        <select
          className="base-select"
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
      <button type="submit" className="base-button">
        Subscribe
      </button>
    </form>
  )
}
