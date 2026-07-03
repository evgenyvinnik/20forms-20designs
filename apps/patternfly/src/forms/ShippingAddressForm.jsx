import { useState } from 'react'
import {
  Form,
  FormGroup,
  TextInput,
  Button,
  Checkbox,
  ActionGroup,
  FormSelect,
  FormSelectOption,
} from '@patternfly/react-core'
import { COUNTRIES, US_STATES, CANADIAN_PROVINCES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup
        label="Recipient name"
        isRequired
        fieldId="pf-shipping-full-name"
      >
        <TextInput
          isRequired
          type="text"
          id="pf-shipping-full-name"
          name="fullName"
        />
      </FormGroup>
      <FormGroup label="Street address" isRequired fieldId="pf-shipping-street">
        <TextInput
          isRequired
          type="text"
          id="pf-shipping-street"
          name="street"
        />
      </FormGroup>
      <FormGroup label="Apartment, suite, etc." fieldId="pf-shipping-street-2">
        <TextInput type="text" id="pf-shipping-street-2" name="street2" />
      </FormGroup>
      <FormGroup label="City" isRequired fieldId="pf-shipping-city">
        <TextInput isRequired type="text" id="pf-shipping-city" name="city" />
      </FormGroup>
      <FormGroup label="Country" isRequired fieldId="pf-shipping-country">
        <FormSelect
          id="pf-shipping-country"
          name="country"
          value={country}
          onChange={(_event, value) => setCountry(value)}
          isRequired
        >
          {COUNTRIES.map(({ value, label }) => (
            <FormSelectOption key={value} value={value} label={label} />
          ))}
        </FormSelect>
      </FormGroup>
      <FormGroup
        label="State / Province / Territory"
        isRequired
        fieldId="pf-shipping-region"
      >
        <FormSelect id="pf-shipping-region" name="region" isRequired>
          <FormSelectOption value="" label="Select an option" isPlaceholder />
          {regionOptions.map((region) => (
            <FormSelectOption key={region} value={region} label={region} />
          ))}
        </FormSelect>
      </FormGroup>
      <FormGroup label="Postal code" isRequired fieldId="pf-shipping-postal">
        <TextInput
          isRequired
          type="text"
          id="pf-shipping-postal"
          name="postalCode"
        />
      </FormGroup>
      <FormGroup fieldId="pf-shipping-default">
        <Checkbox
          label="Use as default shipping address"
          id="pf-shipping-default"
          name="default"
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Save address
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default ShippingAddressForm
