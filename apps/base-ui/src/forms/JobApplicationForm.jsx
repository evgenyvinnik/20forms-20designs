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
        <Field.Label className="base-label">Cover letter</Field.Label>
        <Field.Control
          render={<textarea />}
          className="base-textarea"
          name="coverLetter"
          rows={4}
          required
        />
      </Field.Root>
      <button type="submit" className="base-button">
        Submit application
      </button>
    </form>
  )
}
