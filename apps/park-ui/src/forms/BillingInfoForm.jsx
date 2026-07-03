import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function BillingInfoForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Billing name</Field.Label>
        <Field.Input
          className="park-input"
          name="billingName"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Street address</Field.Label>
        <Field.Input
          className="park-input"
          name="address"
          type="text"
          required
        />
      </Field.Root>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Field.Root required className="park-field">
          <Field.Label className="park-label">City</Field.Label>
          <Field.Input
            className="park-input"
            name="city"
            type="text"
            required
          />
        </Field.Root>
        <Field.Root required className="park-field">
          <Field.Label className="park-label">ZIP code</Field.Label>
          <Field.Input className="park-input" name="zip" type="text" required />
        </Field.Root>
      </div>
      <button type="submit" className="park-button">
        Save billing info
      </button>
    </form>
  )
}
