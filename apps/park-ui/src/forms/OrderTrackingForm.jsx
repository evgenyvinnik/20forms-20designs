import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function OrderTrackingForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Order number</Field.Label>
        <Field.Input
          className="park-input"
          name="orderNumber"
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
        <Field.Label className="park-label">Postal code</Field.Label>
        <Field.Input
          className="park-input"
          name="postalCode"
          type="text"
          required
        />
      </Field.Root>
      <button type="submit" className="park-button">
        Find order
      </button>
    </form>
  )
}
