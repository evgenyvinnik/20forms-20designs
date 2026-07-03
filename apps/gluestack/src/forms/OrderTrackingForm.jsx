import { useState } from 'react'

export default function OrderTrackingForm() {
  const [formData, setFormData] = useState({
    orderNumber: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Track Your Order
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
          Searching for order status...
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Order Number</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.orderNumber}
          onChange={(e) =>
            setFormData({ ...formData, orderNumber: e.target.value })
          }
          placeholder="ORD-12345"
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Billing Email</label>
        <input
          className="gluestack-input"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <button type="submit" className="gluestack-button">
        Track Order
      </button>
    </form>
  )
}
