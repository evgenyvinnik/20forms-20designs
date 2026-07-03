import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function SupportTicketForm() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Submitted!'); }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
      <Field.Label className="park-label">Subject</Field.Label>
      <Field.Input className="park-input" name="subject" type="text"     required />
      
    </Field.Root>
<Field.Root required className="park-field">
        <Field.Label className="park-label">Priority</Field.Label>
        <select className="park-select" name="priority" defaultValue="medium" required>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </Field.Root>
<Field.Root required className="park-field">
        <Field.Label className="park-label">Description</Field.Label>
        <Field.Textarea className="park-textarea" name="description"  rows={4} required />
      </Field.Root>
<button type="submit" className="park-button">Submit ticket</button>
    </form>
  )
}