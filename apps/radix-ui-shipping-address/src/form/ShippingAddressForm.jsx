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
import {
  COUNTRIES,
  US_STATES,
  CANADIAN_PROVINCES,
} from './locationOptions'

function ShippingAddressForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  return (
    <Theme>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="3">
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-shipping-name"
            >
              Full name
            </Text>
            <TextField.Root
              id="radix-shipping-name"
              name="fullName"
              type="text"
              placeholder="Enter full name"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-shipping-address1"
            >
              Address line 1
            </Text>
            <TextField.Root
              id="radix-shipping-address1"
              name="address1"
              type="text"
              placeholder="Street address"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-shipping-address2"
            >
              Address line 2
            </Text>
            <TextField.Root
              id="radix-shipping-address2"
              name="address2"
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
            />
          </Box>
          <Flex gap="3">
            <Box style={{ flex: 1 }}>
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
            <Box style={{ flex: 1 }}>
              <Text
                as="label"
                size="2"
                weight="medium"
                htmlFor="radix-shipping-state"
              >
                State/Province
              </Text>
              <Select.Root name="state">
                <Select.Trigger
                  id="radix-shipping-state"
                  placeholder="Select"
                />
                <Select.Content>
                  <Select.Group>
                    <Select.Label>US States</Select.Label>
                    {US_STATES.map((state) => (
                      <Select.Item key={`us-${state}`} value={state}>
                        {state}
                      </Select.Item>
                    ))}
                  </Select.Group>
                  <Select.Group>
                    <Select.Label>Canadian Provinces</Select.Label>
                    {CANADIAN_PROVINCES.map((province) => (
                      <Select.Item key={`ca-${province}`} value={province}>
                        {province}
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Box>
          </Flex>
          <Flex gap="3">
            <Box style={{ flex: 1 }}>
              <Text
                as="label"
                size="2"
                weight="medium"
                htmlFor="radix-shipping-zip"
              >
                ZIP/Postal code
              </Text>
              <TextField.Root
                id="radix-shipping-zip"
                name="zipCode"
                type="text"
                placeholder="Enter ZIP code"
                required
              />
            </Box>
            <Box style={{ flex: 1 }}>
              <Text
                as="label"
                size="2"
                weight="medium"
                htmlFor="radix-shipping-country"
              >
                Country
              </Text>
              <Select.Root name="country" defaultValue="us">
                <Select.Trigger id="radix-shipping-country" />
                <Select.Content>
                  {COUNTRIES.map((country) => (
                    <Select.Item key={`country-${country.value}`} value={country.value}>
                      {country.label}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Box>
          </Flex>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-shipping-phone"
            >
              Phone number
            </Text>
            <TextField.Root
              id="radix-shipping-phone"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
            />
          </Box>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="defaultAddress" />
              Set as default shipping address
            </Flex>
          </Text>
          <Button type="submit">Save address</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default ShippingAddressForm
