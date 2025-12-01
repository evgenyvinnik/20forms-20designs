import { useState } from 'react'
import {
  Box,
  FormControl,
  TextInput,
  Select,
  Checkbox,
  Button,
} from '@primer/react'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES
  const postalPattern =
    country === 'CA'
      ? '[A-Za-z]\\d[A-Za-z] ?\\d[A-Za-z]\\d'
      : '\\d{5}(-\\d{4})?'

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <FormControl required>
        <FormControl.Label>Recipient name</FormControl.Label>
        <TextInput
          id="primer-shipping-fullname"
          name="fullName"
          type="text"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Street address</FormControl.Label>
        <TextInput
          id="primer-shipping-street"
          name="street"
          type="text"
          block
        />
      </FormControl>

      <FormControl>
        <FormControl.Label>Apartment, suite, etc.</FormControl.Label>
        <TextInput
          id="primer-shipping-street2"
          name="street2"
          type="text"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>City</FormControl.Label>
        <TextInput id="primer-shipping-city" name="city" type="text" block />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Country</FormControl.Label>
        <Select
          id="primer-shipping-country"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          block
        >
          {COUNTRIES.map(({ value, label }) => (
            <Select.Option key={value} value={value}>
              {label}
            </Select.Option>
          ))}
        </Select>
      </FormControl>

      <FormControl required>
        <FormControl.Label>State / Province / Territory</FormControl.Label>
        <Select id="primer-shipping-region" name="region" block>
          <Select.Option value="">Select an option</Select.Option>
          {regionOptions.map((region) => (
            <Select.Option key={region} value={region}>
              {region}
            </Select.Option>
          ))}
        </Select>
      </FormControl>

      <FormControl required>
        <FormControl.Label>Postal code</FormControl.Label>
        <TextInput
          id="primer-shipping-postal"
          name="postalCode"
          type="text"
          pattern={postalPattern}
          inputMode="text"
          block
        />
      </FormControl>

      <FormControl>
        <Checkbox id="primer-shipping-default" name="default" />
        <FormControl.Label>Use as default shipping address</FormControl.Label>
      </FormControl>

      <Button type="submit" variant="primary" block>
        Save address
      </Button>
    </Box>
  )
}

export default ShippingAddressForm
