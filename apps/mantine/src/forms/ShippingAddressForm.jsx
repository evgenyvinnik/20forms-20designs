import { useState } from 'react'
import { Button, Checkbox, Select, Stack, TextInput } from '@mantine/core'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')
  const [region, setRegion] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES
  const postalPattern =
    country === 'CA' ? '[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d' : '\d{5}(-\d{4})?'

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          id="mantine-shipping-full-name"
          name="fullName"
          label="Recipient name"
          type="text"
          required
        />
        <TextInput
          id="mantine-shipping-street"
          name="street"
          label="Street address"
          type="text"
          required
        />
        <TextInput
          id="mantine-shipping-street-2"
          name="street2"
          label="Apartment, suite, etc."
          type="text"
        />
        <TextInput
          id="mantine-shipping-city"
          name="city"
          label="City"
          type="text"
          required
        />
        <Select
          id="mantine-shipping-country"
          name="country"
          label="Country"
          value={country}
          onChange={(val) => {
            setCountry(val || 'US')
            setRegion('')
          }}
          data={COUNTRIES.map(({ value, label }) => ({ value, label }))}
          required
        />
        <Select
          id="mantine-shipping-region"
          name="region"
          label="State / Province / Territory"
          placeholder="Select an option"
          value={region}
          onChange={setRegion}
          data={regionOptions.map((r) => ({ value: r, label: r }))}
          required
        />
        <TextInput
          id="mantine-shipping-postal"
          name="postalCode"
          label="Postal code"
          type="text"
          pattern={postalPattern}
          required
        />
        <Checkbox name="default" label="Use as default shipping address" />
        <Button type="submit">Save address</Button>
      </Stack>
    </form>
  )
}

export default ShippingAddressForm
