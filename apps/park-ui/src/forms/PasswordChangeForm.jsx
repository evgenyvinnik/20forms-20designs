import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function PasswordChangeForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Current password</Field.Label>
        <Field.Input
          className="park-input"
          name="currentPassword"
          type="password"
          required
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">New password</Field.Label>
        <Field.Input
          className="park-input"
          name="newPassword"
          type="password"
          required
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Confirm new password</Field.Label>
        <Field.Input
          className="park-input"
          name="confirmPassword"
          type="password"
          required
        />
      </Field.Root>
      <button type="submit" className="park-button">
        Update password
      </button>
    </form>
  )
}
