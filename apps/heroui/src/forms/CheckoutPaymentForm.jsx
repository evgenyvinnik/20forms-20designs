import { useState } from 'react'
import { Input, Button } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
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
      <div className="heroui-field">
        <label className="heroui-label">Name on Card</label>
        <Input
          isRequired
          type="text"
          value={formData.cardName}
          onValueChange={(val) => setFormData({ ...formData, cardName: val })}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Card Number</label>
        <Input
          isRequired
          type="text"
          value={formData.cardNumber}
          onValueChange={(val) => setFormData({ ...formData, cardNumber: val })}
          placeholder="1234 5678 9012 3456"
        />
      </div>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <div className="heroui-field">
          <label className="heroui-label">Expiration (MM/YY)</label>
          <Input
            isRequired
            type="text"
            value={formData.expiry}
            onValueChange={(val) => setFormData({ ...formData, expiry: val })}
            placeholder="MM/YY"
          />
        </div>
        <div className="heroui-field">
          <label className="heroui-label">CVV</label>
          <Input
            isRequired
            type="password"
            value={formData.cvv}
            onValueChange={(val) => setFormData({ ...formData, cvv: val })}
            placeholder="123"
            maxLength={4}
          />
        </div>
      </div>
      <Button type="submit" color="primary">
        Complete Purchase
      </Button>
    </form>
  )
}
