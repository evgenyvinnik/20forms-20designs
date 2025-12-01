import { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Select,
  Text,
  TextField,
  Theme,
} from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { COUNTRIES, US_STATES, CANADIAN_PROVINCES } from './locationOptions'

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
    <Theme>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="3">
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-shipping-full-name"
            >
              Recipient name
            </Text>
            <TextField.Root
              id="radix-shipping-full-name"
              name="fullName"
              type="text"
              placeholder="Enter recipient name"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-shipping-street"
            >
              Street address
            </Text>
            <TextField.Root
              id="radix-shipping-street"
              name="street"
              type="text"
              placeholder="Enter street address"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-shipping-street-2"
            >
              Apartment, suite, etc.
            </Text>
            <TextField.Root
              id="radix-shipping-street-2"
              name="street2"
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-shipping-city"
            >
              City
            </Text>
            <TextField.Root
              id="radix-shipping-city"
              name="city"
              type="text"
              placeholder="Enter city"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-shipping-country"
            >
              Country
            </Text>
            <Select.Root
              name="country"
              value={country}
              onValueChange={setCountry}
              required
            >
              <Select.Trigger
                id="radix-shipping-country"
                placeholder="Select country"
              />
              <Select.Content>
                {COUNTRIES.map((c) => (
                  <Select.Item key={c.value} value={c.value}>
                    {c.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-shipping-region"
            >
              State / Province / Territory
            </Text>
            <Select.Root name="region" required>
              <Select.Trigger
                id="radix-shipping-region"
                placeholder="Select an option"
              />
              <Select.Content>
                {regionOptions.map((region) => (
                  <Select.Item key={region} value={region}>
                    {region}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-shipping-postal"
            >
              Postal code
            </Text>
            <TextField.Root
              id="radix-shipping-postal"
              name="postalCode"
              type="text"
              placeholder="Enter postal code"
              pattern={postalPattern}
              required
            />
          </Box>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="default" />
              Use as default shipping address
            </Flex>
          </Text>
          <Button type="submit">Save address</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default ShippingAddressForm
