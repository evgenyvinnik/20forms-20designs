import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function CheckoutPaymentForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Email for receipt</Field.Label>
        <Field.Input className="ark-input" name="email" type="email" required />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Shipping method</Field.Label>
        <select
          className="ark-select"
          name="shippingMethod"
          defaultValue="standard"
          required
        >
          <option value="standard">Standard Shipping</option>
          <option value="express">Express Shipping</option>
          <option value="overnight">Overnight Delivery</option>
        </select>
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Card number</Field.Label>
        <Field.Input
          className="ark-input"
          name="cardNumber"
          type="text"
          maxLength={19}
          required
        />
      </Field.Root>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Field.Root required className="ark-field">
          <Field.Label className="ark-label">Expiration</Field.Label>
          <Field.Input
            className="ark-input"
            name="expiration"
            type="text"
            placeholder="MM/YY"
            required
          />
        </Field.Root>
        <Field.Root required className="ark-field">
          <Field.Label className="ark-label">CVC</Field.Label>
          <Field.Input
            className="ark-input"
            name="cvc"
            type="text"
            maxLength={4}
            required
          />
        </Field.Root>
      </div>
      <Field.Root className="ark-field">
        <Field.Label className="ark-label">Promo code</Field.Label>
        <Field.Input
          className="ark-input"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
        />
      </Field.Root>
      <button type="submit" className="ark-button">
        Place order
      </button>
    </form>
  )
}
