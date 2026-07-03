import { useState } from 'react'

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
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Shipping Address
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
          Shipping address saved!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Recipient Name</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.recipient}
          onChange={(e) =>
            setFormData({ ...formData, recipient: e.target.value })
          }
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Street Address</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
      </div>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <div className="gluestack-field">
          <label className="gluestack-label">City</label>
          <input
            className="gluestack-input"
            type="text"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </div>
        <div className="gluestack-field">
          <label className="gluestack-label">ZIP Code</label>
          <input
            className="gluestack-input"
            type="text"
            required
            value={formData.zip}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
          />
        </div>
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
      <button type="submit" className="gluestack-button">
        Save Address
      </button>
    </form>
  )
}
