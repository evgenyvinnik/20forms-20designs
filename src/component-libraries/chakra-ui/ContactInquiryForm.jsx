import {
  Button,
  Checkbox,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Full name</FormLabel>
            <Input
              name="fullName"
              type="text"
              placeholder="Enter your full name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input name="email" type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Topic</FormLabel>
            <Select name="topic" placeholder="Select topic">
              <option value="support">Support</option>
              <option value="sales">Sales</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              placeholder="Enter your message"
              rows={4}
            />
          </FormControl>
          <Checkbox name="consent">Allow follow-up communication</Checkbox>
          <Button type="submit" colorScheme="blue">
            Submit inquiry
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default ContactInquiryForm
