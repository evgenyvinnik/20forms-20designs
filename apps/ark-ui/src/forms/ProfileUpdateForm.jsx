import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function ProfileUpdateForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">First name</Field.Label>
        <Field.Input
          className="ark-input"
          name="firstName"
          type="text"
          defaultValue="Jane"
          required
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Last name</Field.Label>
        <Field.Input
          className="ark-input"
          name="lastName"
          type="text"
          defaultValue="Doe"
          required
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Email address</Field.Label>
        <Field.Input
          className="ark-input"
          name="email"
          type="email"
          defaultValue="jane@example.com"
          required
        />
      </Field.Root>
      <Field.Root className="ark-field">
        <Field.Label className="ark-label">Phone number</Field.Label>
        <Field.Input className="ark-input" name="phone" type="tel" />
      </Field.Root>
      <Field.Root className="ark-field">
        <Field.Label className="ark-label">Short bio</Field.Label>
        <Field.Textarea
          className="ark-textarea"
          name="bio"
          defaultValue="Software developer based in San Francisco."
          rows={3}
        />
      </Field.Root>
      <button type="submit" className="ark-button">
        Save changes
      </button>
    </form>
  )
}
