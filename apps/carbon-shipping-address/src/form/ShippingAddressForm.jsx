import { useState } from 'react'
import { Form, TextInput, Select, SelectItem, Button, Checkbox, Stack } from '@carbon/react'

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

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')
  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-shipping-full-name"
          name="fullName"
          labelText="Recipient name"
          required
        />
        <TextInput
          id="carbon-shipping-street"
          name="street"
          labelText="Street address"
          required
        />
        <TextInput
          id="carbon-shipping-street-2"
          name="street2"
          labelText="Apartment, suite, etc."
        />
        <TextInput
          id="carbon-shipping-city"
          name="city"
          labelText="City"
          required
        />
        <Select
          id="carbon-shipping-country"
          name="country"
          labelText="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <SelectItem value="US" text="United States" />
          <SelectItem value="CA" text="Canada" />
        </Select>
        <Select
          id="carbon-shipping-region"
          name="region"
          labelText="State / Province / Territory"
          defaultValue=""
          required
        >
          <SelectItem value="" text="Select an option" />
          {regionOptions.map((region) => (
            <SelectItem key={region} value={region} text={region} />
          ))}
        </Select>
        <TextInput
          id="carbon-shipping-postal"
          name="postalCode"
          labelText="Postal code"
          required
        />
        <Checkbox
          id="carbon-shipping-default"
          name="default"
          labelText="Use as default shipping address"
        />
        <Button type="submit">Save address</Button>
      </Stack>
    </Form>
  )
}

export default ShippingAddressForm
