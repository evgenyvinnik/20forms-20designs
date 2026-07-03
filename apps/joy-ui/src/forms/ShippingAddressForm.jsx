import { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
} from '@mui/joy'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

export default function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}
    >
      <FormControl required>
        <FormLabel htmlFor="joy-shipping-name">Recipient name</FormLabel>
        <Input id="joy-shipping-name" name="fullName" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-shipping-street">Street address</FormLabel>
        <Input id="joy-shipping-street" name="street" required />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="joy-shipping-street2">
          Apartment, suite, etc.
        </FormLabel>
        <Input id="joy-shipping-street2" name="street2" />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-shipping-city">City</FormLabel>
        <Input id="joy-shipping-city" name="city" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-shipping-country">Country</FormLabel>
        <Select
          id="joy-shipping-country"
          name="country"
          value={country}
          onChange={(_, val) => setCountry(val)}
          required
        >
          {COUNTRIES.map(({ value, label }) => (
            <Option key={value} value={value}>
              {label}
            </Option>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl required>
          <FormLabel htmlFor="joy-shipping-region">State / Province</FormLabel>
          <Select id="joy-shipping-region" name="region" required>
            {regionOptions.map((region) => (
              <Option key={region} value={region}>
                {region}
              </Option>
            ))}
          </Select>
        </FormControl>

        <FormControl required>
          <FormLabel htmlFor="joy-shipping-postal">Postal code</FormLabel>
          <Input id="joy-shipping-postal" name="postalCode" required />
        </FormControl>
      </Box>

      <Checkbox
        name="default"
        label="Use as default shipping address"
        sx={{ my: 1 }}
      />

      <Button type="submit">Save address</Button>
    </Box>
  )
}
