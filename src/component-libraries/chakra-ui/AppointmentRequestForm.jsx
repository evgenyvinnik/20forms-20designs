import {
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  HStack,
} from '@chakra-ui/react'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
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
          <HStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Preferred date</FormLabel>
              <Input name="date" type="date" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Preferred time</FormLabel>
              <Input name="time" type="time" />
            </FormControl>
          </HStack>
          <FormControl isRequired>
            <FormLabel>Reason for visit</FormLabel>
            <Textarea name="reason" placeholder="Describe your reason" rows={3} />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Request appointment
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default AppointmentRequestForm
