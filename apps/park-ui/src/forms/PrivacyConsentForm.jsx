import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function PrivacyConsentForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Privacy consent saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Full name</Field.Label>
        <Field.Input
          className="park-input"
          name="fullName"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Email address</Field.Label>
        <Field.Input
          className="park-input"
          name="email"
          type="email"
          required
        />
      </Field.Root>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
        }}
      >
        <input type="checkbox" name="emailUpdates" defaultChecked />
        Email updates
      </label>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
        }}
      >
        <input type="checkbox" name="smsAlerts" />
        SMS notifications
      </label>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
        }}
      >
        <input type="checkbox" name="phoneCalls" />
        Phone calls
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
        Allow analytics cookies
      </label>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
        }}
      >
        <input type="checkbox" name="personalization" />
        Allow personalized content
      </label>
      <Field.Root className="park-field">
        <Field.Label className="park-label">Additional notes</Field.Label>
        <Field.Textarea className="park-textarea" name="notes" rows={3} />
      </Field.Root>
      <button type="submit" className="park-button">
        Save preferences
      </button>
    </form>
  )
}
