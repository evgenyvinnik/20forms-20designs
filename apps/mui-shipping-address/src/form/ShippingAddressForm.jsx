import { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
} from '@mui/material'
import {
  CANADIAN_PROVINCES,
  COUNTRIES,
  US_STATES,
} from '../../constants/locationOptions'

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
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        id="mui-shipping-full-name"
        name="fullName"
        label="Recipient name"
        type="text"
        required
      />
      <TextField
        id="mui-shipping-street"
        name="street"
        label="Street address"
        type="text"
        required
      />
      <TextField
        id="mui-shipping-street-2"
        name="street2"
        label="Apartment, suite, etc."
        type="text"
      />
      <TextField
        id="mui-shipping-city"
        name="city"
        label="City"
        type="text"
        required
      />

      <TextField
        id="mui-shipping-country"
        name="country"
        label="Country"
        select
        required
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      >
        {COUNTRIES.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="mui-shipping-region"
        name="region"
        label="State / Province / Territory"
        select
        required
        defaultValue=""
      >
        <MenuItem value="">Select an option</MenuItem>
        {regionOptions.map((region) => (
          <MenuItem key={region} value={region}>
            {region}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="mui-shipping-postal"
        name="postalCode"
        label="Postal code"
        type="text"
        required
        inputProps={{ pattern: postalPattern, inputMode: 'text' }}
      />

      <FormControlLabel
        control={<Checkbox name="default" />}
        label="Use as default shipping address"
      />

      <Button type="submit" variant="contained">
        Save address
      </Button>
    </Box>
  )
}

export default ShippingAddressForm
