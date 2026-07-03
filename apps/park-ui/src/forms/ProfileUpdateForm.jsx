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
        <Field.Label className="park-label">Display name</Field.Label>
        <Field.Input
          className="park-input"
          name="displayName"
          type="text"
          defaultValue="Jane Doe"
          required
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Public email</Field.Label>
        <Field.Input
          className="park-input"
          name="email"
          type="email"
          defaultValue="jane@example.com"
          required
        />
      </Field.Root>
      <Field.Root className="park-field">
        <Field.Label className="park-label">Bio</Field.Label>
        <Field.Textarea
          className="park-textarea"
          name="bio"
          defaultValue="Software developer based in San Francisco."
          rows={3}
        />
      </Field.Root>
      <button type="submit" className="park-button">
        Save profile
      </button>
    </form>
  )
}
