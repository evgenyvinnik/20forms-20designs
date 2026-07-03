import { useState } from 'react'
import { Box, Button, Checkbox, Flex, SelectList, TextField } from 'gestalt'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [fullName, setFullName] = useState('')
  const [street, setStreet] = useState('')
  const [street2, setStreet2] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('US')
  const [region, setRegion] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [defaultAddress, setDefaultAddress] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-shipping-full-name"
          label="Recipient name"
          onChange={({ value }) => setFullName(value)}
          type="text"
          value={fullName}
        />
        <TextField
          id="gestalt-shipping-street"
          label="Street address"
          onChange={({ value }) => setStreet(value)}
          type="text"
          value={street}
        />
        <TextField
          id="gestalt-shipping-street-2"
          label="Apartment, suite, etc."
          onChange={({ value }) => setStreet2(value)}
          type="text"
          value={street2}
        />
        <TextField
          id="gestalt-shipping-city"
          label="City"
          onChange={({ value }) => setCity(value)}
          type="text"
          value={city}
        />
        <SelectList
          id="gestalt-shipping-country"
          label="Country"
          onChange={({ value }) => {
            setCountry(value)
            setRegion('')
          }}
          value={country}
        >
          {COUNTRIES.map(({ label, value }) => (
            <SelectList.Option key={value} label={label} value={value} />
          ))}
        </SelectList>
        <SelectList
          id="gestalt-shipping-region"
          label="State / Province / Territory"
          onChange={({ value }) => setRegion(value)}

          value={region}
        >
          {regionOptions.map((r) => (
            <SelectList.Option key={r} label={r} value={r} />
          ))}
        </SelectList>
        <TextField
          id="gestalt-shipping-postal"
          label="Postal code"
          onChange={({ value }) => setPostalCode(value)}
          type="text"
          value={postalCode}
        />
        <Checkbox
          checked={defaultAddress}
          id="gestalt-shipping-default"
          label="Use as default shipping address"
          onChange={({ checked }) => setDefaultAddress(checked)}
        />
        <Box>
          <Button color="red" text="Save address" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default ShippingAddressForm
