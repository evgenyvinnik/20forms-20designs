import { useState, useCallback } from 'react'
import {
  FormLayout,
  TextField,
  Select,
  Checkbox,
  Button,
} from '@shopify/polaris'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [fullName, setFullName] = useState('')
  const [street, setStreet] = useState('')
  const [street2, setStreet2] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('US')
  const [region, setRegion] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [isDefault, setIsDefault] = useState(false)

  const regionOptions = (country === 'CA' ? CANADIAN_PROVINCES : US_STATES).map(
    (r) => ({ label: r, value: r })
  )

  const regionLabel = country === 'CA' ? 'Province' : 'State'

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Recipient name"
          type="text"
          value={fullName}
          onChange={setFullName}
          autoComplete="name"
          requiredIndicator
        />
        <TextField
          label="Street address"
          type="text"
          value={street}
          onChange={setStreet}
          autoComplete="address-line1"
          requiredIndicator
        />
        <TextField
          label="Apartment, suite, etc."
          type="text"
          value={street2}
          onChange={setStreet2}
          autoComplete="address-line2"
        />
        <TextField
          label="City"
          type="text"
          value={city}
          onChange={setCity}
          autoComplete="address-level2"
          requiredIndicator
        />
        <Select
          label="Country"
          options={COUNTRIES}
          value={country}
          onChange={setCountry}
          requiredIndicator
        />
        <Select
          label={regionLabel}
          options={[{ label: 'Select an option', value: '' }, ...regionOptions]}
          value={region}
          onChange={setRegion}
          requiredIndicator
        />
        <TextField
          label="Postal code"
          type="text"
          value={postalCode}
          onChange={setPostalCode}
          autoComplete="postal-code"
          requiredIndicator
        />
        <Checkbox
          label="Use as default shipping address"
          checked={isDefault}
          onChange={setIsDefault}
        />
        <Button submit variant="primary">
          Save address
        </Button>
      </FormLayout>
    </form>
  )
}

export default ShippingAddressForm
