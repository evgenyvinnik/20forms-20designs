import { useState, useMemo } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming'
]

const CANADIAN_PROVINCES = [
  'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
  'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan',
  'Northwest Territories', 'Nunavut', 'Yukon'
]

const countryOptions = [
  { label: 'United States', value: 'US' },
  { label: 'Canada', value: 'CA' },
]

function ShippingAddressForm() {
  const [country, setCountry] = useState({ label: 'United States', value: 'US' })
  const [region, setRegion] = useState(null)

  const regionOptions = useMemo(() => {
    const regions = country?.value === 'CA' ? CANADIAN_PROVINCES : US_STATES
    return regions.map((r) => ({ label: r, value: r }))
  }, [country])

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-shipping-full-name">Recipient name</Label>
          <Textfield
            id="atlaskit-shipping-full-name"
            name="fullName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-shipping-street">Street address</Label>
          <Textfield
            id="atlaskit-shipping-street"
            name="street"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-shipping-street-2">Apartment, suite, etc.</Label>
          <Textfield
            id="atlaskit-shipping-street-2"
            name="street2"
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-shipping-city">City</Label>
          <Textfield
            id="atlaskit-shipping-city"
            name="city"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-shipping-country">Country</Label>
          <Select
            inputId="atlaskit-shipping-country"
            name="country"
            options={countryOptions}
            value={country}
            onChange={(val) => {
              setCountry(val)
              setRegion(null)
            }}
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-shipping-region">State / Province / Territory</Label>
          <Select
            inputId="atlaskit-shipping-region"
            name="region"
            options={regionOptions}
            value={region}
            onChange={setRegion}
            placeholder="Select an option"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-shipping-postal">Postal code</Label>
          <Textfield
            id="atlaskit-shipping-postal"
            name="postalCode"
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="default"
            label="Use as default shipping address"
          />
        </Box>
        <Button type="submit" appearance="primary">Save address</Button>
      </Stack>
    </form>
  )
}

export default ShippingAddressForm
