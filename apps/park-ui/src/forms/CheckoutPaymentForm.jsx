import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function CheckoutPaymentForm() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Payment Details
      </h2>
      {submitted && (
        <div
          style={{
            padding: '0.75rem 1rem',
            background: '#dcfce7',
            color: '#166534',
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
          }}
        >
          Payment processed successfully!
        </div>
      )}
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Name on Card</Field.Label>
        <Field.Input
          className="park-input"
          type="text"
          value={formData.cardName}
          onChange={(e) =>
            setFormData({ ...formData, cardName: e.target.value })
          }
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Card Number</Field.Label>
        <Field.Input
          className="park-input"
          type="text"
          value={formData.cardNumber}
          onChange={(e) =>
            setFormData({ ...formData, cardNumber: e.target.value })
          }
          placeholder="1234 5678 9012 3456"
        />
      </Field.Root>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Field.Root required className="park-field">
          <Field.Label className="park-label">Expiration (MM/YY)</Field.Label>
          <Field.Input
            className="park-input"
            type="text"
            value={formData.expiry}
            onChange={(e) =>
              setFormData({ ...formData, expiry: e.target.value })
            }
            placeholder="MM/YY"
          />
        </Field.Root>
        <Field.Root required className="park-field">
          <Field.Label className="park-label">CVV</Field.Label>
          <Field.Input
            className="park-input"
            type="password"
            value={formData.cvv}
            onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
            placeholder="123"
            maxLength={4}
          />
        </Field.Root>
      </div>
      <button type="submit" className="park-button">
        Complete Purchase
      </button>
    </form>
  )
}
