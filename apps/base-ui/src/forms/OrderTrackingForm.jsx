import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

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
    <form onSubmit={handleSubmit} className="base-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Track Your Order
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
          Searching for order status...
        </div>
      )}
      <Field.Root className="base-field">
        <Field.Label className="base-label">Order Number</Field.Label>
        <Field.Control
          required
          className="base-control"
          type="text"
          value={formData.orderNumber}
          onChange={(e) =>
            setFormData({ ...formData, orderNumber: e.target.value })
          }
          placeholder="ORD-12345"
        />
      </Field.Root>
      <Field.Root className="base-field">
        <Field.Label className="base-label">Billing Email</Field.Label>
        <Field.Control
          required
          className="base-control"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </Field.Root>
      <button type="submit" className="base-button">
        Track Order
      </button>
    </form>
  )
}
