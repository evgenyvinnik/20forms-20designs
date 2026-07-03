import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function AppointmentRequestForm() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Submitted!'); }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
      <Field.Label className="park-label">Your name</Field.Label>
      <Field.Input className="park-input" name="name" type="text"     required />
      
    </Field.Root>
<Field.Root required className="park-field">
        <Field.Label className="park-label">Service requested</Field.Label>
        <select className="park-select" name="service" defaultValue="consultation" required>
          <option value="consultation">Initial Consultation</option>
          <option value="followup">Follow-up Session</option>
        </select>
      </Field.Root>
<Field.Root required className="park-field">
      <Field.Label className="park-label">Preferred date</Field.Label>
      <Field.Input className="park-input" name="date" type="date"     required />
      
    </Field.Root>
<Field.Root  className="park-field">
        <Field.Label className="park-label">Notes</Field.Label>
        <Field.Textarea className="park-textarea" name="notes"  rows={3}  />
      </Field.Root>
<button type="submit" className="park-button">Request appointment</button>
    </form>
  )
}