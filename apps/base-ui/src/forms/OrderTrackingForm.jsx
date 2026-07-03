import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function OrderTrackingForm() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Submitted!'); }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
      <Field.Label className="base-label">Order number</Field.Label>
      <Field.Control className="base-input" name="orderNumber" type="text"     required />
      
    </Field.Root>
<Field.Root required className="base-field">
      <Field.Label className="base-label">Billing email address</Field.Label>
      <Field.Control className="base-input" name="email" type="email"     required />
      
    </Field.Root>
<button type="submit" className="base-button">Track order</button>
    </form>
  )
}