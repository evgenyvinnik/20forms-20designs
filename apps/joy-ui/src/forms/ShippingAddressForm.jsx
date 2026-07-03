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

  const regionList = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl required>
        <FormLabel>Recipient name</FormLabel>
        <Input name="fullName" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Street address</FormLabel>
        <Input name="street" required />
      </FormControl>
      <FormControl>
        <FormLabel>Apartment, suite, etc.</FormLabel>
        <Input name="street2" />
      </FormControl>
      <FormControl required>
        <FormLabel>City</FormLabel>
        <Input name="city" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Country</FormLabel>
        <Select
          name="country"
          value={country}
          onChange={(e, val) => setCountry(val)}
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
          <FormLabel>State / Province / Territory</FormLabel>
          <Select name="region" required placeholder="Select an option">
            {regionList.map((region) => (
              <Option key={region} value={region}>
                {region}
              </Option>
            ))}
          </Select>
        </FormControl>
        <FormControl required>
          <FormLabel>Postal code</FormLabel>
          <Input name="postalCode" required />
        </FormControl>
      </Box>
      <Checkbox name="default" label="Use as default shipping address" />
      <Button type="submit">Save address</Button>
    </Box>
  )
}
