import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function BillingInfoForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Name on card</Field.Label>
        <Field.Control
          className="base-input"
          name="cardName"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Card number</Field.Label>
        <Field.Control
          className="base-input"
          name="cardNumber"
          type="text"
          maxLength={19}
          pattern="[0-9]{13,19}"
          required
        />
      </Field.Root>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Field.Root required className="base-field">
          <Field.Label className="base-label">Expiration date</Field.Label>
          <Field.Control
            className="base-input"
            name="expiry"
            type="text"
            placeholder="MM/YY"
            required
          />
        </Field.Root>
        <Field.Root required className="base-field">
          <Field.Label className="base-label">Security code</Field.Label>
          <Field.Control
            className="base-input"
            name="cvc"
            type="password"
            maxLength={4}
            required
          />
        </Field.Root>
      </div>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Billing address</Field.Label>
        <Field.Control
          className="base-input"
          name="address"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Country</Field.Label>
        <select
          className="base-select"
          name="country"
          defaultValue="US"
          required
        >
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </select>
      </Field.Root>
      <button type="submit" className="base-button">
        Save billing details
      </button>
    </form>
  )
}
