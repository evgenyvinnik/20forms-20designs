import { useState } from 'react'
import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm({ theme }) {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-shipping-full-name"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Recipient name
        </Label>
        <TextInput
          id="uswds-shipping-full-name"
          name="fullName"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-shipping-street"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Street address
        </Label>
        <TextInput
          id="uswds-shipping-street"
          name="street"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-shipping-street-2"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Apartment, suite, etc.
        </Label>
        <TextInput
          id="uswds-shipping-street-2"
          name="street2"
          type="text"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-shipping-city"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          City
        </Label>
        <TextInput
          id="uswds-shipping-city"
          name="city"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-shipping-country"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Country
        </Label>
        <Select
          id="uswds-shipping-country"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          {COUNTRIES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-shipping-region"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          State / Province / Territory
        </Label>
        <Select
          id="uswds-shipping-region"
          name="region"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select an option</option>
          {regionOptions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-shipping-postal"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Postal code
        </Label>
        <TextInput
          id="uswds-shipping-postal"
          name="postalCode"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-shipping-default"
          name="default"
          label="Use as default shipping address"
        />
      </FormGroup>
      <Button type="submit">Save address</Button>
    </Form>
  )
}

export default ShippingAddressForm
