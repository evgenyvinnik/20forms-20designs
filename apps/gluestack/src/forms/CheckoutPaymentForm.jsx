import { useState } from 'react'

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
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Payment Details
      </h2>
      {submitted && (
        <div
          style={{
            padding: '0.75rem 1rem',
            background: '#dbeafe',
            color: '#1e40af',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
          }}
        >
          Payment processed successfully!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Name on Card</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.cardName}
          onChange={(e) =>
            setFormData({ ...formData, cardName: e.target.value })
          }
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Card Number</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.cardNumber}
          onChange={(e) =>
            setFormData({ ...formData, cardNumber: e.target.value })
          }
          placeholder="1234 5678 9012 3456"
        />
      </div>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <div className="gluestack-field">
          <label className="gluestack-label">Expiration (MM/YY)</label>
          <input
            className="gluestack-input"
            type="text"
            required
            value={formData.expiry}
            onChange={(e) =>
              setFormData({ ...formData, expiry: e.target.value })
            }
            placeholder="MM/YY"
          />
        </div>
        <div className="gluestack-field">
          <label className="gluestack-label">CVV</label>
          <input
            className="gluestack-input"
            type="password"
            required
            value={formData.cvv}
            onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
            placeholder="123"
            maxLength={4}
          />
        </div>
      </div>
      <button type="submit" className="gluestack-button">
        Complete Purchase
      </button>
    </form>
  )
}
