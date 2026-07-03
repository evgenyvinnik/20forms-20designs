import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function ProfileUpdateForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
        <Field.Label className="park-label">First name</Field.Label>
        <Field.Input
          className="park-input"
          name="firstName"
          type="text"
          defaultValue="Jane"
          required
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Last name</Field.Label>
        <Field.Input
          className="park-input"
          name="lastName"
          type="text"
          defaultValue="Doe"
          required
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Email address</Field.Label>
        <Field.Input
          className="park-input"
          name="email"
          type="email"
          defaultValue="jane@example.com"
          required
        />
      </Field.Root>
      <Field.Root className="park-field">
        <Field.Label className="park-label">Phone number</Field.Label>
        <Field.Input className="park-input" name="phone" type="tel" />
      </Field.Root>
      <Field.Root className="park-field">
        <Field.Label className="park-label">Short bio</Field.Label>
        <Field.Textarea
          className="park-textarea"
          name="bio"

          rows={3}
        />
      </Field.Root>
      <button type="submit" className="park-button">
        Save changes
      </button>
    </form>
  )
}
