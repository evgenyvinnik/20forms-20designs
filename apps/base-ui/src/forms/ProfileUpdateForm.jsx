import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function ProfileUpdateForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">First name</Field.Label>
        <Field.Control
          className="base-input"
          name="firstName"
          type="text"
          defaultValue="Jane"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Last name</Field.Label>
        <Field.Control
          className="base-input"
          name="lastName"
          type="text"
          defaultValue="Doe"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Email address</Field.Label>
        <Field.Control
          className="base-input"
          name="email"
          type="email"
          defaultValue="jane@example.com"
          required
        />
      </Field.Root>
      <Field.Root className="base-field">
        <Field.Label className="base-label">Phone number</Field.Label>
        <Field.Control className="base-input" name="phone" type="tel" />
      </Field.Root>
      <Field.Root className="base-field">
        <Field.Label className="base-label">Short bio</Field.Label>
        <Field.Control
          render={<textarea />}
          className="base-textarea"
          name="bio"
          defaultValue="Software developer based in San Francisco."
          rows={3}
        />
      </Field.Root>
      <button type="submit" className="base-button">
        Save changes
      </button>
    </form>
  )
}
