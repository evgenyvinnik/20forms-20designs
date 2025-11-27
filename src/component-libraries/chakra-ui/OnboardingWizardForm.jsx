import {
  Button,
  Checkbox,
  ChakraProvider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Box,
  HStack,
} from '@chakra-ui/react'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading size="md" mb={4}>
              Step 1: Account
            </Heading>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Work email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="email@company.com"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  placeholder="Create a password"
                />
              </FormControl>
            </VStack>
          </Box>

          <Box>
            <Heading size="md" mb={4}>
              Step 2: Team
            </Heading>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Team name</FormLabel>
                <Input name="teamName" type="text" placeholder="Your team name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Team size</FormLabel>
                <Select name="teamSize" placeholder="Select size">
                  <option value="1-5">1-5</option>
                  <option value="6-20">6-20</option>
                  <option value="21-50">21-50</option>
                  <option value="50+">50+</option>
                </Select>
              </FormControl>
            </VStack>
          </Box>

          <Box>
            <Heading size="md" mb={4}>
              Step 3: Preferences
            </Heading>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Primary goal</FormLabel>
                <Textarea
                  name="goal"
                  placeholder="What do you want to achieve?"
                  rows={3}
                />
              </FormControl>
              <Checkbox name="updates">Send me product tips</Checkbox>
            </VStack>
          </Box>

          <HStack spacing={4}>
            <Button onClick={() => alert('Back action placeholder')}>Back</Button>
            <Button type="submit" colorScheme="blue">
              Finish setup
            </Button>
          </HStack>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default OnboardingWizardForm
