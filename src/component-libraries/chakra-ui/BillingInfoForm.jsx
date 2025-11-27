import {
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Name on card</FormLabel>
            <Input name="cardName" type="text" placeholder="Full name" />
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
            <FormLabel>Expiration date</FormLabel>
            <Input
              name="expiration"
              type="text"
              placeholder="MM/YY"
              inputMode="numeric"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Security code</FormLabel>
            <Input
              name="cvc"
              type="text"
              placeholder="CVC"
              inputMode="numeric"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Billing address</FormLabel>
            <Input name="address" type="text" placeholder="Street address" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Country</FormLabel>
            <Select name="country" placeholder="Select country">
              <option value="US">United States</option>
              <option value="CA">Canada</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Save billing details
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default BillingInfoForm
