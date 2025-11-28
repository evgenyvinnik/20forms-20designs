import {
  Box,
  Button,
  Flex,
  Select,
  Text,
  TextField,
  Theme,
} from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing info saved!')
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
              htmlFor="radix-billing-name"
            >
              Cardholder name
            </Text>
            <TextField.Root
              id="radix-billing-name"
              name="cardholderName"
              type="text"
              placeholder="Enter cardholder name"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-billing-card-number"
            >
              Card number
            </Text>
            <TextField.Root
              id="radix-billing-card-number"
              name="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              required
            />
          </Box>
          <Flex gap="3">
            <Box style={{ flex: 1 }}>
              <Text
                as="label"
                size="2"
                weight="medium"
                htmlFor="radix-billing-expiry"
              >
                Expiry date
              </Text>
              <TextField.Root
                id="radix-billing-expiry"
                name="expiry"
                type="text"
                placeholder="MM/YY"
                required
              />
            </Box>
            <Box style={{ flex: 1 }}>
              <Text
                as="label"
                size="2"
                weight="medium"
                htmlFor="radix-billing-cvv"
              >
                CVV
              </Text>
              <TextField.Root
                id="radix-billing-cvv"
                name="cvv"
                type="text"
                placeholder="123"
                required
              />
            </Box>
          </Flex>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-billing-address"
            >
              Billing address
            </Text>
            <TextField.Root
              id="radix-billing-address"
              name="address"
              type="text"
              placeholder="Enter billing address"
              required
            />
          </Box>
          <Flex gap="3">
            <Box style={{ flex: 1 }}>
              <Text
                as="label"
                size="2"
                weight="medium"
                htmlFor="radix-billing-city"
              >
                City
              </Text>
              <TextField.Root
                id="radix-billing-city"
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
                htmlFor="radix-billing-zip"
              >
                ZIP code
              </Text>
              <TextField.Root
                id="radix-billing-zip"
                name="zipCode"
                type="text"
                placeholder="12345"
                required
              />
            </Box>
          </Flex>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-billing-country"
            >
              Country
            </Text>
            <Select.Root name="country" required>
              <Select.Trigger
                id="radix-billing-country"
                placeholder="Select country"
              />
              <Select.Content>
                <Select.Item value="us">United States</Select.Item>
                <Select.Item value="ca">Canada</Select.Item>
                <Select.Item value="uk">United Kingdom</Select.Item>
                <Select.Item value="de">Germany</Select.Item>
                <Select.Item value="fr">France</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Button type="submit">Save billing info</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default BillingInfoForm
