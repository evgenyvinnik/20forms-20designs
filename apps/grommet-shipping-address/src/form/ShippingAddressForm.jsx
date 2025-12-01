import { useState } from 'react'
import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Select,
  TextInput,
} from 'grommet'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Recipient name"
        name="fullName"
        htmlFor="grommet-shipping-full-name"
        required
      >
        <TextInput
          id="grommet-shipping-full-name"
          name="fullName"
          type="text"
        />
      </FormField>
      <FormField
        label="Street address"
        name="street"
        htmlFor="grommet-shipping-street"
        required
      >
        <TextInput id="grommet-shipping-street" name="street" type="text" />
      </FormField>
      <FormField
        label="Apartment, suite, etc."
        name="street2"
        htmlFor="grommet-shipping-street-2"
      >
        <TextInput id="grommet-shipping-street-2" name="street2" type="text" />
      </FormField>
      <FormField
        label="City"
        name="city"
        htmlFor="grommet-shipping-city"
        required
      >
        <TextInput id="grommet-shipping-city" name="city" type="text" />
      </FormField>
      <FormField
        label="Country"
        name="country"
        htmlFor="grommet-shipping-country"
        required
      >
        <Select
          id="grommet-shipping-country"
          name="country"
          options={COUNTRIES}
          labelKey="label"
          valueKey={{ key: 'value', reduce: true }}
          value={country}
          onChange={({ value }) => setCountry(value)}
        />
      </FormField>
      <FormField
        label="State / Province / Territory"
        name="region"
        htmlFor="grommet-shipping-region"
        required
      >
        <Select
          id="grommet-shipping-region"
          name="region"
          options={regionOptions}
          placeholder="Select an option"
        />
      </FormField>
      <FormField
        label="Postal code"
        name="postalCode"
        htmlFor="grommet-shipping-postal"
        required
      >
        <TextInput id="grommet-shipping-postal" name="postalCode" type="text" />
      </FormField>
      <FormField name="default" htmlFor="grommet-shipping-default">
        <CheckBox
          id="grommet-shipping-default"
          name="default"
          label="Use as default shipping address"
        />
      </FormField>
      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Save address" />
      </Box>
    </Form>
  )
}

export default ShippingAddressForm
