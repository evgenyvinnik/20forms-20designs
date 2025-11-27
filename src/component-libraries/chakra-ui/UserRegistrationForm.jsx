import {
  Button,
  Checkbox,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
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
            <FormLabel>Username</FormLabel>
            <Input
              name="username"
              type="text"
              placeholder="Choose a username"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="Enter password"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Confirm password</FormLabel>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
            />
          </FormControl>
          <Checkbox name="terms" isRequired>
            I agree to the terms and conditions
          </Checkbox>
          <Button type="submit" colorScheme="blue">
            Create account
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default UserRegistrationForm
