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
        <Field.Label className="ark-label">Display name</Field.Label>
        <Field.Input
          className="ark-input"
          name="displayName"
          type="text"
          defaultValue="Jane Doe"
          required
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Public email</Field.Label>
        <Field.Input
          className="ark-input"
          name="email"
          type="email"
          defaultValue="jane@example.com"
          required
        />
      </Field.Root>
      <Field.Root className="ark-field">
        <Field.Label className="ark-label">Bio</Field.Label>
        <Field.Textarea
          className="ark-textarea"
          name="bio"
          defaultValue="Software developer based in San Francisco."
          rows={3}
        />
      </Field.Root>
      <button type="submit" className="ark-button">
        Save profile
      </button>
    </form>
  )
}
