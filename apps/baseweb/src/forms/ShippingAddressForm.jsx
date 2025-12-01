import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Select } from 'baseui/select'
import { Checkbox } from 'baseui/checkbox'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { useState } from 'react'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [fullName, setFullName] = useState('')
  const [street, setStreet] = useState('')
  const [street2, setStreet2] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState([{ id: 'US', label: 'United States' }])
  const [region, setRegion] = useState([])
  const [postalCode, setPostalCode] = useState('')
  const [isDefault, setIsDefault] = useState(false)

  const countryOptions = COUNTRIES.map((c) => ({ id: c.value, label: c.label }))
  const selectedCountry = country[0]?.id || 'US'
  const regionList = selectedCountry === 'CA' ? CANADIAN_PROVINCES : US_STATES
  const regionOptions = regionList.map((r) => ({ id: r, label: r }))

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale600">
        <FormControl label="Recipient name">
          <Input
            id="baseweb-shipping-full-name"
            name="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Street address">
          <Input
            id="baseweb-shipping-street"
            name="street"
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Apartment, suite, etc.">
          <Input
            id="baseweb-shipping-street-2"
            name="street2"
            type="text"
            value={street2}
            onChange={(e) => setStreet2(e.target.value)}
          />
        </FormControl>
        <FormControl label="City">
          <Input
            id="baseweb-shipping-city"
            name="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Country">
          <Select
            id="baseweb-shipping-country"
            options={countryOptions}
            value={country}
            onChange={(params) => {
              setCountry(params.value)
              setRegion([])
            }}
            required
          />
        </FormControl>
        <FormControl label="State / Province / Territory">
          <Select
            id="baseweb-shipping-region"
            options={regionOptions}
            value={region}
            placeholder="Select an option"
            onChange={(params) => setRegion(params.value)}
            required
          />
        </FormControl>
        <FormControl label="Postal code">
          <Input
            id="baseweb-shipping-postal"
            name="postalCode"
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </FormControl>
        <Checkbox
          checked={isDefault}
          onChange={(e) => setIsDefault(e.target.checked)}
        >
          Use as default shipping address
        </Checkbox>
        <Button type="submit">Save address</Button>
      </Block>
    </form>
  )
}

export default ShippingAddressForm
