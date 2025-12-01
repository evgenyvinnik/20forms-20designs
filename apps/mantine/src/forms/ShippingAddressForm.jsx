import { useState } from 'react'
import { Button, Checkbox, Stack, TextInput, Select } from '@mantine/core'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

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
          onChange={(value) => setCountry(value || 'US')}
          data={COUNTRIES.map(({ value, label }) => ({ value, label }))}
          required
        />
        <Select
          id="mantine-shipping-region"
          name="region"
          label="State / Province / Territory"
          placeholder="Select an option"
          data={regionOptions.map((region) => ({
            value: region,
            label: region,
          }))}
          required
        />
        <TextInput
          id="mantine-shipping-postal"
          name="postalCode"
          label="Postal code"
          type="text"
          required
        />
        <Checkbox name="default" label="Use as default shipping address" />
        <Button type="submit">Save address</Button>
      </Stack>
    </form>
  )
}

export default ShippingAddressForm
