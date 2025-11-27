import {
  Button,
  Checkbox,
  ChakraProvider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  Box,
} from '@chakra-ui/react'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={6} align="stretch">
          <VStack spacing={4}>
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
              <Input name="email" type="email" placeholder="your@email.com" />
            </FormControl>
          </VStack>

          <Box>
            <Heading size="sm" mb={3}>
              Communication channels
            </Heading>
            <VStack align="start" spacing={2}>
              <Checkbox name="emailOptIn">Email updates</Checkbox>
              <Checkbox name="smsOptIn">SMS notifications</Checkbox>
              <Checkbox name="phoneOptIn">Phone calls</Checkbox>
            </VStack>
          </Box>

          <Box>
            <Heading size="sm" mb={3}>
              Privacy options
            </Heading>
            <VStack align="start" spacing={2}>
              <Checkbox name="analytics">Allow analytics cookies</Checkbox>
              <Checkbox name="personalization">
                Allow personalized content
              </Checkbox>
            </VStack>
          </Box>

          <FormControl>
            <FormLabel>Additional notes</FormLabel>
            <Textarea
              name="notes"
              placeholder="Any additional preferences"
              rows={3}
            />
          </FormControl>

          <Button type="submit" colorScheme="blue">
            Save preferences
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default PrivacyConsentForm
