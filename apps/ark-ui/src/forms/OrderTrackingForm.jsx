import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function OrderTrackingForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Order number</Field.Label>
        <Field.Input
          className="ark-input"
          name="orderNumber"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Email address</Field.Label>
        <Field.Input className="ark-input" name="email" type="email" required />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Postal code</Field.Label>
        <Field.Input
          className="ark-input"
          name="postalCode"
          type="text"
          required
        />
      </Field.Root>
      <button type="submit" className="ark-button">
        Find order
      </button>
    </form>
  )
}
