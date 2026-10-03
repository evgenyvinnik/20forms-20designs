import { useState } from 'react'
import {
  Button,
  Checkbox,
  FormControl,
  Select,
  TextField,
  View,
} from 'reshaped'
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
    <form onSubmit={handleSubmit}>
      <View gap={4}>
        <FormControl required>
          <FormControl.Label>Recipient name</FormControl.Label>
          <TextField
            name="fullName"
            inputAttributes={{ type: 'text', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Street address</FormControl.Label>
          <TextField
            name="street"
            inputAttributes={{ type: 'text', required: true }}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Apartment, suite, etc.</FormControl.Label>
          <TextField name="street2" inputAttributes={{ type: 'text' }} />
        </FormControl>
        <FormControl required>
          <FormControl.Label>City</FormControl.Label>
          <TextField
            name="city"
            inputAttributes={{ type: 'text', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Country</FormControl.Label>
          <Select
            name="country"
            value={country}
            onChange={({ value }) => setCountry(value)}
            inputAttributes={{ required: true }}
          >
            {COUNTRIES.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl required>
          <FormControl.Label>State / Province / Territory</FormControl.Label>
          <Select
            key={country}
            name="region"
            placeholder="Select an option"
            inputAttributes={{ required: true }}
          >
            {regionOptions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl required>
          <FormControl.Label>Postal code</FormControl.Label>
          <TextField
            name="postalCode"
            inputAttributes={{
              type: 'text',
              pattern: postalPattern,
              inputMode: 'text',
              required: true,
            }}
          />
        </FormControl>
        <Checkbox name="default">Use as default shipping address</Checkbox>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Save address
          </Button>
        </View>
      </View>
    </form>
  )
}

export default ShippingAddressForm
