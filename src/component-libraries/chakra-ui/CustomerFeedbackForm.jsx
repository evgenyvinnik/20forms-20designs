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

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input name="name" type="text" placeholder="Your name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input name="email" type="email" placeholder="your@email.com" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Overall rating</FormLabel>
            <Select name="rating" placeholder="Select rating">
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="average">Average</option>
              <option value="poor">Poor</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Comments</FormLabel>
            <Textarea name="comments" placeholder="Share your feedback" rows={4} />
          </FormControl>
          <Checkbox name="followUp">I would like a follow-up</Checkbox>
          <Button type="submit" colorScheme="blue">
            Send feedback
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default CustomerFeedbackForm
