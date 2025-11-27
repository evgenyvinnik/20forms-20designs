import {
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Order number</FormLabel>
            <Input name="orderNumber" type="text" placeholder="ORD-123456" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input name="email" type="email" placeholder="your@email.com" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Postal code</FormLabel>
            <Input name="postalCode" type="text" placeholder="Postal code" />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Find order
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default OrderTrackingForm
