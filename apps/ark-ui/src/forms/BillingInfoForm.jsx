import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function BillingInfoForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Billing name</Field.Label>
        <Field.Input
          className="ark-input"
          name="billingName"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Street address</Field.Label>
        <Field.Input
          className="ark-input"
          name="address"
          type="text"
          required
        />
      </Field.Root>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Field.Root required className="ark-field">
          <Field.Label className="ark-label">City</Field.Label>
          <Field.Input className="ark-input" name="city" type="text" required />
        </Field.Root>
        <Field.Root required className="ark-field">
          <Field.Label className="ark-label">ZIP code</Field.Label>
          <Field.Input className="ark-input" name="zip" type="text" required />
        </Field.Root>
      </div>
      <button type="submit" className="ark-button">
        Save billing info
      </button>
    </form>
  )
}
