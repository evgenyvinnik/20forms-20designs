import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

export default function ShippingAddressForm() {
  const [country, setCountry] = useState('US')
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Shipping address saved!')
  }
  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Recipient name</Field.Label>
        <Field.Control className="base-input" name="fullName" required />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Street address</Field.Label>
        <Field.Control className="base-input" name="street" required />
      </Field.Root>
      <Field.Root className="base-field">
        <Field.Label className="base-label">Apartment, suite, etc.</Field.Label>
        <Field.Control className="base-input" name="street2" />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">City</Field.Label>
        <Field.Control className="base-input" name="city" required />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Country</Field.Label>
        <select
          className="base-select"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          {COUNTRIES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </Field.Root>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Field.Root required className="base-field">
          <Field.Label className="base-label">State / Province</Field.Label>
          <select className="base-select" name="region" required>
            {regionOptions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </Field.Root>
        <Field.Root required className="base-field">
          <Field.Label className="base-label">Postal code</Field.Label>
          <Field.Control className="base-input" name="postalCode" required />
        </Field.Root>
      </div>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
        }}
      >
        <input type="checkbox" name="default" />
        Use as default shipping address
      </label>
      <button type="submit" className="base-button">
        Save address
      </button>
    </form>
  )
}
