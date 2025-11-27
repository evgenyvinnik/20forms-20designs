import {
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Email for receipt</FormLabel>
            <Input name="email" type="email" placeholder="your@email.com" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Shipping method</FormLabel>
            <Select name="shippingMethod" placeholder="Select shipping">
              <option value="standard">Standard</option>
              <option value="express">Express</option>
              <option value="overnight">Overnight</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Card number</FormLabel>
            <Input
              name="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              inputMode="numeric"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Expiration</FormLabel>
            <Input
              name="expiration"
              type="text"
              placeholder="MM/YY"
              inputMode="numeric"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>CVC</FormLabel>
            <Input name="cvc" type="text" placeholder="123" inputMode="numeric" />
          </FormControl>
          <FormControl>
            <FormLabel>Promo code</FormLabel>
            <Input name="promoCode" type="text" placeholder="Enter code" />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Place order
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default CheckoutPaymentForm
