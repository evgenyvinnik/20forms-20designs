import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function PrivacyConsentForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Full name</Field.Label>
        <Field.Control
          className="base-input"
          name="fullName"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Email address</Field.Label>
        <Field.Control
          className="base-input"
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
      <Field.Root className="base-field">
        <Field.Label className="base-label">Additional notes</Field.Label>
        <Field.Control
          render={<textarea />}
          className="base-textarea"
          name="notes"
          rows={3}
        />
      </Field.Root>
      <button type="submit" className="base-button">
        Save preferences
      </button>
    </form>
  )
}
