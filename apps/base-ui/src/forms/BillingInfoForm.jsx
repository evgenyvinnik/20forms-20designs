import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function BillingInfoForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Billing name</Field.Label>
        <Field.Control
          className="base-input"
          name="billingName"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Street address</Field.Label>
        <Field.Control
          className="base-input"
          name="address"
          type="text"
          required
        />
      </Field.Root>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Field.Root required className="base-field">
          <Field.Label className="base-label">City</Field.Label>
          <Field.Control
            className="base-input"
            name="city"
            type="text"
            required
          />
        </Field.Root>
        <Field.Root required className="base-field">
          <Field.Label className="base-label">ZIP code</Field.Label>
          <Field.Control
            className="base-input"
            name="zip"
            type="text"
            required
          />
        </Field.Root>
      </div>
      <button type="submit" className="base-button">
        Save billing info
      </button>
    </form>
  )
}
