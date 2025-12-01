import { useState } from 'react'
import {
  Button,
  Field,
  Input,
  Stack,
  Checkbox,
  NativeSelect,
} from '@chakra-ui/react'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES
  const postalPattern =
    country === 'CA'
      ? '[A-Za-z]\\d[A-Za-z] ?\\d[A-Za-z]\\d'
      : '\\d{5}(-\\d{4})?'

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Recipient name</Field.Label>
          <Input id="chakra-shipping-full-name" name="fullName" type="text" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Street address</Field.Label>
          <Input id="chakra-shipping-street" name="street" type="text" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Apartment, suite, etc.</Field.Label>
          <Input id="chakra-shipping-street-2" name="street2" type="text" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>City</Field.Label>
          <Input id="chakra-shipping-city" name="city" type="text" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Country</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              id="chakra-shipping-country"
              name="country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            >
              {COUNTRIES.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>
        <Field.Root required>
          <Field.Label>State / Province / Territory</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field id="chakra-shipping-region" name="region">
              <option value="">Select an option</option>
              {regionOptions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>
        <Field.Root required>
          <Field.Label>Postal code</Field.Label>
          <Input
            id="chakra-shipping-postal"
            name="postalCode"
            type="text"
            pattern={postalPattern}
          />
        </Field.Root>
        <Checkbox.Root name="default">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Use as default shipping address</Checkbox.Label>
        </Checkbox.Root>
        <Button type="submit" colorPalette="blue">
          Save address
        </Button>
      </Stack>
    </form>
  )
}

export default ShippingAddressForm
