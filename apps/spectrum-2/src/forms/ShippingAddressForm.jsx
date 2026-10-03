import { useState } from 'react'
import {
  Button,
  ButtonGroup,
  Checkbox,
  Form,
  Picker,
  PickerItem,
  TextField,
} from '@react-spectrum/s2'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES
  const postalPattern =
    country === 'CA'
      ? '[A-Za-z]\\d[A-Za-z] ?\\d[A-Za-z]\\d'
      : '\\d{5}(-\\d{4})?'

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField label="Recipient name" name="fullName" isRequired />
      <TextField label="Street address" name="street" isRequired />
      <TextField label="Apartment, suite, etc." name="street2" />
      <TextField label="City" name="city" isRequired />
      <Picker
        label="Country"
        name="country"
        value={country}
        onChange={setCountry}
        isRequired
      >
        {COUNTRIES.map(({ value, label }) => (
          <PickerItem key={value} id={value}>
            {label}
          </PickerItem>
        ))}
      </Picker>
      <Picker
        key={country}
        label="State / Province / Territory"
        name="region"
        placeholder="Select an option"
        isRequired
      >
        {regionOptions.map((region) => (
          <PickerItem key={region} id={region}>
            {region}
          </PickerItem>
        ))}
      </Picker>
      <TextField
        label="Postal code"
        name="postalCode"
        pattern={postalPattern}
        inputMode="text"
        isRequired
      />
      <Checkbox name="default">Use as default shipping address</Checkbox>
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Save address
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default ShippingAddressForm
