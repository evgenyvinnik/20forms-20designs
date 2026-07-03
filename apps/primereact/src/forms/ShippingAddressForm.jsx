import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [fullName, setFullName] = useState('')
  const [street, setStreet] = useState('')
  const [street2, setStreet2] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('US')
  const [region, setRegion] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [isDefault, setIsDefault] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES
  const regionDropdownOptions = [
    { label: 'Select an option', value: '' },
    ...regionOptions.map((r) => ({ label: r, value: r })),
  ]

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-shipping-full-name"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Recipient name
        </label>
        <InputText
          id="primereact-shipping-full-name"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-shipping-street"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Street address
        </label>
        <InputText
          id="primereact-shipping-street"
          name="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-shipping-street-2"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Apartment, suite, etc.
        </label>
        <InputText
          id="primereact-shipping-street-2"
          name="street2"
          value={street2}
          onChange={(e) => setStreet2(e.target.value)}
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-shipping-city"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          City
        </label>
        <InputText
          id="primereact-shipping-city"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-shipping-country"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Country
        </label>
        <Dropdown
          id="primereact-shipping-country"
          name="country"
          value={country}
          options={COUNTRIES}
          onChange={(e) => {
            setCountry(e.value)
            setRegion('')
          }}
          optionLabel="label"
          optionValue="value"
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-shipping-region"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          State / Province / Territory
        </label>
        <Dropdown
          id="primereact-shipping-region"
          name="region"
          value={region}
          options={regionDropdownOptions}
          onChange={(e) => setRegion(e.value)}

          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-shipping-postal"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Postal code
        </label>
        <InputText
          id="primereact-shipping-postal"
          name="postalCode"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />
      </div>
      <div
        className="field-checkbox"
        style={{
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <Checkbox
          inputId="primereact-shipping-default"
          name="default"
          checked={isDefault}
          onChange={(e) => setIsDefault(e.checked)}
        />
        <label htmlFor="primereact-shipping-default">
          Use as default shipping address
        </label>
      </div>
      <Button type="submit" label="Save address" />
    </form>
  )
}

export default ShippingAddressForm
