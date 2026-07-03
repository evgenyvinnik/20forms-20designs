import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function ProfileUpdateForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Display name</Field.Label>
        <Field.Control
          className="base-input"
          name="displayName"
          type="text"
          defaultValue="Jane Doe"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Public email</Field.Label>
        <Field.Control
          className="base-input"
          name="email"
          type="email"
          defaultValue="jane@example.com"
          required
        />
      </Field.Root>
      <Field.Root className="base-field">
        <Field.Label className="base-label">Bio</Field.Label>
        <Field.Control
          render={<textarea />}
          className="base-textarea"
          name="bio"
          defaultValue="Software developer based in San Francisco."
          rows={3}
        />
      </Field.Root>
      <button type="submit" className="base-button">
        Save profile
      </button>
    </form>
  )
}
