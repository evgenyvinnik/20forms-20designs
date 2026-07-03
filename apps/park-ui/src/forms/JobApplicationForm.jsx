import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function JobApplicationForm() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Submitted!'); }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
      <Field.Label className="park-label">Full name</Field.Label>
      <Field.Input className="park-input" name="fullName" type="text"     required />
      
    </Field.Root>
<Field.Root required className="park-field">
      <Field.Label className="park-label">Email address</Field.Label>
      <Field.Input className="park-input" name="email" type="email"     required />
      
    </Field.Root>
<Field.Root required className="park-field">
      <Field.Label className="park-label">Phone number</Field.Label>
      <Field.Input className="park-input" name="phone" type="tel"     required />
      
    </Field.Root>
<Field.Root required className="park-field">
        <Field.Label className="park-label">Cover letter</Field.Label>
        <Field.Textarea className="park-textarea" name="coverLetter"  rows={4} required />
      </Field.Root>
<button type="submit" className="park-button">Submit application</button>
    </form>
  )
}