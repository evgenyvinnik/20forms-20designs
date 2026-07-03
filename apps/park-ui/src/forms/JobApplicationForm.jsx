import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function JobApplicationForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Full name</Field.Label>
        <Field.Input
          className="park-input"
          name="fullName"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Email address</Field.Label>
        <Field.Input
          className="park-input"
          name="email"
          type="email"
          required
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Phone number</Field.Label>
        <Field.Input className="park-input" name="phone" type="tel" required />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Role applied for</Field.Label>
        <Field.Input className="park-input" name="role" type="text" required />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Resume link</Field.Label>
        <Field.Input
          className="park-input"
          name="resumeUrl"
          type="url"
          required
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Cover letter</Field.Label>
        <Field.Textarea
          className="park-textarea"
          name="coverLetter"
          rows={4}
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
        <input type="checkbox" name="keepInformed" />
        Keep me informed about future roles
      </label>
      <button type="submit" className="park-button">
        Submit application
      </button>
    </form>
  )
}
