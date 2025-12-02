import { useState, useCallback } from 'react'
import {
  Box,
  Stack,
  TextField,
  Dropdown,
  Checkbox,
  Button,
} from 'braid-design-system'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [fullName, setFullName] = useState('')
  const [street, setStreet] = useState('')
  const [street2, setStreet2] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('US')
  const [region, setRegion] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [useDefault, setUseDefault] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }, [])

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="medium">
        <TextField
          id="braid-shipping-full-name"
          label="Recipient name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <TextField
          id="braid-shipping-street"
          label="Street address"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
        />

        <TextField
          id="braid-shipping-street-2"
          label="Apartment, suite, etc."
          value={street2}
          onChange={(e) => setStreet2(e.target.value)}
        />

        <TextField
          id="braid-shipping-city"
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <Dropdown
          id="braid-shipping-country"
          label="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {COUNTRIES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Dropdown>

        <Dropdown
          id="braid-shipping-region"
          label="State / Province / Territory"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          placeholder="Select an option"
        >
          {regionOptions.map((regionOption) => (
            <option key={regionOption} value={regionOption}>
              {regionOption}
            </option>
          ))}
        </Dropdown>

        <TextField
          id="braid-shipping-postal"
          label="Postal code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />

        <Checkbox
          id="braid-shipping-default"
          checked={useDefault}
          onChange={(e) => setUseDefault(e.target.checked)}
        >
          Use as default shipping address
        </Checkbox>

        <Box>
          <Button type="submit">Save address</Button>
        </Box>
      </Stack>
    </form>
  )
}

export default ShippingAddressForm
