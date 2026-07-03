import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function ShippingAddressForm() {
  const [formData, setFormData] = useState({
    recipient: '',
    address: '',
    city: '',
    zip: '',
    sameAsBilling: true,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Shipping Address
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
          Shipping address saved!
        </div>
      )}
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Recipient Name</Field.Label>
        <Field.Input
          className="ark-input"
          type="text"
          value={formData.recipient}
          onChange={(e) =>
            setFormData({ ...formData, recipient: e.target.value })
          }
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Street Address</Field.Label>
        <Field.Input
          className="ark-input"
          type="text"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
      </Field.Root>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Field.Root required className="ark-field">
          <Field.Label className="ark-label">City</Field.Label>
          <Field.Input
            className="ark-input"
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </Field.Root>
        <Field.Root required className="ark-field">
          <Field.Label className="ark-label">ZIP Code</Field.Label>
          <Field.Input
            className="ark-input"
            type="text"
            value={formData.zip}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
          />
        </Field.Root>
      </div>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
          cursor: 'pointer',
        }}
      >
        <input
          type="checkbox"
          checked={formData.sameAsBilling}
          onChange={(e) =>
            setFormData({ ...formData, sameAsBilling: e.target.checked })
          }
        />
        Use as default billing address
      </label>
      <button type="submit" className="ark-button">
        Save Address
      </button>
    </form>
  )
}
