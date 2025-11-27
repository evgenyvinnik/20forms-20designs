import '@cloudscape-design/global-styles/index.css'
import { useState } from 'react'
import {
  Button,
  Checkbox,
  Container,
  FormField,
  Input,
  Select,
  SpaceBetween,
} from '@cloudscape-design/components'
import {
  CANADIAN_PROVINCES,
  COUNTRIES,
  US_STATES,
} from '../../constants/locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')
  const [selectedCountryOption, setSelectedCountryOption] = useState({
    value: 'US',
    label: 'United States',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions =
    country === 'CA'
      ? CANADIAN_PROVINCES.map((p) => ({ value: p, label: p }))
      : US_STATES.map((s) => ({ value: s, label: s }))

  const countryOptions = COUNTRIES.map((c) => ({
    value: c.value,
    label: c.label,
  }))

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField label="Recipient name">
            <Input
              name="fullName"
              type="text"
              placeholder="Full name"
              required
            />
          </FormField>
          <FormField label="Street address">
            <Input
              name="street"
              type="text"
              placeholder="Street address"
              required
            />
          </FormField>
          <FormField label="Apartment, suite, etc.">
            <Input name="street2" type="text" placeholder="Apt, suite, etc." />
          </FormField>
          <FormField label="City">
            <Input name="city" type="text" placeholder="City" required />
          </FormField>
          <FormField label="Country">
            <Select
              name="country"
              selectedOption={selectedCountryOption}
              onChange={({ detail }) => {
                setCountry(detail.selectedOption.value)
                setSelectedCountryOption(detail.selectedOption)
              }}
              options={countryOptions}
            />
          </FormField>
          <FormField label="State / Province / Territory">
            <Select
              name="region"
              placeholder="Select an option"
              options={regionOptions}
              selectedOption={null}
            />
          </FormField>
          <FormField label="Postal code">
            <Input
              name="postalCode"
              type="text"
              placeholder="Postal code"
              required
            />
          </FormField>
          <Checkbox name="default">Use as default shipping address</Checkbox>
          <Button variant="primary" formAction="submit">
            Save address
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default ShippingAddressForm
