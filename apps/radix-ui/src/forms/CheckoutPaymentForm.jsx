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

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
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
              htmlFor="radix-checkout-email"
            >
              Email for receipt
            </Text>
            <TextField.Root
              id="radix-checkout-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-checkout-shipping-method"
            >
              Shipping method
            </Text>
            <Select.Root name="shippingMethod" required>
              <Select.Trigger
                id="radix-checkout-shipping-method"
                placeholder="Select shipping"
              />
              <Select.Content>
                <Select.Item value="standard">Standard</Select.Item>
                <Select.Item value="express">Express</Select.Item>
                <Select.Item value="overnight">Overnight</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-checkout-card-number"
            >
              Card number
            </Text>
            <TextField.Root
              id="radix-checkout-card-number"
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
              htmlFor="radix-checkout-expiration"
            >
              Expiration
            </Text>
            <TextField.Root
              id="radix-checkout-expiration"
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
              htmlFor="radix-checkout-cvc"
            >
              CVC
            </Text>
            <TextField.Root
              id="radix-checkout-cvc"
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
              htmlFor="radix-checkout-promo"
            >
              Promo code
            </Text>
            <TextField.Root
              id="radix-checkout-promo"
              name="promoCode"
              type="text"
              placeholder="Enter promo code (optional)"
              pattern="[A-Za-z0-9]{3,15}"
            />
          </Box>
          <Button type="submit">Place order</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default CheckoutPaymentForm
