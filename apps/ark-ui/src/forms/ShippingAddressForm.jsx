import { useState } from 'react'
import { Field } from '@ark-ui/react'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

export default function ShippingAddressForm() {
  const [country, setCountry] = useState('US')
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Shipping address saved!')
  }
  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Recipient name</Field.Label>
        <Field.Input className="ark-input" name="fullName" required />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Street address</Field.Label>
        <Field.Input className="ark-input" name="street" required />
      </Field.Root>
      <Field.Root className="ark-field">
        <Field.Label className="ark-label">Apartment, suite, etc.</Field.Label>
        <Field.Input className="ark-input" name="street2" />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">City</Field.Label>
        <Field.Input className="ark-input" name="city" required />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Country</Field.Label>
        <select
          className="ark-select"
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
        <Field.Root required className="ark-field">
          <Field.Label className="ark-label">
            State / Province / Territory
          </Field.Label>
          <select className="ark-select" name="region" required>
            <option value="">Select an option</option>
            {regionOptions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </Field.Root>
        <Field.Root required className="ark-field">
          <Field.Label className="ark-label">Postal code</Field.Label>
          <Field.Input className="ark-input" name="postalCode" required />
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
      <button type="submit" className="ark-button">
        Save address
      </button>
    </form>
  )
}
