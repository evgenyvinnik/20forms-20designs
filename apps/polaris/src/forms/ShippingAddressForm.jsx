import { useState, useCallback } from 'react'
import { FormLayout, TextField, Select, Button } from '@shopify/polaris'

function ShippingAddressForm() {
  const [fullName, setFullName] = useState('')
  const [addressLine1, setAddressLine1] = useState('')
  const [addressLine2, setAddressLine2] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [country, setCountry] = useState('')

  const countryOptions = [
    { label: 'Select country', value: '' },
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Full name"
          type="text"
          value={fullName}
          onChange={setFullName}
          autoComplete="name"
          requiredIndicator
        />
        <TextField
          label="Address line 1"
          type="text"
          value={addressLine1}
          onChange={setAddressLine1}
          autoComplete="address-line1"
          requiredIndicator
        />
        <TextField
          label="Address line 2"
          type="text"
          value={addressLine2}
          onChange={setAddressLine2}
          autoComplete="address-line2"
        />
        <FormLayout.Group>
          <TextField
            label="City"
            type="text"
            value={city}
            onChange={setCity}
            autoComplete="address-level2"
            requiredIndicator
          />
          <TextField
            label="State/Province"
            type="text"
            value={state}
            onChange={setState}
            autoComplete="address-level1"
            requiredIndicator
          />
        </FormLayout.Group>
        <FormLayout.Group>
          <TextField
            label="ZIP/Postal code"
            type="text"
            value={zipCode}
            onChange={setZipCode}
            autoComplete="postal-code"
            requiredIndicator
          />
          <Select
            label="Country"
            options={countryOptions}
            value={country}
            onChange={setCountry}
            requiredIndicator
          />
        </FormLayout.Group>
        <Button submit variant="primary">
          Save address
        </Button>
      </FormLayout>
    </form>
  )
}

export default ShippingAddressForm
