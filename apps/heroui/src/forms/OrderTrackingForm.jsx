import { useState } from 'react'
import { Input, Button } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
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
      <div className="heroui-field">
        <label className="heroui-label">Order Number</label>
        <Input
          isRequired
          type="text"
          value={formData.orderNumber}
          onValueChange={(val) =>
            setFormData({ ...formData, orderNumber: val })
          }
          placeholder="ORD-12345"
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Billing Email</label>
        <Input
          isRequired
          type="email"
          value={formData.email}
          onValueChange={(val) => setFormData({ ...formData, email: val })}
        />
      </div>
      <Button type="submit" color="primary">
        Track Order
      </Button>
    </form>
  )
}
