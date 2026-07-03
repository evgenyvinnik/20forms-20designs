import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'
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

  const regionList = country === 'CA' ? CANADIAN_PROVINCES : US_STATES
  const postalPattern =
    country === 'CA'
      ? '[A-Za-z]\\d[A-Za-z] ?\\d[A-Za-z]\\d'
      : '\\d{5}(-\\d{4})?'

  const regionOptions = [
    { value: '', label: 'Select an option' },
    ...regionList.map((r) => ({ value: r, label: r })),
  ]

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        id="astryx-shipping-full-name"
        name="fullName"
        type="text"
        label="Recipient name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

      <TextInput
        id="astryx-shipping-street"
        name="street"
        type="text"
        label="Street address"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        required
      />

      <TextInput
        id="astryx-shipping-street-2"
        name="street2"
        type="text"
        label="Apartment, suite, etc."
        value={street2}
        onChange={(e) => setStreet2(e.target.value)}
      />

      <TextInput
        id="astryx-shipping-city"
        name="city"
        type="text"
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />

      <Selector
        id="astryx-shipping-country"
        name="country"
        label="Country"
        value={country}
        onChange={(val) => {
          setCountry(val)
          setRegion('')
        }}
        options={COUNTRIES}
      />

      <Selector
        id="astryx-shipping-region"
        name="region"
        label="State / Province / Territory"
        value={region}
        onChange={(val) => setRegion(val)}
        options={regionOptions}
      />

      <TextInput
        id="astryx-shipping-postal"
        name="postalCode"
        type="text"
        label="Postal code"
        pattern={postalPattern}
        inputMode="text"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        required
      />

      <CheckboxInput
        name="default"
        label="Use as default shipping address"
        checked={isDefault}
        onChange={(e) => setIsDefault(e.target.checked)}
      />

      <Button type="submit" variant="primary">
        Save address
      </Button>
    </form>
  )
}

export default ShippingAddressForm
