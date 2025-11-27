import {
  Button,
  Checkbox,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
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
            <FormLabel>Phone number</FormLabel>
            <Input name="phone" type="tel" placeholder="+1 234 567 8900" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Role applied for</FormLabel>
            <Input name="role" type="text" placeholder="Position title" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Resume link</FormLabel>
            <Input name="resume" type="url" placeholder="https://" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Cover letter</FormLabel>
            <Textarea
              name="coverLetter"
              placeholder="Tell us why you're a great fit"
              rows={4}
            />
          </FormControl>
          <Checkbox name="updates">Keep me informed about future roles</Checkbox>
          <Button type="submit" colorScheme="blue">
            Submit application
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default JobApplicationForm
