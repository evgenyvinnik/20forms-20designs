import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')
  const [region, setRegion] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionList = country === 'CA' ? CANADIAN_PROVINCES : US_STATES
  const regionOptions = [
    { value: '', label: 'Select an option' },
    ...regionList.map((r) => ({ value: r, label: r })),
  ]

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="fullName" type="text" label="Recipient name" required />
      <TextInput name="street" type="text" label="Street address" required />
      <TextInput name="street2" type="text" label="Apartment, suite, etc." />
      <TextInput name="city" type="text" label="City" required />
      <Selector
        name="country"
        label="Country"
        value={country}
        onChange={(val) => {
          setCountry(val)
          setRegion('')
        }}
        options={COUNTRIES}
      />
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
      >
        <Selector
          name="region"
          label="State / Province / Territory"
          value={region}
          onChange={(val) => setRegion(val)}
          options={regionOptions}
          required
        />
        <TextInput name="postalCode" type="text" label="Postal code" required />
      </div>
      <CheckboxInput name="default" label="Use as default shipping address" />
      <Button type="submit" variant="primary">
        Save address
      </Button>
    </form>
  )
}

export default ShippingAddressForm
