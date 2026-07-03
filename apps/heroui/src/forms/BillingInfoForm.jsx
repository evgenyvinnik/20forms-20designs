import { useState } from 'react'
import { Input, Button } from '@heroui/react'

export default function BillingInfoForm() {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Billing Information
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
          Billing details saved!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Street Address</label>
        <Input
          isRequired
          type="text"
          value={formData.address}
          onValueChange={(val) => setFormData({ ...formData, address: val })}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">City</label>
        <Input
          isRequired
          type="text"
          value={formData.city}
          onValueChange={(val) => setFormData({ ...formData, city: val })}
        />
      </div>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <div className="heroui-field">
          <label className="heroui-label">State / Province</label>
          <Input
            isRequired
            type="text"
            value={formData.state}
            onValueChange={(val) => setFormData({ ...formData, state: val })}
          />
        </div>
        <div className="heroui-field">
          <label className="heroui-label">ZIP / Postal Code</label>
          <Input
            isRequired
            type="text"
            value={formData.zip}
            onValueChange={(val) => setFormData({ ...formData, zip: val })}
          />
        </div>
      </div>
      <Button type="submit" color="primary">
        Save Billing Info
      </Button>
    </form>
  )
}
