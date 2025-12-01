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
    alert('Billing details saved!')
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
              Name on card
            </Text>
            <TextField.Root
              id="radix-billing-name"
              name="cardName"
              type="text"
              placeholder="Enter name on card"
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
              placeholder="Enter card number"
              inputMode="numeric"
              pattern="[0-9]{13,19}"
              maxLength={19}
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-billing-expiration"
            >
              Expiration date
            </Text>
            <TextField.Root
              id="radix-billing-expiration"
              name="expiration"
              type="text"
              placeholder="MM/YY"
              pattern="^(0[1-9]|1[0-2])\/\d{2}$"
              inputMode="numeric"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-billing-cvc"
            >
              Security code
            </Text>
            <TextField.Root
              id="radix-billing-cvc"
              name="cvc"
              type="text"
              placeholder="CVC"
              inputMode="numeric"
              pattern="[0-9]{3,4}"
              maxLength={4}
              required
            />
          </Box>
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
                <Select.Item value="US">United States</Select.Item>
                <Select.Item value="CA">Canada</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Button type="submit">Save billing details</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default BillingInfoForm
