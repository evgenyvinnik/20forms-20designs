import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function PasswordChangeForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Current password</Field.Label>
        <Field.Control
          className="base-input"
          name="currentPassword"
          type="password"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">New password</Field.Label>
        <Field.Control
          className="base-input"
          name="newPassword"
          type="password"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Confirm new password</Field.Label>
        <Field.Control
          className="base-input"
          name="confirmPassword"
          type="password"
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
        <input type="checkbox" name="signOutOther" />
        Sign out of other devices
      </label>
      <button type="submit" className="base-button">
        Update password
      </button>
    </form>
  )
}
