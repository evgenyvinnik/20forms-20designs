import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function CheckoutPaymentForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Email for receipt</Field.Label>
        <Field.Control
          className="base-input"
          name="email"
          type="email"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Shipping method</Field.Label>
        <select
          className="base-select"
          name="shippingMethod"
          defaultValue="standard"
          required
        >
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="overnight">Overnight</option>
        </select>
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
          <Field.Label className="base-label">Expiration</Field.Label>
          <Field.Control
            className="base-input"
            name="expiration"
            type="text"
            placeholder="MM/YY"
            required
          />
        </Field.Root>
        <Field.Root required className="base-field">
          <Field.Label className="base-label">CVC</Field.Label>
          <Field.Control
            className="base-input"
            name="cvc"
            type="text"
            maxLength={4}
            required
          />
        </Field.Root>
      </div>
      <Field.Root className="base-field">
        <Field.Label className="base-label">Promo code</Field.Label>
        <Field.Control
          className="base-input"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
        />
      </Field.Root>
      <button type="submit" className="base-button">
        Place order
      </button>
    </form>
  )
}
