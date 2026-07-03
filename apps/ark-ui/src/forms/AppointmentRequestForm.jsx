import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function AppointmentRequestForm() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Submitted!'); }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <Field.Root required className="ark-field">
      <Field.Label className="ark-label">Your name</Field.Label>
      <Field.Input className="ark-input" name="name" type="text"     required />
      
    </Field.Root>
<Field.Root required className="ark-field">
        <Field.Label className="ark-label">Service requested</Field.Label>
        <select className="ark-select" name="service" defaultValue="consultation" required>
          <option value="consultation">Initial Consultation</option>
          <option value="followup">Follow-up Session</option>
        </select>
      </Field.Root>
<Field.Root required className="ark-field">
      <Field.Label className="ark-label">Preferred date</Field.Label>
      <Field.Input className="ark-input" name="date" type="date"     required />
      
    </Field.Root>
<Field.Root  className="ark-field">
        <Field.Label className="ark-label">Notes</Field.Label>
        <Field.Textarea className="ark-textarea" name="notes"  rows={3}  />
      </Field.Root>
<button type="submit" className="ark-button">Request appointment</button>
    </form>
  )
}