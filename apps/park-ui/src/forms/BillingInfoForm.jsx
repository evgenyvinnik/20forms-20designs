import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function BillingInfoForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Billing info saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Name on card</Field.Label>
        <Field.Input
          className="park-input"
          name="cardName"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Card number</Field.Label>
        <Field.Input
          className="park-input"
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
        <Field.Root required className="park-field">
          <Field.Label className="park-label">Expiration date</Field.Label>
          <Field.Input
            className="park-input"
            name="expiry"
            type="text"
            placeholder="MM/YY"
            required
          />
        </Field.Root>
        <Field.Root required className="park-field">
          <Field.Label className="park-label">Security code</Field.Label>
          <Field.Input
            className="park-input"
            name="cvc"
            type="password"
            maxLength={4}
            required
          />
        </Field.Root>
      </div>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Billing address</Field.Label>
        <Field.Input
          className="park-input"
          name="address"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Country</Field.Label>
        <select
          className="park-select"
          name="country"
          defaultValue="US"
          required
        >
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </select>
      </Field.Root>
      <button type="submit" className="park-button">
        Save billing details
      </button>
    </form>
  )
}
