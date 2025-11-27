import {
  Button,
  Checkbox,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Full name</FormLabel>
            <Input name="fullName" type="text" placeholder="Enter your full name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input name="email" type="email" placeholder="your@email.com" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Ticket type</FormLabel>
            <Select name="ticketType" placeholder="Select ticket">
              <option value="general">General admission</option>
              <option value="vip">VIP</option>
              <option value="student">Student</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Number of guests</FormLabel>
            <Input
              name="guestCount"
              type="number"
              inputMode="numeric"
              placeholder="0"
            />
          </FormControl>
          <Checkbox name="newsletter">Notify me about future events</Checkbox>
          <Button type="submit" colorScheme="blue">
            Register
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default EventRegistrationForm
