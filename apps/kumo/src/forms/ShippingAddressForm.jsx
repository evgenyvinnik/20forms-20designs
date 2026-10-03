import { useState } from 'react'
import { Button, Checkbox, Input, Select } from '@cloudflare/kumo'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES
  const postalPattern =
    country === 'CA'
      ? '[A-Za-z]\\d[A-Za-z] ?\\d[A-Za-z]\\d'
      : '\\d{5}(-\\d{4})?'

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Input label="Recipient name" name="fullName" type="text" required />
      <Input label="Street address" name="street" type="text" required />
      <Input label="Apartment, suite, etc." name="street2" type="text" />
      <Input label="City" name="city" type="text" required />
      <Select
        label="Country"
        name="country"
        value={country}
        onValueChange={setCountry}
        items={COUNTRIES}
        required
        className="kumo-select"
      />
      <Select
        key={country}
        label="State / Province / Territory"
        name="region"
        placeholder="Select an option"
        items={regionOptions.map((region) => ({
          value: region,
          label: region,
        }))}
        required
        className="kumo-select"
      />
      <Input
        label="Postal code"
        name="postalCode"
        type="text"
        pattern={postalPattern}
        inputMode="text"
        required
      />
      <Checkbox label="Use as default shipping address" name="default" />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Save address
        </Button>
      </div>
    </form>
  )
}

export default ShippingAddressForm
