import { useState } from 'react'
import { Field } from '@ark-ui/react'

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
    <form onSubmit={handleSubmit} className="park-form">
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
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Street Address</Field.Label>
        <Field.Input
          className="park-input"
          type="text"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">City</Field.Label>
        <Field.Input
          className="park-input"
          type="text"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
      </Field.Root>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Field.Root required className="park-field">
          <Field.Label className="park-label">State / Province</Field.Label>
          <Field.Input
            className="park-input"
            type="text"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
          />
        </Field.Root>
        <Field.Root required className="park-field">
          <Field.Label className="park-label">ZIP / Postal Code</Field.Label>
          <Field.Input
            className="park-input"
            type="text"
            value={formData.zip}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
          />
        </Field.Root>
      </div>
      <button type="submit" className="park-button">
        Save Billing Info
      </button>
    </form>
  )
}
