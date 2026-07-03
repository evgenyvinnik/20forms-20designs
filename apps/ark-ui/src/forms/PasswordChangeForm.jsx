import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function PasswordChangeForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Password updated!')
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Current password</Field.Label>
        <Field.Input
          className="ark-input"
          name="currentPassword"
          type="password"
          required
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">New password</Field.Label>
        <Field.Input
          className="ark-input"
          name="newPassword"
          type="password"
          required
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Confirm new password</Field.Label>
        <Field.Input
          className="ark-input"
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
      <button type="submit" className="ark-button">
        Update password
      </button>
    </form>
  )
}
