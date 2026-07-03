import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function JobApplicationForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Job application submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Full name</Field.Label>
        <Field.Control
          className="base-input"
          name="fullName"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Email address</Field.Label>
        <Field.Control
          className="base-input"
          name="email"
          type="email"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Phone number</Field.Label>
        <Field.Control
          className="base-input"
          name="phone"
          type="tel"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Role applied for</Field.Label>
        <Field.Control
          className="base-input"
          name="role"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Resume link</Field.Label>
        <Field.Control
          className="base-input"
          name="resumeUrl"
          type="url"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Cover letter</Field.Label>
        <Field.Control
          render={<textarea />}
          className="base-textarea"
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
      <button type="submit" className="base-button">
        Submit application
      </button>
    </form>
  )
}
