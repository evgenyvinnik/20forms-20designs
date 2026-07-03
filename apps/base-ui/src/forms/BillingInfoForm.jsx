import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

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
    <form onSubmit={handleSubmit} className="base-form">
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
      <Field.Root className="base-field">
        <Field.Label className="base-label">Street Address</Field.Label>
        <Field.Control
          required
          className="base-control"
          type="text"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
      </Field.Root>
      <Field.Root className="base-field">
        <Field.Label className="base-label">City</Field.Label>
        <Field.Control
          required
          className="base-control"
          type="text"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
      </Field.Root>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Field.Root className="base-field">
          <Field.Label className="base-label">State / Province</Field.Label>
          <Field.Control
            required
            className="base-control"
            type="text"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
          />
        </Field.Root>
        <Field.Root className="base-field">
          <Field.Label className="base-label">ZIP / Postal Code</Field.Label>
          <Field.Control
            required
            className="base-control"
            type="text"
            value={formData.zip}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
          />
        </Field.Root>
      </div>
      <button type="submit" className="base-button">
        Save Billing Info
      </button>
    </form>
  )
}
